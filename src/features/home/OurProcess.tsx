import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { FaSmile } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Props = {};

function OurProcess({}: Props) {
  const { t } = useTranslation();
  return (
    <div className="mb-10 mt-20">
      <div className="lg:container md:px-10 sm:px-5 px-1">
        <div className="text-center lg:text-left lg:p-0  md:px-10 mb-5 mt-20">
          <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">
            - {t("our_process")} -
          </p>
          <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 -mt-2 font-medium">
            <span className="text-green1">{t("our_process_h1")} </span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 pt-5 gap-5 mb-20">
          <div className="flex flex-col items-center justify-start">
            <div className="flex items-start justify-evenly cursor-pointer hover:scale-110 transition-all duration-300">
              <div className=" relative z-30 flex justify-end items-start  text-white">
                <div
                  className="border p-1 rounded-full bg-red shadow-xl2 shadow-slate-600"
                >
                  <MdOutlineHomeRepairService className="text-7xl p-3"></MdOutlineHomeRepairService>
                </div>
                <div className="absolute z-50 bg-yellow border -top-1 -right-2 text-xl p-1 rounded-full">
                  <p>01</p>
                </div>
              </div>
            </div>
            <p className="p-1 text-sm md:text-lg lg:text-2xl font-medium mx-auto mt-8 text-center">
              {t("our_process_h2")}
            </p>
            <p className=" md:p-2 p-1 text-base mx-auto text-center text-gray-600">
             {t("our_process_p")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="flex items-start justify-evenly cursor-pointer hover:scale-110 transition-all duration-300">
              <div className=" relative z-30 flex justify-end items-start  text-white">
                <div
                  className="border p-1 rounded-full bg-orange shadow-xl2 shadow-slate-600"
                >
                  <BiLogoMicrosoftTeams className="text-7xl p-3"></BiLogoMicrosoftTeams>
                </div>
                <div className="absolute z-50 bg-yellow border -right-2 -top-1  text-xl p-1 rounded-full">
                  <p>02</p>
                </div>
              </div>
            </div>
            <p className="p-1 text-sm md:text-lg lg:text-2xl font-medium mx-auto mt-8 text-center">
              {t("our_process_h3")}
            </p>
            <p className=" md:p-2 p-1 text-base mx-auto text-center text-gray-600">
            {t("our_process_p")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="flex items-start justify-evenly cursor-pointer hover:scale-110 transition-all duration-300">
              <div className=" relative z-30 flex justify-end items-start  text-white">
                <div
                  className="border p-1 rounded-full bg-green shadow-xl2 shadow-slate-600"
                >
                  <FaBook className="text-7xl p-3"></FaBook>
                </div>
                <div className="absolute z-50 bg-yellow border -right-2 -top-1  text-xl p-1 rounded-full">
                  <p>03</p>
                </div>
              </div>
            </div>
            <p className="p-1 text-sm md:text-lg lg:text-2xl font-medium mx-auto mt-8 text-center">
              {t("our_process_h4")}
            </p>
            <p className=" md:p-2 p-1 text-base mx-auto text-center text-gray-600">
            {t("our_process_p")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="flex items-start justify-evenly cursor-pointer hover:scale-110 transition-all duration-300">
              <div className=" relative z-30 flex justify-end items-start  text-white">
                <div
                  className="border p-1 rounded-full bg-blue shadow-xl2 shadow-slate-600"
                >
                  <FaSmile className="text-7xl p-3"></FaSmile>
                </div>
                <div className="absolute z-50 bg-yellow border -right-2 -top-1  text-xl p-1 rounded-full">
                  <p>04</p>
                </div>
              </div>
            </div>
            <p className="p-1 text-sm md:text-lg lg:text-2xl font-medium mx-auto mt-8 text-center">
              {t("our_process_h5")}
            </p>
            <p className=" md:p-2 p-1 text-base mx-auto text-center text-gray-600">
            {t("our_process_p")}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green1">
        <div className="lg:container md:px-10 sm:px-5 px-1">
          <div className="md:flex items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="lg:ml-5 lg:pl-5 ml-1 pl-1 pb-5 lg:text-9xl md:text-4xl sm:text-4xl text-4xl lg:p-5 md:p-2 p-1 text-yellow">
                  |
                </p>
              </div>
              <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-0  text-white ">
                <span className="text-yellow flex items-center justify-center">
                  {t("our_process_bookig")}:
                </span>
                {t("our_process_booking_h1")}
              </p>
            </div>
            <div className=" lg:mt-[200px] flex justify-start lg:p-5 items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
              <Link to="/lessons"
                className="flex items-center justify-between text-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-4 py-2 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl"
              >
                <p>{t("our_process_booking_btn")}</p>
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
