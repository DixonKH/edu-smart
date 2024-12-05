import { Routes, Route } from "react-router"
import ChoosenLesson from "./ChoosenLesson"
import Lessons from "./Lessons"
export default function LessonsPage() {
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<Lessons />} />
        {/* <Route path="/lessons/:id" element={<ChoosenLesson />} /> */}
      </Routes>
      
    </div>
  )
}