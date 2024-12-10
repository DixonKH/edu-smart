
import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";
import video from "/videos/lesson.mp4";

const lessons: any = [
  {
    id: 1,
    title: "Koreys Alifbosi va ularning qollanish usullari",
    category: "Beginner",
    desc: "This is the Desc",
    create: "12/07/2024",
    owner: "Meloboyev A",
    view: "2",
    like: "true",
  },
  {
    id: 2,
    title: "Lesson 2",
    category: "Elementry",
    desc: "This is the Desc",
    create: "12/07/2024",
    owner: "Abdurakhmonov B",
    view: "3",
    like: "true",
  },
  {
    id: 3,
    category: "Intermediate",
    title: "Lesson 3",
    desc: "This is the Desc",
    create: "12/07/2024",
    owner: "Xasanov D",
    view: "5",
    like: "false",
  },
  {
    id: 4,
    title: "Lesson 4",
    category: "Advanced",
    desc: "This is the Desc",
    create: "12/07/2024",
    owner: "Abdurakhmonov B",
    view: "3",
    like: "true",
  },
  {
    id: 5,
    title: "Lesson 5",
    category: "Elementry",
    desc: "This is the Desc",
    create: "12/07/2024",
    owner: "Abdurakhmonov B",
    view: "1",
    like: "false",
  },
  {
    id: 6,
    title: "Lesson 3",
    category: "Beginner",
    desc: "This is the Desc",
    create: "12/07/2024",
    owner: "Xasanov D",
    view: "5",
    like: "false",
  },
  {
    id: 7,
    title: "Lesson 4",
    category: "Beginner",
    desc: "This is the Desc",
    create: "12/07/2024",
    owner: "Abdurakhmonov B",
    view: "3",
    like: "true",
  },
  {
    id: 8,
    title: "Lesson 5",
    category: "Elementry",
    desc: "This is the Desc",
    create: "12/07/2024",
    owner: "Abdurakhmonov B",
    view: "1",
    like: "false",
  },
];

export default function LessonCard() {
  return (
    <>
      {
        lessons.map((lesson: any) => {
          return (
            <div key={lesson.id} className="flex flex-col align-middle justify-items-start w-full h-auto border-solid border rounded-lg">
        <div>
          <video className="rounded-md" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="p-1 mt-1">
          <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
            <div className="leading-5">
              <span className="inline-block text-green1"><IoReaderOutline /></span>
              {lesson.title}
            </div>
            <div>
              <IoMdEye className="text-slate-500 size-5" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 w-full h-8 py-1 ">
            <div className={`leading-4 text-sm overflow-hidden p-1 px-2 rounded ${lesson.category === "Beginner" ? "bg-yellow" : "bg-green"}`}>
              {lesson.category} 
              </div>
            <div className="text-[12px] text-slate-600">
              {lesson.create}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-row items-center justify-start gap-1 text-slate-600 text-sm">
              <FaBookReader className="text-green1" />
              Teacher: {lesson.owner}
            </div>
            <CiHeart className="size-5" />
          </div>
        </div>
      </div>
          )
        })
      }
    </>
  );
}
