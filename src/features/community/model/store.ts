import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import { getApiUrl } from "@/shared/lib/config";
import { TotalCounter } from "@/shared/types/member";
import {
  AllBoardArticleAdminInquiry,
  BoardArticleInput,
  BoardArticleInquiry,
  BoardArticleUpdate,
} from "@/shared/types/article";

interface BoardArticle {
  articles: BoardArticle[];
  newArticle: BoardArticle | null;
  metaCounter: TotalCounter[];

  // Actions
  createArticle: (id: string, input: BoardArticleInput) => Promise<void>;
  getArticleById: (id: string) => BoardArticle | undefined;
  getArticles: (input: BoardArticleInquiry) => Promise<void>;
  updateArticle: (
    id: string,
    input: Partial<BoardArticleUpdate>
  ) => Promise<void>;
  likeTargetArticle: (id: string, likeRefId: string) => Promise<void>;
  getArticlesByAdmin: (input: AllBoardArticleAdminInquiry) => Promise<void>;
  updateArticleByAdmin: (input: Partial<BoardArticleUpdate>) => Promise<void>;
  deleteArticleByAdmin: (id: string) => Promise<void>;
}

export const useArticleStore = create<BoardArticle>()(
  devtools((set, get) => ({
    articles: [],
    newArticle: null,
    metaCounter: [],

    createArticle: async (memberId: string, input: BoardArticleInput) => {
      try {
        const url = getApiUrl("/article/createBoardArticle");
        const formData = new FormData();
        formData.append("articleTitle", input.articleTitle);
        formData.append("articleContent", input.articleContent);
        formData.append("articleCategory", input.articleCategory);
        if (input.articleImage) {
            formData.append("articleImage", input.articleImage);
          }
        const storedData = localStorage.getItem("member-store");
        if (!storedData) {
          throw new Error("No stored member data found.");
        }
        const parsedData = JSON.parse(storedData);
        const { accessToken } = parsedData.state;

        if (!accessToken) {
          throw new Error("Access token is missing.");
        }

        const result = await axios.post<BoardArticle>(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        });
        const data = result.data;
        console.log("Fetched articles:", data);
        set({ newArticle: data });
      } catch (error) {
        console.log("Error fetching articles:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },
    // getArticleById: (id: string) => {
    //     const article = get().articles.find(
    //         (article) => article._id === id
    //     );
    //     return article;
    // },
    getArticles: async (input: BoardArticleInquiry) => {
      try {
        const url = getApiUrl("/article/getArticles");
        const result = await axios.get<BoardArticle[]>(url, {
          params: {
            page: input.page,
            limit: input.limit,
            sort: input?.sort,
            direction: input?.direction,
            ...(input.search?.text
              ? { "search[text]": input.search.text }
              : {}),
          },
        });
        const data = result.data;
        console.log("Fetched articles:", data);
        set({ articles: data });
      } catch (error) {
        console.log("Error fetching articles:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },
    updateArticle: async (id: string, input: Partial<BoardArticleUpdate>) => {
      try {
        const url = getApiUrl(`/article/updateArticle/${id}`);
        const result = await axios.put<BoardArticle>(url, input);
        const data = result.data;
        console.log("Fetched articles:", data);
        set({ newArticle: data });
      } catch (error) {
        console.log("Error fetching articles:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },
    likeTargetArticle: async (id: string, likeRefId: string) => {
      try {
        const url = getApiUrl(`/article/likeTargetArticle/${id}/${likeRefId}`);
        const result = await axios.put<BoardArticle>(url);
        const data = result.data;
        console.log("Fetched articles:", data);
        set({ newArticle: data });
      } catch (error) {
        console.log("Error fetching articles:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },
    getArticlesByAdmin: async (input: AllBoardArticleAdminInquiry) => {
      try {
        const url = getApiUrl("/article/getArticlesByAdmin");
        const result = await axios.get<BoardArticle[]>(url, {
          // params: {
          //     page: input.page,
          //     limit: input.limit,
          //     sort: input?.sort,
          //     direction: input?.direction,
          //     ...(input.search?.text
          //         ? { "search[text]": input.search.text }
          //         : {}),
          // },
        });
        const data = result.data;
        console.log("Fetched articles:", data);
        set({ articles: data });
      } catch (error) {
        console.log("Error fetching articles:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },
    updateArticleByAdmin: async (input: Partial<BoardArticleUpdate>) => {
      try {
        const url = getApiUrl("/article/updateArticleByAdmin");
        const result = await axios.put<BoardArticle>(url, input);
        const data = result.data;
        console.log("Fetched articles:", data);
        set({ newArticle: data });
      } catch (error) {
        console.log("Error fetching articles:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },
    deleteArticleByAdmin: async (id: string) => {
      try {
        const url = getApiUrl(`/article/deleteArticleByAdmin/${id}`);
        const result = await axios.delete<BoardArticle>(url);
        const data = result.data;
        console.log("Fetched articles:", data);
        set({ newArticle: data });
      } catch (error) {
        console.log("Error fetching articles:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },
  }))
);
