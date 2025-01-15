import { BsChatRightQuoteFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { FaComments } from "react-icons/fa";
import Teaching from "/public/images/Teaching.jpg";
import { useTranslation } from "react-i18next";
export default function myArticles() {
  const { t } = useTranslation();

  return (
    <div className="p-3 px-4 h-[820px]">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-medium mt-2">My Articles</h1>
      </div>
      <div className="m-2 grid base:grid-cols-1  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="border m-2 w-[360px] border-green1 rounded-lg ">
          <div className="relative flex items-end justify-center">
            <img
              src={Teaching}
              alt="VideContent"
              className="object-cover w-full h-72 rounded-lg"
            />
            <div className="absolute w-16 h-16 top-3 right-4">
              <div className=" bg-rose-700 border w-full h-full rounded-full flex flex-col items-center justify-center text-white">
                <p className="text-xl font-nunito font-bold">27</p>
                <p className="text-xs font-nunito font-bold">MART</p>
              </div>
            </div>
            <div className="absolute px-4 py-1 bottom-0 left-0 bg-green rounded-tr-lg text-white">
              <p className="text-lg font-nunito font-bold">NEWS</p>
            </div>
          </div>
          <div className="flex flex-col px-3 pb-1">
            <p className="px-2 my-1 text-xl font-nunito font-bold text-center text-slate-600">
              2A Soulte Kursi
            </p>
            <p className="text-sm font-nunito text-center text-slate-500">
                Soulte Kursi 2-dekabrdan ochilishi kutilmoqda, kurs boshlang'ich darajadagilar un
            </p>
            <div className="w-full h-[0.5px] bg-slate-200 my-1"></div>
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-500">
            <FaComments />
            12 comments 
            </div>
              <p className="text-sm font-nunito text-center text-slate-500">
                5 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
