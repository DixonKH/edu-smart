import { MdCastForEducation } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { PiSneakerMoveFill } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-green1 text-white">
        <div className=" container md:px-10 sm:px-5 px-1  ">
          <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-10">
            <div className="col-span-2 gap-4">
              <div className="flex lg:justify-start justify-center items-center gap-2 p-3">
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-yellow">
                  <MdCastForEducation className="text-xl text-green1" />
                </div>
                <p className="text-2xl">Edu-Smart</p>
              </div>
              <p className="p-3 text-center lg:text-left">
                {t("footer_p")}
              </p>
              <div className="sm:flex flex justify-evenly items-center gap-1 p-2">
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaFacebook className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaTwitter className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaPinterest className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaInstagramSquare className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaYoutube className="text-xl text-white" />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="lg:flex">
                <div className=" text-center lg:text-left mb-4">
                  <p className="text-2xl p-3">{t("footer_p1")}</p>
                  <ul className="inline-block cursor-pointer">
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      {`${t("footer_p2")} `}
                    </li>
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      {`${t("footer_p3")} `}
                    </li>
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      {`${t("footer_p4")} `}
                    </li>
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      {`${t("footer_p5")} `}
                    </li>
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      {`${t("footer_p6")} `}
                    </li>
                  </ul>
                </div>

                <div className=" text-center lg:text-left">
                  <p className="text-2xl p-3">{t("footer_p7")}</p>
                  <ul className="inline-block">
                    <li className="p-2">+82101234567</li>
                    <li className="p-2">example@gmail.com</li>
                    <li className="p-2">123456, Royal, Messey, New Jersey</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-3 col-span-2">
              <p className="p-3 w-full text-xl lg:text-2xl text-center lg:text-left">{t("footer_p8")}</p>
              <div className="flex items-center p-3 ">
                <input
                  className="rounded-l-md w-full h-10 px-3 text-lg text-black outline-none"
                  type="text"
                  placeholder="Search something..."
                />
                <PiSneakerMoveFill className="text-2xl text-green1 size-10 rounded-r-md bg-yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow">
        <div className="container md:px-10 sm:px-5 px-1 hidden sm:hidden md:flex lg:flex">
          <div className="sm:flex flex justify-between items-center ">
            <div className="flex justify-between items-center gap-3 p-1">
              <p className="text-black flex justify-center items-center">
                Copyright <FaRegCopyright className="mx-3" /> 2024 Jeonbuk
                Korean Learning Center. All rights Reserved.
              </p>
            </div>
            <div>
              <div className="flex justify-evenly items-center gap-4 py-2 px-4">
                <p className="text-black">
                  User Terms & Conditions | Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
