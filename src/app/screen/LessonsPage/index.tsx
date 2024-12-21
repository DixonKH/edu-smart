import { Routes, Route } from "react-router"
import ChoosenLesson from "./ChoosenLesson"
import Lessons from "./Lessons"
import LessonHeader from "./LessonHeader"
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