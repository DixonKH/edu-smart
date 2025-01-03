import {
  LoginInput,
  Member,
  MemberInput,
  MemberInquery,
  TotalCounter,
} from "@/shared/types/member";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import { getApiUrl } from "@/shared/lib/config";

interface MemberStore {
  members: Member[];
  currentMember: Member | null;
  accessToken: string | null;
  metaCounter: TotalCounter[];

  // Actions
  signUp: (member: MemberInput) => Promise<void>;
  login: (member: LoginInput) => Promise<void>;
  logout: () => void;
  getTeachers: (input: MemberInquery) => Promise<void>;
  getMemberById: (id: string) => Member | undefined;
  createMember: (member: Partial<Member>) => Promise<void>;
  updateMember: (id: string, updates: Partial<Member>) => Promise<void>;
  deleteMember: (id: string) => Promise<void>;
}

export const useMemberStore = create<MemberStore>()(
  devtools(
   persist( 
    (set, get) => ({
    members: [],
    currentMember: null,
    accessToken: null,
    metaCounter: [],

    signUp: async (member: MemberInput) => {
      try {
        const url = getApiUrl("/member/signup");
        const result = await axios.post<Member>(url, member, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        const data = result.data;

        console.log("Fetched members:", data);
        set({
          currentMember: data, // Save the member data
          accessToken: data.accessToken || null, // Save the access token
        });

      } catch (error) {
        console.log("Error fetching members:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },

    login: async (input: LoginInput) => {
      try {
        const url = getApiUrl("/member/login");
        console.log("Fetching from URL:", url); // Log URL
        const result = await axios.post(url, input, {
          withCredentials: true,
        });
        const data: Member = result.data;
        console.log("Fetched members:", data);

        set({
          currentMember: data, // Save the member data
          accessToken: data.accessToken || null, // Save the access token
        });

      } catch (error) {
        console.log("Error fetching members:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },

    logout: () => {
      set({ currentMember: null, accessToken: null });
    },

    getTeachers: async (input: MemberInquery): Promise<void> => {
      try {
        let url = getApiUrl(`/member/getTeachers`);

        const result = await axios.get(url, {
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

        console.log("getTeachers:", data);
        console.log(
          "Received direction:",
          typeof input.direction,
          input.direction
        );
        set({ members: result.data.list });
        set({ metaCounter: result.data.metaCounter });
      } catch (error) {
        console.log("Error fetching members:", error);
        if (axios.isAxiosError(error)) {
          console.error(
            "AxiosError details:",
            error.response?.data || error.message
          );
        }
        throw error;
      }
    },
    getMemberById: (id: any) =>
      get().members.find((member: Member) => member._id === id),
    createMember: async (member) => {},
    updateMember: async (id, updates) => {},
    deleteMember: async (id) => {},
  }),
  {
    name: "member-store",  // The name to store the data in localStorage
    partialize: (state) => ({
      currentMember: state.currentMember,
      accessToken: state.accessToken,
    })
  }
)
  )
);

// Expose the store in the browser for testing
if (typeof window !== "undefined") {
  (window as any).useMemberStore = useMemberStore;
}
