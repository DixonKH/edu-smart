import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { Navigate, Outlet } from "react-router";
import person1 from "../../../public/images/person1.jpg";

export default function AdminLayout() {
  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <div className="">
      <nav className="w-full flex justify-between items-center bg-green text-white py-4 px-10 text-2xl font-bold">
        <div className="flex items-center justify-start gap-3 text-3xl">
          <MdCastForEducation className="text-5xl text-green bg-yellow rounded-full p-2" />
          Admin Page
        </div>
        <div>
          <img src={person1} alt="admin" className="w-12 h-12 rounded-full border-2 border-white" />
        </div>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
