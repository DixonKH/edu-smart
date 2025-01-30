import { getApiUrl } from "@/shared/lib/config";
import {
  AllLessonAdminInquiry,
  Lesson,
  LessonInput,
  LessonInquiry,
  LessonUpdate,
} from "@/shared/types/lesson";
import { TotalCounter } from "@/shared/types/member";
import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Lessons {
  lessons: Lesson[];
  currentLesson: Lesson | null;
  metaCounter: TotalCounter[];

  // Actions
  createLesson: (id: string, input: LessonInput) => Promise<void>;
  getLesson: (memberId: string, id: string) => Lesson | null;
  getLessons: (input: LessonInquiry) => Promise<void>;
  updateLesson: (id: string, input: LessonUpdate) => Promise<void>;
  likeTargetLesson: (id: string, likeRefId: string) => Promise<void>;
  getLessonsByAdmin: (input: AllLessonAdminInquiry) => Promise<void>;
  updateLessonByAdmin: (input: LessonUpdate) => Promise<void>;
  deleteLessonByAdmin: (input: string) => Promise<void>;
}

export const useLessonStore = create<Lessons>()(
  devtools((set) => ({
    lessons: [],
    currentLesson: null,
    metaCounter: [],    

    createLesson: async (id: string, input: LessonInput) => {
      try {
        const url = getApiUrl("/lessons/create");
        const formData = new FormData();
        formData.append("lessonTitle", input.lessonTitle);
        formData.append("lessonCategory", input.lessonCategory);
        formData.append("lessonLevel", input.lessonLevel);
        formData.append("lessonDesc", input.lessonDesc);
        if (input.lessonVideo) {
          formData.append("lessonVideo", input.lessonVideo);
        }

        const storedData = localStorage.getItem("member-store");
        if (!storedData) {
          throw new Error("No stored member data found");
        }
        const parsedData = JSON.parse(storedData);
        const { accessToken } = parsedData.state;

        if (!accessToken) {
          throw new Error("Access token is missing");
        }

        const result = await axios.post<Lesson>(url, formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });

        const data = result.data;
        console.log("Created lessons:", data);
        set({ currentLesson: data });
      } catch (error) {
        console.error("Failed to create lessons", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },

    getLessons: async (input: LessonInquiry) => {
      try {
        const url = getApiUrl("/lessons/getLessons")
        const result = await axios.get(url, {
          params: {
            page: input.page,
            limit: input.limit,
            sort: input?.sort,
            direction: input?.direction,
            ...(input.search?.text ? {"search[text]": input.search?.text} : {}),
           ...(input.search?.lessonLevel ? {"search[lessonLevel]": input.search?.lessonLevel} : {}), 
          },
        });
        const lessonData = result.data.list;
        console.log("Fetched lessons:", lessonData);
        set({ lessons: lessonData });
        set({ metaCounter: result.data.metaCounter });
      } catch (error) {
        console.error("Failed to get lessons", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },

    getLesson: async (memberId: string, _id: string) => {
      try {
        const url = getApiUrl(`/lessons/getLesson`);
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
          params: {_id},
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        });

        const lessonData = result.data;
        console.log("Fetched lesson:", lessonData);
        set({ currentLesson: lessonData });
      } catch (err) {
        console.error("Failed to get lesson", err);
        if (axios.isAxiosError(err)) {
          console.error(
            "AxiosError details:",
            err.response?.data || err.message
          );
        }
        throw err;
      }
    },

    likeTargetLesson: async (id: string, lessonId: string) => {
         try {
            const url = getApiUrl(`/lessons/likeTargetLesson`);
            const storedData = localStorage.getItem("member-store");
            if (!storedData) {
              throw new Error("No stored member data found.");
            }
            const parsedData = JSON.parse(storedData);
            const { accessToken } = parsedData.state;
            if (!accessToken) {
              throw new Error("Access token is missing.");
            }
            const result = await axios.post<Lesson>(url, {lessonId}, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              withCredentials: true,
            });
            const lessonData = result.data;
            console.log("Fetched lesson:", lessonData);
            set({ currentLesson: lessonData });
         } catch(err) {
            console.error("Failed to get lesson", err);
            if (axios.isAxiosError(err)) {
              console.error(
                "AxiosError details:",
                err.response?.data || err.message
              );
            }
            throw err;
         }
    }
  }))
);

if (typeof window !== "undefined") {
  (window as any).useLessonStore = useLessonStore;
}
