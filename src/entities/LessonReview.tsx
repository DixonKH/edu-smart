import React from "react";

export default function LessonReview() {
  return (
    <div className="w-full flex flex-col mt-6">
      <p className="text-2xl font-bold">Leave a Review</p>
      <div className="w-full flex flex-col items-end justify-center gap-2 my-2">
        <textarea className="w-full h-32 border border-gray-300 rounded-md outline-none p-2"></textarea>
        <button className="bg-green1 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
