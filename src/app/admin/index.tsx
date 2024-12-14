import React, { useState } from "react";
import person1 from "../../../public/images/person1.jpg";
import Users from "./user";
import Lessons from "./lessons/Lessons";
import Articles from "./community/Articles";

export default function AdminPage() {
  const [showComponent, setShowComponent] = useState(0);

  const RenderComponent = () => {
    switch (showComponent) {
      case 0:
        return (
          <Users
            setShowComponent={setShowComponent}
            showComponent={showComponent}
          />
        );
        break;
      case 1:
        return (
          <Lessons
            showComponent={showComponent}
          />
        );
        break;
      case 2:
        return (
          <Articles
            showComponent={showComponent}
          />
        );
        break;
    }
  };
  return (
    <div className="flex flex-row justify-between items-start gap-5">
      <div className="flex flex-col justify-start items-center gap-5 w-1/5">
        <div className="flex  justify-center items-center gap-3 shadow-md p-3 rounded-xl my-8 w-72 border-b-2 border-green">
          <img
            src={person1}
            alt="admin"
            className="w-20 h-20 rounded-full border-4 border-green"
          />
          <div className="ml-2">
            <p className="text-2xl font-bold text-green">Admin</p>
            <p className="text-xl">01068734499</p>
          </div>
        </div>
        <div>
          <button 
            onClick={() => setShowComponent(0)}
            className=" px-4 py-2 text-3xl font-menium w-72 h-16 border-b-2 rounded-2xl border-green text-green shadow-md hover:bg-green hover:text-white transition-all duration-300">
            Users
          </button>
        </div>
        <div>
          <button 
            onClick={() => setShowComponent(1)}
            className=" px-4 py-2 text-3xl font-menium w-72 h-16 border-b-2 rounded-2xl border-green text-green shadow-md hover:bg-green hover:text-white transition-all duration-300">
            Lessons
          </button>
        </div>
        <div>
          <button
            onClick={() => setShowComponent(2)}
            className=" px-4 py-2 text-3xl font-menium w-72 h-16 border-b-2 rounded-2xl border-green text-green shadow-md hover:bg-green hover:text-white transition-all duration-300">
            Articles
          </button>
        </div>
      </div>
      <div className="w-4/5 mt-16">
        <RenderComponent />
      </div>
    </div>
  );
}
