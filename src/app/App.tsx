import Navbar from "./components/Navbar/Navbar";
import MainPage from "./screen/MainPage";
import OurTeachers from "./screen/OurTeachers";
import Community from "./screen/Community";
import MyPage from "./screen/MyPage";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
import LessonsPage from "./screen/LessonsPage";
import ChoosenLesson from "./screen/LessonsPage/ChoosenLesson";
function App() {
  return (
<<<<<<< HEAD
    <div >
=======
    <div>
>>>>>>> origin
      <Navbar></Navbar>
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/ourteachers" element={<OurTeachers />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/lessons/:lessonId" element={<ChoosenLesson />} />
      </Routes>
      <Footer />
      {/* <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
    </div>
  );
}

export default App;
