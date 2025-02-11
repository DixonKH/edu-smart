//import React from 'react';
import { Outlet } from "react-router-dom";
import TeacherHeader from "@/features/teachers/TeacherHeader";

export default function TeachersPage() {

  return (
    <>
      <TeacherHeader />
      <>
       <Outlet /> 
      </>
    </>
  );
}
