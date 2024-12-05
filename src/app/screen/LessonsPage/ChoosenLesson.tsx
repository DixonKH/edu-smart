
import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

export default function ChoosenLesson() {
  return (
    <div className="container mt-5">
      <div className="flex items-center justify-between">
        <div className="w-3/4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">Korean Alifbosi</h1>
            <div className="flex gap-2">
              <span className="flex items-center gap-1">
                <IoMdEye className="text-slate-500 size-6" />3
              </span>
              <span className="ml-2 flex items-center">
                <CiHeart className="size-6 mr-1" /> 2
              </span>
            </div>
          </div>
        </div>
        <div className="">2</div>
      </div>
      <div>Realited Videos</div>
      <div>Videoooooos</div>
    </div>
  );
}
