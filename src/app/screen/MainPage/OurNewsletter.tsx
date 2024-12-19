import React from "react";
import { IoSend } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type Props = {};

const OurNewsletter = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="lg:container md:px-10 sm:px-5 px-1 mt-20">
      <div>
        <div className="flex items-center justify-center text-center">
          <p className=" md:text-4xl text-2xl font-medium  p-2">
            {t("faq")} <br />
            <span className="text-green1">
              {" "}
              {t("faq_p")} <br />
            </span>
            {t("faq_p1")}
          </p>
        </div>

        <div className="flex justify-center gap-5 items-center m-10 p-3 ">
          <FaEnvelope
            className="size-12 bg-green shadow-xl text-white p-3 rounded-full cursor-pointer hover:bg-yellow hidden md:block"
          />
          <input
            className="rounded-full border-2 border-green px-3 text-lg w-[350px] h-[50px] bg-white"
            type="text"
            placeholder=" Enter Email address"
          ></input>
          <IoSend
            className="size-8 p-2.5 text-white w-[90px] h-[50px] shadow-xl  rounded-full hover:bg-green1 bg-yellow cursor-pointer hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default OurNewsletter;
