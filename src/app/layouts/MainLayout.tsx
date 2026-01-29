import Footer from "@/widgets/Footer/Footer";
import Navbar from "@/widgets/Navbar/Navbar";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
