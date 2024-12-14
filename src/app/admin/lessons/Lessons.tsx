import React from 'react'
import LessonManagement from './LessonManagement';

interface LessonsProps {
  showComponent: number;
}

export default function Lessons(props: LessonsProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-600 w-full border-b border-bgGreen pb-4">Lesson List</h1>
      <div>
        <LessonManagement />
      </div>
    </div>
  )
}
