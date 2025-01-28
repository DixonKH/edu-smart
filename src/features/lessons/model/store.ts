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
        console.log("Fetched lessons:", data);
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
  }))
);

if (typeof window !== "undefined") {
  (window as any).useLessonStore = useLessonStore;
}
