import MainPage from "../pages/MainPage";
import OurTeachers from "../pages/OurTeachers";
import Community from "../pages/Community";
import MyPage from "../pages/MyPage";
import { Route, Routes } from "react-router";
import LessonsPage from "../pages/LessonsPage";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import AdminPage from "./admin";
import { Suspense } from "react";
import Login from "../features/SignupLogin/Login";
import Signup from "../features/SignupLogin/Signup";
import ChoosenLesson from "@/features/lessons/ChoosenLesson";
import CommunityDetail from "@/features/community/CommunityDetail";
import TeacherDetail from "@/features/teachers/TeacherDetail";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index element={<MainPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/ourteachers" element={<OurTeachers />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/lessons/:lessonId" element={<ChoosenLesson />} />
          <Route path="/ourteachers/:teacherId" element={<TeacherDetail />} />
          <Route path="/community/:communityId" element={<CommunityDetail />} />
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
