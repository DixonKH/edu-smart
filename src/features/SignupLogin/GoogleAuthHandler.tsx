import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMemberStore } from "../teachers/model/store";
import axios from "axios";
import { serverApi } from "@/shared/lib/config";

function GoogleCallbackHandler() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const accessToken = urlParams.get("accessToken");
  const signUp = useMemberStore((state) => state.signUp);

console.log("accessToken:", accessToken);

  useEffect(() => {
  
    if (!accessToken) {
      console.error("🚫 Access token not found. Redirecting to /login...");
      navigate("/login");
      return;
    }

    localStorage.setItem(
      "member-store",
      JSON.stringify({
        state: {
          currentMember: null, // You can store current member data here if needed
          accessToken: accessToken,
        },
      })
    );

        axios
          .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then(async (response) => {
            const googleUser = response.data;
            console.log("Fetched Google User:", googleUser);
  
            // Proceed with the signup logic
            const memberData = {
              memberNick: googleUser.memberNick || "GoogleUser",
              memberFullName: googleUser.memberFullName,
              memberEmail: googleUser.memberEmail,
              memberPhone: "", // Handle phone info
              memberPassword: "GoogleAuth123!", // Placeholder password
            };
  
            try {
              const memeberRes = await axios.post(`${serverApi}/member/signup`, memberData);
              const memberResponseData = memeberRes.data;
              console.log("Member data after signup:", memberResponseData);
  
              // Store member data in localStorage
              localStorage.setItem("currentMember", JSON.stringify(memberResponseData));
  
              // Update Zustand store with new member data
              await signUp(memberResponseData);
              navigate("/");  // Redirect to the home page after successful signup
            } catch (error) {
              console.error("❌ Error signing up user:", error);
              navigate("/login");
            }
          })
          .catch((error) => {
            console.error("❌ Error fetching member info from Google:", error);
            console.log("Error res data:", error.data);
            
            navigate("/login");
          });
      })

  return <div>Redirecting...</div>;
}

export default GoogleCallbackHandler;
