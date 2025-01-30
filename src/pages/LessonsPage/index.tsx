import LessonHeader from "@/features/lessons/LessonHeader";
import { Outlet } from "react-router-dom";
export default function LessonsPage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
