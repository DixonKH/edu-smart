import React from "react";
import { FaStar } from "react-icons/fa";
import { IoSearchCircleSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Teachers(props: any) {
  return (

<div className="container mt-5">
<h1 className="text-center lg:text-3xl md:text-2xl text-xl lg:text-left mb-4">- Our Teachers -</h1>
<div className="flex flex-row sm:flex-row-reverse items-center justify-between my-3 mt-6">
  <div className="sm:hidden md:block relative">
    <input type="text" placeholder="Search" className="w-full p-2 px-4 outline-none rounded-3xl border border-gray-300" />
    <IoSearchCircleSharp className="absolute right-[0.5px] top-[0.5px] size-10 cursor-pointer text-green" />
  </div>
  <div className="">
  <Select>
      <SelectTrigger className="w-[120px] outline-none rounded-2xl p-3">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="recent">Recent</SelectItem>
          <SelectItem value="old">Old</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</div>
<div className="grid w-full h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
  {props.teachers.map((teacher: any) => (
    <div key={teacher.id} className="flex flex-col items-center justify-start pb-3 h-auto border-2 bg-green text-white rounded-xl hover:shadow-2xl cursor-pointer">
    <div className="w-full h-80 mb-2 relative">
      <img
        className="h-full w-full object-cover rounded-xl"
        src={teacher.image}
        alt={teacher.name}
      />
      <p className="flex items-center gap-1 text-md text-white absolute bottom-6 bg-green p-2 rounded-r-lg">
        <FaStar className="text-yellow" />
        {teacher.experience} years of experience
      </p>
    </div>
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <h1 className="text-2xl font-bold">{teacher.name}</h1>
      <p className="text-md text-white">
        {teacher.teachCategory} Teacher
      </p>
    </div>
  </div>
  ))}
</div>
<div className="text-center text-md text-lg mb-8">Total 6 teachers available</div>
</div>
  );
}
