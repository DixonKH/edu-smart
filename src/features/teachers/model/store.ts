import {
  LoginInput,
  Member,
  MemberInput,
  MemberInquery,
  MemberUpdate,
  TotalCounter,
} from "@/shared/types/member";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import { getApiUrl } from "@/shared/lib/config";

interface MemberStore {
  members: Member[];
  currentMember: Member | null;
  updatedMember: Member | null;
  teachOwner: Member | null;
  accessToken: string | null;
  metaCounter: TotalCounter[];

  // Actions
  signUp: (member: MemberInput) => Promise<void>;
  login: (member: LoginInput) => Promise<void>;
  getCurrentMember: () => Promise<void>;
  getTeachers: (input: MemberInquery) => Promise<void>;
  getMemberById: (_id: string) => Promise<void>;
  updateMember: (id: string, input: Partial<MemberUpdate>) => Promise<void>;
  getAllMembersByAdmin: (input: MemberInquery) => Promise<void>;
  updateMemberbyAdmin: (input: Partial<MemberUpdate>) => Promise<void>;
  logout: () => void;
}

export const useMemberStore = create<MemberStore>()(
  devtools(
    persist(
      (set) => ({
        members: [],
        currentMember: null as Member | null,
        updatedMember: null as Member | null,
        teachOwner: null as Member | null,
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

        getCurrentMember: async (): Promise<void> => {
           const url = getApiUrl("/member/checkAuth");

           const storedData = localStorage.getItem("member-store");
            if (!storedData) {
              throw new Error("No stored member data found.");
            }
            const parsedData = JSON.parse(storedData);
            const { accessToken } = parsedData.state;
            if (!accessToken) {
              throw new Error("Access token is missing.");
            }
            
           const result = await axios.get<Member>(url, {
             headers: {
               Authorization: `Bearer ${accessToken}`,
             },
           });
           const data = result.data;
           console.log("Fetched currentMember:", data);
           set({ currentMember: data });
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
            const teachers = result.data.list;

            console.log("getTeachers:", teachers);

            set({ members: teachers });
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
        getMemberById: async (_id: string): Promise<void> => {
          try {
            const url = getApiUrl("/member/getMember");
            const result = await axios.get<Member>(url, {params: {_id}});
            const data = result.data; 
            console.log("Fetched member by ID:", data);
            set({ teachOwner: data });
          } catch (error) {
            console.log("Error fetching member by ID:", error);
            if (axios.isAxiosError(error)) {
              console.error(
                "AxiosError details:",
                error.response?.data || error.message
              );
            }
            throw error;
          }
        },
        updateMember: async (_id: string, input: MemberUpdate) => {
          try {
            const url = getApiUrl(`/member/updateMember`);
            const formData = new FormData();

            const storedData = localStorage.getItem("member-store");
            if (!storedData) {
              throw new Error("No stored member data found.");
            }
            const parsedData = JSON.parse(storedData);
            const { accessToken } = parsedData.state;

            if (!accessToken) {
              throw new Error("Access token is missing.");
            }

            formData.append("_id", _id);
            formData.append("memberNick", input.memberNick || "");
            formData.append("memberFullName", input.memberFullName || "");
            formData.append("memberPhone", input.memberPhone || "");
            formData.append("memberAddress", input.memberAddress || "");
            formData.append("memberDesc", input.memberDesc || "");
            formData.append("memberExperience", input.memberExperience || "");
            formData.append("memberImage", input.memberImage || "");
            if (input.memberCategory) {
              formData.append("memberCategory", input.memberCategory);
            }
            const memberLinks = {
              telegram: input.memberLinks?.telegram || "",
              instagram: input.memberLinks?.instagram || "",
              youtube: input.memberLinks?.youtube || "",
            };
            formData.append("memberLinks", JSON.stringify(memberLinks));

            const result = await axios.post<Member>(url, formData, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data",
              },
              withCredentials: true,
            });
            const data = result.data;

            console.log("Update member:", data);
            set({ currentMember: data });
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
        getAllMembersByAdmin: async (input: MemberInquery): Promise<void> => {
          try {
            const url = getApiUrl(`/member/getAllMembersAdmin`);

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
                ...(input.search?.memberType
                  ? { "search[memberType]": input.search?.memberType }
                  : {}),
                ...(input.search?.memberStatus
                  ? { "search[memberStatus]": input.search?.memberStatus }
                  : {}),
              },
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              withCredentials: true,
            });
            const members = result.data.list;
            console.log("getAllMembers:", members);
            set({ members: members });
            set({ metaCounter: result.data.metaCounter });
          } catch (error) {
            if (axios.isAxiosError(error)) {
              console.error(
                "AxiosError details:",
                error.response?.data || error.message
              );
            }
            throw error;
          }
        },
        updateMemberbyAdmin: async (input: Partial<MemberUpdate>): Promise<void> => {
          try {
            const url = getApiUrl(`/member/updateMembersAdmin`);
            const storedData = localStorage.getItem("member-store");
            if (!storedData) {
              throw new Error("No stored member data found.");
            }
            const parsedData = JSON.parse(storedData);
            const { accessToken } = parsedData.state;

            if (!accessToken) {
              throw new Error("Access token is missing.");
            }
            
            const result = await axios.post(url, input, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              withCredentials: true,
            });
            const data = result.data;

            console.log("Update member by admin:", data);
            set({ updatedMember: data });

          } catch(error) {
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
          localStorage.removeItem("member-store");
        },
      }),
      {
        name: "member-store", // The name to store the data in localStorage
        partialize: (state) => ({
          accessToken: state.accessToken,
        }),
      }
    )
  )
);

// Expose the store in the browser for testing
if (typeof window !== "undefined") {
  (window as any).useMemberStore = useMemberStore;
}
