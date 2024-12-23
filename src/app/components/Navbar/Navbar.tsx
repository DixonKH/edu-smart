import NavbarItems from "./Navbar.json";
import { Link } from "react-router";
import { MdCastForEducation } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import uzbFlag from "../../../../public/icons/world.png";
import koreanFlag from "../../../../public/icons/south-korea.png";
import englishFlag from "../../../../public/icons/united-kingdom.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LANGUAGES } from "../../../constants";
import { useTranslation } from "react-i18next";

import MiniNavbar from "./MiniNavbar";

type Props = {};

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(true);
  const [header, setHeader] = useState(1);
  const [user, setUser] = useState(true);
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const handleNav = () => setNav(!nav);

  return (
    <div className="w-full">
      <div className="bg-green1 fixed z-50 w-[100%] hidden lg:flex md:flex sm:hidden top-0">
        <MiniNavbar />
      </div>
      <div className="shadow-xl2 md:bg-background2 fixed z-40 w-full bg-green1 top-0 md:top-8 h-16">
        <div className="lg:container md:px-10 sm:px-5 px-1">
          <div className="flex md:justify-between items-center px-2">
            <div className="flex justify-between items-center w-full z-50">
              <div className="flex items-center  justify-start">
                <div>
                  <Link
                    to="/"
                    className="flex justify-between items-center gap-3"
                  >
                    <div
                      className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center justify-center rounded-full size-10 bg-yellow"
                    >
                      <MdCastForEducation className="text-xl text-green" />
                    </div>
                    <p
                      className="md:text-2xl text-xl text-white lg:text-black md:text-black sm:text-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                    >
                      Edu-Smart
                    </p>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-between items-center h-16">
                <div className="sm:flex  justify-end items-center gap-5">
                  <ul className="md:flex  items-center gap-5 md:gap-2 text-xl">
                    {NavbarItems.map((item, index) => (
                      <li
                        className="drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover px-3"
                        key={index}
                      >
                        <Link
                          onClick={() => setHeader(item.id)}
                          className="hover:border-green1 lg:text-xl text-base hover:border-b-2 hover:text-green1"
                          to={item.link}
                        >
                          {t(`${item.name}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {user && (
                    <Link
                      to="mypage"
                      className="flex items-center justify-between gap-2 py-1 px-3 rounded-xl"
                    >
                      <span
                        className="drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover hover:border-green1 lg:text-xl text-base hover:border-b-2 hover:text-green1"
                      >
                        {t("my_page")}
                      </span>
                    </Link>
                  )}
                  <Link
                    to="login"
                    className="flex items-center justify-between gap-2 py-1 px-3 rounded-xl"
                  >
                    <FaUser className="text-xl text-green cursor-pointer" />
                  </Link>
                </div>
                <Select defaultValue={i18n.language} onValueChange={(value) => i18n.changeLanguage(value)}>
                  <SelectTrigger
                    className="flex items-center justify-between w-18 outline-none border-none bg-transparent font-bold"
                  >
                    <SelectValue placeholder={LANGUAGES[0].label} />
                  </SelectTrigger>
                  <SelectContent className="w-14">
                    <SelectGroup>
                      {LANGUAGES.map((item) => (
                        <SelectItem value={item.code} key={item.code}>
                          {" "}
                          <img
                            src={
                              item.code === "uz"
                                ? uzbFlag
                                : item.code === "kr"
                                ? koreanFlag
                                : englishFlag
                            }
                            alt={item.code}
                            className="size-5 inline-block mr-2"
                          />
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center md:hidden justify-end h-16">
                <Select defaultValue={i18n.language} onValueChange={(value) => i18n.changeLanguage(value)}>
                  <SelectTrigger className="flex items-center justify-between w-18 outline-none border-none text-white bg-transparent font-bold">
                    <SelectValue placeholder={LANGUAGES[0].label} />
                  </SelectTrigger>
                  <SelectContent className="w-14">
                    <SelectGroup>
                      {LANGUAGES.map((item) => (
                        <SelectItem value={item.code} key={item.code}>
                          {" "}
                          <img
                            src={
                              item.code === "uz"
                                ? uzbFlag
                                : item.code === "kr"
                                ? koreanFlag
                                : englishFlag
                            }
                            alt={item.code}
                            className="size-5 inline-block mr-2"
                          />
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div
                  className="drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover text-white cursor-pointer ml-2"
                  onClick={handleNav}
                >
                  {!nav ? (
                    <AiOutlineClose className="lg:hidden " size={20} />
                  ) : (
                    <AiOutlineMenu className="lg:hideen" size={20} />
                  )}
                </div>
              </div>
            </div>
            <div
              className={
                !nav
                  ? `fixed z-10  left-0  top-[9%] w-full text-black bg-white/10
                backdrop-blur-2xl border-b rounded-b-md ease-in-out duration-500 cursor-pointer`
                  : "fixed top-[-100%]"
              }
            >
              <div className="flex flex-col items-center text-center justify-center h-96">
                <ul className="flex flex-col items-center justify-center px-8 w-[80%]  text-white bg-bgGreen font-bold-100 rounded-2xl h-72">
                  {NavbarItems.map((item) => (
                    <li
                      key={item?.id}
                      onClick={handleNav}
                      className="p-4 border-b border-white w-full rounded-2xl"
                    >
                      <Link to={item.link}>{t(`${item.name}`)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full mb-8">
                <div className="flex justify-center items-center">
                  <div className="flex justify-evenly items-center gap-4 py-2 px-4">
                    <div className="flex items-center  justify-center rounded-full p-2 bg-bgGreen hover:scale-110 hover:bg-yellow hover:transition-all hover:duration-300">
                      <FaFacebook className="text-xl text-white size-7" />
                    </div>
                    <div className="flex items-center justify-center rounded-full p-2 bg-bgGreen hover:scale-110 hover:bg-yellow hover:transition-all hover:duration-300">
                      <FaTwitter className="text-xl text-white size-7" />
                    </div>
                    <div className="flex items-center justify-center rounded-full p-2 bg-bgGreen hover:scale-110 hover:bg-yellow hover:transition-all hover:duration-300">
                      <FaPinterest className="text-xl text-white size-6" />
                    </div>
                    <div className="flex items-center justify-center rounded-full p-2 bg-bgGreen hover:scale-110 hover:bg-yellow hover:transition-all hover:duration-300">
                      <FaInstagramSquare className="text-xl text-white size-6" />
                    </div>
                    <div className="flex items-center justify-center rounded-full p-2 bg-bgGreen hover:scale-110 hover:bg-yellow hover:transition-all hover:duration-300">
                      <FaYoutube className="text-xl text-white size-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
