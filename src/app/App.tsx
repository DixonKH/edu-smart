import Navbar from "../components/Navbar/Navbar";
import MainPage from "../components/MainPage/MainPage";
import Lessons from "../components/Lessons/Lessons";
import OurTeachers from "../components/OurTeachers/OurTeachers";
import Community from "../components/Community/Community";
import MyPage from "../components/MyPage/MyPage";
import Footer from "../components/Footer/Footer";
import { Route, Routes } from "react-router";
function App() {
  return (<div className="container">
    <Navbar ></Navbar>
    <Routes>
      <Route path="/" index element={<MainPage />}/>
      <Route path="/lessons" element={<Lessons />}/>
      <Route path="/ourteachers" element={<OurTeachers />}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/mypage' element={<MyPage/>}/>
    </Routes>
    <Footer />
    {/* <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
    </div>
)}

export default App;
