import { MdOutlineHomeRepairService } from "react-icons/md";
import { SiMicrosoftteams } from "react-icons/si";
import { FaBook } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {};

function OurProcess({}: Props) {
  return (
    <div className="mb-2">
      <div className="lg:container md:px-10 sm:px-5 px-1">
      <div>
        <div className="flex justify-start items-center pt-1  md:pt-5 lg:pb-6">
          <p className="lg:text-2xl md:text-xl text-base sm:text-xl text-black">- Our Process -</p>
        </div>
        <div className="lg:flex items-center justify-center">
          <p className=" lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-1">
            <span className="text-green1">Here's How We </span>Teach
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 pt-5 gap-5">
        <div>
          <div className="flex items-start justify-evenly">
            <div className=" relative z-40 flex justify-end items-start  text-white p-4">
              <div
                className="border rounded-full bg-green1  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
              >
                <MdOutlineHomeRepairService className="text-7xl p-3"></MdOutlineHomeRepairService>
              </div>
              <div className="absolute z-50 bg-yellow border text-xl rounded-full">
                <p>01</p>
              </div>
            </div>
          </div>
          <p className="lg:p-5 md:p-2 p-1 text-sm md:text-lg bold mx-auto lg:m-5 text-center">Book Courses</p>
          <p className="lg:p-5 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
            Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div>
          <div className=" flex  items-start justify-evenly">
            <div className=" relative z-40 flex justify-end items-start  text-white p-4">
              <div
                className="border rounded-full bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
              >
                <SiMicrosoftteams className="text-7xl p-3"></SiMicrosoftteams>
              </div>
              <div className="absolute z-50 bg-yellow border text-xl rounded-full">
                <p>02</p>
              </div>
            </div>
          </div>
          <p className="lg:p-5 md:p-2 p-1 text-sm md:text-lg bold mx-auto lg:m-5 text-center">Team Contact</p>
          <p className="lg:p-5 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
            Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div>
          <div className=" flex  items-start justify-evenly">
            <div className=" relative z-40 flex justify-end items-start  text-white p-4">
              <div
                className="border rounded-full bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
              >
                <FaBook className="text-7xl p-3"></FaBook>
              </div>
              <div className="absolute z-50 bg-yellow border text-xl rounded-full">
                <p>03</p>
              </div>
            </div>
          </div>
          <p className="lg:p-5 md:p-2 p-1 text-sm md:text-lg bold mx-auto lg:m-5 text-center">Interview</p>
          <p className="lg:p-5 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
            Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div>
          <div className=" flex  items-start justify-evenly">
            <div className=" relative z-40 flex justify-end items-start  text-white p-4">
              <div
                className="border rounded-full bg-green1 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
              >
                <FaSmile className="text-7xl p-3"></FaSmile>
              </div>
              <div className="absolute z-50 bg-yellow border text-xl rounded-full">
                <p>04</p>
              </div>
            </div>
          </div>
          <p className="lg:p-5 md:p-2 p-1 text-sm md:text-lg bold mx-auto lg:m-5 text-center">Final Result</p>
          <p className="lg:p-5 md:p-2 p-1 text-xs md:text-base bold mx-auto m-3 text-center">
            Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
      </div>
      <div className="bg-green1">
        <div className="lg:container md:px-10 sm:px-5 px-1">
          <div className="md:flex items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="lg:ml-5 lg:pl-5 ml-1 pl-1 pb-5 lg:text-9xl md:text-4xl sm:text-4xl text-4xl lg:p-5 md:p-2 p-1 text-yellow">|</p>
              </div>
              <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:p-5 md:p-2 p-0  text-white ">
                <span className="text-yellow flex items-center justify-center">
                  Book Affordable Courses:
                </span>
                Save Time And Money With Us!
              </p>
            </div>
            <div className=" lg:mt-[200px] flex justify-start lg:p-5 md:p-2 p-1 text-xs md:text-base  items-center lg:gap-5 md:gap-2 sm:gap-2 gap-1">
              <button
                className="flex items-center justify-between drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl"
              >
                View all Services
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
