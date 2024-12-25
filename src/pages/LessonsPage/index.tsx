import ChoosenLesson from "@/features/lessons/ChoosenLesson"
import LessonHeader from "@/features/lessons/LessonHeader"
import Lessons from "@/features/lessons/Lessons"
import { Routes, Route } from "react-router"
export default function LessonsPage() {
    
  return (
    <div>
      <LessonHeader /> 
      <Routes>
        <Route path="/" element={<Lessons />} />
        <Route path="/lessons/:id" element={<ChoosenLesson />} />
      </Routes>
      
    </div>
  )
}