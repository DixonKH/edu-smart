import Navbar from "./components/Navbar/Navbar";
import MainPage from "./screen/MainPage";
import OurTeachers from "./screen/OurTeachers";
import Community from "./screen/Community";
import MyPage from "./screen/MyPage";
import Footer from "./components/Footer/Footer";
import { Route, Router, Routes } from "react-router";
import LessonsPage from "./screen/LessonsPage";
import ChoosenLesson from "./screen/LessonsPage/ChoosenLesson";
import TeacherDetail from "./screen/OurTeachers/TeacherDetail";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import AdminPage from "./admin";
function App() {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<MainPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/ourteachers" element={<OurTeachers />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/lessons/:lessonId" element={<ChoosenLesson />} />
        <Route path="/ourteachers/:teacherId" element={<TeacherDetail />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
