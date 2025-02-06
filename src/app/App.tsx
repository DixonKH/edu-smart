import MainPage from "../pages/MainPage";
import Community from "../pages/Community";
import MyPage from "../pages/MyPage";
import { Route, Routes } from "react-router-dom";
import LessonsPage from "../pages/LessonsPage";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import AdminPage from "./admin";
import { Suspense } from "react";
import Login from "../features/SignupLogin/Login";
import Signup from "../features/SignupLogin/Signup";
import ChoosenLesson from "@/features/lessons/ChoosenLesson";
import CommunityDetail from "@/features/community/CommunityDetail";
import Teachers from "@/features/teachers/Teachers";
import Lessons from "@/features/lessons/Lessons";
import TeachersPage from "../pages/OurTeachers";
import TeacherDetail from "@/features/teachers/TeacherDetail";
import GoogleCallbackHandler from "@/features/SignupLogin/GoogleAuthHandler";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index element={<MainPage />} />
          <Route path="/lessons" element={<LessonsPage />}>
            <Route index element={<Lessons />} />
            <Route path=":lessonId" element={<ChoosenLesson />} />
          </Route>
          <Route path="/ourteachers" element={<TeachersPage />}>
            <Route index element={<Teachers />} />
            <Route path=":teacherId" element={<TeacherDetail />} />
          </Route>
          <Route path="/community" element={<Community />} />
          <Route path="/community/:communityId" element={<CommunityDetail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="google-callback" element={<GoogleCallbackHandler />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
