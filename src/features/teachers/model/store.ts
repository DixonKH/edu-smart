import { serverApi } from "@/shared/lib/config";
import { Member } from "@/shared/types/member";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const path = serverApi;

interface MemberStore {
  members: Member[];
  currentMember: Member | null;

  // Actions
  fetchMembers: () => Promise<void>;
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

      fetchMembers: async () => {
        try {
          const url = "http://localhost:3007/member/getTeachers";
          console.log("Fetching from URL:", url); // Log URL
          const result = await fetch(url);
          if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
          }
          const data = await result.json();
          console.log("Fetched members:", data);
          set({ members: data });
        } catch (error) {
          console.log("Error fetching members:", error);
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
