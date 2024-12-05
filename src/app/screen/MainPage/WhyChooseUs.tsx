import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosPricetags } from "react-icons/io";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { BsAwardFill } from "react-icons/bs";
<<<<<<< HEAD:src/components/MainPage/WhyChooseUs.tsx
import Teaching from "./../../../public/images/Teaching.jpg";
import Line from "./Line";
=======
import Teaching from "/public/images/Teaching.jpg";
>>>>>>> origin:src/app/screen/MainPage/WhyChooseUs.tsx

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <div className="">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex justify-start items-center gap-4 pt-8 p-6">
              <p className="text-3xl text-black">- Why Choose Us -</p>
            </div>
            <p className="text-4xl  p-3 pl-10">
              <span className="text-green1">Why choose </span>our <br />
              efficient learning Center
            </p>
          </div>
          <div className="p-5 m-auto">
            <button
              className="flex items-center justify-between drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover border px-3 py-1 hover:bg-bgGreen hover:text-white bg-yellow rounded-2xl "
            >
              Get a Quote
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
        <div className="pt-8 p-6">
          __________________________________________________________________
        </div>
        <div className="grid grid-cols-2">
          <div className="m-10">
            <div
              className="flex justify-start drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center gap-2 absolute px-1 z-40 bg-yellow  boder rounded-xl"
            >
              <div className="flex items-center justify-center rounded-full w-6 h-6 bg-bgGreen">
                <FaStar className="text-sm text-white" />
              </div>
              <p className="text-sm">See this Example</p>
            </div>

            <div className="realtive pl-10  flex items-end justify-center">
              <img
                src={Teaching}
                alt="VideContent"
                className="border-black rounded-full"
              />
              <div className="absolute   gap-2">
                <div className="flex items-center  justify-between">
                  <div className="gap-2   p-1 text-white  ">
                    <p className="text-sm  border px-1 rounded-xl">
                      House Cleaning
                    </p>
                  </div>
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">
                      Kitchen Cleaning
                    </p>
                  </div>
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">
                      Glass Cleaning
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">
                      Office Cleaning
                    </p>
                  </div>
                  <div className="gap-2  p-1 text-white  ">
                    <p className="text-sm border px-1 rounded-xl">
                      Carpet Cleaning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 p-4">
            <div className="">
              <div className="">
                <IoIosPricetags className="text-5xl mx-auto" />
              </div>
              <p className="text-xl bold mx-auto m-5 text-center">
                Affordable price
              </p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div>
              <div>
                <BiLogoMicrosoftTeams className="text-5xl mx-auto" />
              </div>
              <p className="text-xl bold mx-auto m-5 text-center">
                Professional Team
              </p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div>
              <div>
                <FaBagShopping className="text-5xl mx-auto" />
              </div>
              <p className="text-xl bold mx-auto m-5 text-center">
                10+ years Experience
              </p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
            <div>
              <div>
                <BsAwardFill className="text-5xl mx-auto" />
              </div>
              <p className="text-xl bold mx-auto m-5 text-center">
                Award Winning
              </p>
              <p className="text-md bold mx-auto m-3 text-center">
                Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Line/>
    </div>
  );
};

export default WhyChooseUs;
