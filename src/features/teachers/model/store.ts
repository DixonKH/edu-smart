import {
  Member,
  MemberInput,
  MemberInquery,
  TotalCounter,
} from "@/shared/types/member";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import { getApiUrl } from "@/shared/lib/config";

interface MemberStore {
  members: Member[];
  currentMember: Member | null;
  metaCounter: TotalCounter[];

  // Actions
  getTeachers: (input: MemberInquery) => Promise<void>;
  fetchMemberById: (id: string) => Promise<void>;
  createMember: (member: Partial<Member>) => Promise<void>;
  updateMember: (id: string, updates: Partial<Member>) => Promise<void>;
  deleteMember: (id: string) => Promise<void>;
}

export const useMemberStore = create<MemberStore>()(
  devtools(
    (set) => ({
      members: [],
      currentMember: null,
      metaCounter: [],

      //   signUp: async (member: MemberInput) => {
      //     try {
      //       const url = "http://localhost:3007/member/signup";
      //       console.log("Fetching from URL:", url); // Log URL
      //       const result = await axios.post<Member>(url, member, {
      //         withCredentials: true,
      //       });
      //       const data = result.data;

      //       console.log("Fetched members:", data);
      //       set((state) => ({ members: [...state.members, data] }));
      //     } catch (error) {
      //       console.log("Error fetching members:", error);
      //       if (axios.isAxiosError(error)) {
      //         console.error(
      //           "AxiosError details:",
      //           error.response?.data || error.message
      //         );
      //       }
      //       throw error;
      //     }
      //   },

      getTeachers: async (input: MemberInquery): Promise<void> => {
        try {
          let url = getApiUrl(`/member/getTeachers?page=${input.page}&limit=${input.limit}`);
          if (input.sort) {
            url += `&sort=${encodeURIComponent(input.sort)}`;
          }
          if (input.search?.text) {
            url += `&search=${encodeURIComponent(input.search.text)}`;
          }
          if (input.direction) {
            url += `&direction=${encodeURIComponent(input.direction)}`;
          }

          console.log("Final API URL:", url);

          const result = await axios.get(url);
          const data = result.data;

          console.log("getTeachers:", data);
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
      fetchMemberById: async (id) => {},
      createMember: async (member) => {},
      updateMember: async (id, updates) => {},
      deleteMember: async (id) => {},
    }),
    { enabled: true, name: "member-store" }
  )
);

// Expose the store in the browser for testing
if (typeof window !== "undefined") {
  (window as any).useMemberStore = useMemberStore;
}
