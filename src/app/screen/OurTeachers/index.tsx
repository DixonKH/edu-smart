//import React from 'react'
import { Routes, Route, useLocation } from "react-router";
import TeacherDetail from "./TeacherDetail";
import Teachers from "./Teachers";
import TeacherHeader from "./TeacherHeader";

const teachers = [
  {
    id: 1,
    name: "John Doe",
    teachCategory: "English",
    image: "/images/saad2.webp",
    experience: "5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    name: "Jane Doe",
    teachCategory: "Korean",
    image: "/images/user.jpeg",
    experience: "3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    name: "Jim Beam",
    teachCategory: "English",
    image: "/images/user1.jpg",
    experience: "10",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 4,
    name: "Jim Beam",
    teachCategory: "Russian",
    image: "/images/user3.jpeg",
    experience: "5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 5,
    name: "Jim Beam",
    teachCategory: "Korean",
    image: "/images/user5.webp",
    experience: "4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 6,
    name: "Jim Beam",
    teachCategory: "English",
    image: "/images/user3.jpeg",
    experience: "7",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export default function () {
  const location = useLocation();
  console.log("location", location);
  return (
    <>
    <TeacherHeader />
    <Routes>
      <Route path="/" element={<Teachers teachers={teachers} />} />
      <Route path={`:id`} element={<TeacherDetail />} />
    </Routes>
    </>
  );
}
