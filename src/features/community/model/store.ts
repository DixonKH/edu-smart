import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getApiUrl } from "@/shared/lib/config";
import { TotalCounter } from "@/shared/types/member";
import axios from "axios";
import {
  AllBoardArticleAdminInquiry,
  BoardArticle,
  BoardArticleInput,
  BoardArticleInquiry,
  BoardArticleUpdate,
} from "@/shared/types/article";

interface BoardArticles {
  articles: BoardArticle[];
  newArticle: BoardArticle | null;
  metaCounter: TotalCounter[];

  // Actions
  createArticle: (id: string, input: BoardArticleInput) => Promise<void>;
  getArticle: (memberId: string, _id: string) => BoardArticle | undefined;
  getArticles: (input: BoardArticleInquiry) => Promise<void>;
  updateArticle: (
    id: string,
    input: Partial<BoardArticleUpdate>
  ) => Promise<void>;
  likeTargetArticle: (id: string, likeRefId: string) => Promise<void>;
  getArticlesByAdmin: (input: AllBoardArticleAdminInquiry) => Promise<void>;
  updateArticleByAdmin: (input: Partial<BoardArticleUpdate>) => Promise<void>;
  removeArticleByAdmin: (id: string) => Promise<void>;
}

export const useArticleStore = create<BoardArticles>()(
  devtools((set) => ({
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
    getArticles: async (input: BoardArticleInquiry) => {
      try {
        const url = getApiUrl("/article/getBoardArticles");
        const result = await axios.get(url, {
          params: {
            page: input.page,
            limit: input.limit,
            sort: input?.sort,
            direction: input?.direction,
            ...(input.search?.text
              ? { "search[text]": input.search.text }
              : {}),
            ...(input.search?.articleCategory
              ? { "search[articleCategory]": input.search.articleCategory }
              : {}),
          },
        });
        const articleData = result.data.list;
        console.log("Fetched articles:", articleData);
        set({ articles: articleData });
        set({ metaCounter: result.data.metaCounter });
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
    getArticle: async (memberId: string, _id: string) => {
      try {
        const url = getApiUrl(`/article/getBoardArticle`);
        const storedData = localStorage.getItem("member-store");
        if (!storedData) {
          throw new Error("No stored member data found.");
        }
        const parsedData = JSON.parse(storedData);
        const { accessToken } = parsedData.state;

        if (!accessToken) {
          throw new Error("Access token is missing.");
        }

        const result = await axios.get(url, {
          params: {
            _id,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        });

        const articleData = result.data;
        console.log("Fetched article:", articleData);
        set({ newArticle: articleData });
      } catch (error) {
        console.log("Error fetching article:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },

    updateArticle: async (id: string, input: BoardArticleUpdate) => {
      try {
        const url = getApiUrl(`/article/updateBoardArticle`);
        const formData = new FormData();
        formData.append("_id", input._id || "");
        formData.append("articleTitle", input.articleTitle || "");
        formData.append("articleContent", input.articleContent || "");
        formData.append("articleCategory", input.articleCategory || "");
        if (input.articleImage) {
          formData.append("articleImage", input.articleImage || "");
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
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
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
    likeTargetArticle: async (id: string, articleId: string) => {
      try {
        const url = getApiUrl(`/article/likeTargetBoardArticle`);
        const storedData = localStorage.getItem("member-store");
        if (!storedData) {
          throw new Error("No stored member data found.");
        }
        const parsedData = JSON.parse(storedData);
        const { accessToken } = parsedData.state;

        if (!accessToken) {
          throw new Error("Access token is missing.");
        }

        const result = await axios.post<BoardArticle>(
          url,
          {
            articleId,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        );
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
        const url = getApiUrl("/article/getAllBoardArticlesAdmin");
        const storedData = localStorage.getItem("member-store");
        if (!storedData) {
          throw new Error("No stored member data found.");
        }
        const parsedData = JSON.parse(storedData);
        const { accessToken } = parsedData.state;
        if (!accessToken) {
          throw new Error("Access token is missing.");
        }
        const result = await axios.get(url, {
          params: {
            page: input.page,
            limit: input.limit,
            sort: input?.sort,
            direction: input?.direction,
            ...(input.search?.text
              ? { "search[text]": input.search.text }
              : {}),
            ...(input.search?.articleStatus
              ? { "search[articleStatus]": input.search.articleStatus }
              : {}),
            ...(input.search?.articleCategory
              ? { "search[articleCategory]": input.search.articleCategory }
              : {}),
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        });
        const data = result.data.list;
        console.log("Fetched articles:", data);
        set({ articles: data });
        set({ metaCounter: result.data.metaCounter });
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
        const url = getApiUrl("/article/updateBoardArticleAdmin");
        const storedData = localStorage.getItem("member-store");
        if (!storedData) {
          throw new Error("No stored member data found.");
        }
        const parsedData = JSON.parse(storedData);
        const { accessToken } = parsedData.state;
        if (!accessToken) {
          throw new Error("Access token is missing.");
        }

        const result = await axios.post<BoardArticle>(url, input, {
          headers: {
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
    removeArticleByAdmin: async (id: string) => {
      try {
        const url = getApiUrl(`/article/removeBoardArticleAdmin`);
        const storedData = localStorage.getItem("member-store");
        if (!storedData) {
          throw new Error("No stored member data found.");
        }
        const parsedData = JSON.parse(storedData);
        const { accessToken } = parsedData.state;
        if (!accessToken) {
          throw new Error("Access token is missing.");
        }
        const result = await axios.post<BoardArticle>(
          url,
          {
            _id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        );
        const data = result.data;
        console.log("Fetched articles:", data);
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

// Expose the store in the browser for testing
if (typeof window !== "undefined") {
  (window as any).useArticleStore = useArticleStore;
}
