import { useEffect, useState } from "react";
import Users from "./user";
import Lessons from "./lessons/Lessons";
import Articles from "./community/Articles";
import { useMemberStore } from "@/features/teachers/model/store";
import { serverApi } from "@/shared/lib/config";
import { useLocation } from "react-router-dom";

export default function AdminPage() {
  const [showComponent, setShowComponent] = useState(0);
  const currenMember = useMemberStore((state) => state.currentMember);
  const location = useLocation();
  const { component } = location.state || {};
  const imgPath = `${serverApi}/${currenMember?.memberImage}`;

  useEffect(() => {
    if(component) {
      switch(component) {
        case 0:
          setShowComponent(0);
          break;
        case 1:
          setShowComponent(1);
          break;
        case 2:
          setShowComponent(2);
          break;
        default:
          setShowComponent(0);
      }
    }
  }, [component]);

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
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5">
      <div className="flex flex-row lg:flex-col lg:justify-start justify-center items-center gap-5 lg:w-1/5">
        <div className="flex  justify-center items-center gap-3 shadow-md p-3 rounded-xl my-8 w-72 border-b-2 border-green">
          <img
            src={imgPath}
            alt="admin"
            className="w-20 h-20 rounded-full border-4 border-green"
          />
          <div className="ml-2">
            <p className="text-2xl font-bold text-green">{currenMember?.memberNick}</p>
            <p className="text-xl">{currenMember?.memberPhone}</p>
          </div>
        </div>
        <div>
          <button 
            onClick={() => setShowComponent(0)}
            className=" px-4 py-2 text-2xl lg:text-3xl font-menium lg:w-72 h-16 border-b-2 rounded-2xl border-green text-green shadow-md hover:bg-green hover:text-white transition-all duration-300">
            Users
          </button>
        </div>
        <div>
          <button 
            onClick={() => setShowComponent(1)}
            className=" px-4 py-2 text-2xl lg:text-3xl font-menium lg:w-72 h-16 border-b-2 rounded-2xl border-green text-green shadow-md hover:bg-green hover:text-white transition-all duration-300">
            Lessons
          </button>
        </div>
        <div>
          <button
            onClick={() => setShowComponent(2)}
            className=" px-4 py-2 text-2xl lg:text-3xl font-menium lg:w-72 h-16 border-b-2 rounded-2xl border-green text-green shadow-md hover:bg-green hover:text-white transition-all duration-300">
            Articles
          </button>
        </div>
      </div>
      <div className="lg:w-4/5 mt-16">
        <RenderComponent />
      </div>
    </div>
  );
}
