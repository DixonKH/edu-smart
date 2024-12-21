import MainPage from "./screen/MainPage";
import OurTeachers from "./screen/OurTeachers";
import Community from "./screen/Community";
import MyPage from "./screen/MyPage";
import { Route, Routes } from "react-router";
import LessonsPage from "./screen/LessonsPage";
import ChoosenLesson from "./screen/LessonsPage/ChoosenLesson";
import TeacherDetail from "./screen/OurTeachers/TeacherDetail";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import AdminPage from "./admin";
import CommunityDetail from "./screen/Community/CommunityDetail";
import { Suspense } from "react";
import Login from "./screen/SignupLogin/Login";
import Signup from "./screen/SignupLogin/Signup";

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
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
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
