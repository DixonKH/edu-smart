import NavbarItems from "./Navbar.json";
import { Link, useNavigate } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import uzbFlag from "../../../public/icons/world.png";
import koreanFlag from "../../../public/icons/south-korea.png";
import englishFlag from "../../../public/icons/united-kingdom.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import MiniNavbar from "./MiniNavbar";
import { LANGUAGES } from "@/shared/constants";
import { useMemberStore } from "@/features/teachers/model/store";
import { serverApi } from "@/shared/lib/config";

type Props = {};

const Navbar = (props: Props) => {
  const currentUser = useMemberStore((state) => state.currentMember);
  const logout = useMemberStore((state) => state.logout);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [nav, setNav] = useState(true);
  const [header, setHeader] = useState(1);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setDropdownVisible(false);
    navigate("/login");
  };

  const toggleDropdown = useCallback((e: any) => {
    e.preventDefault();
    setDropdownVisible((prev) => !prev);
  }, []);

  //const handleNav = () => setNav(!nav);
  const handleNav = useCallback(() => setNav((prevNav) => !prevNav), []);

  return (
    <div className="w-full">
      <div className="bg-green1 fixed z-50 w-[100%] hidden lg:flex md:flex sm:hidden top-0">
        <MiniNavbar />
      </div>
      <div className="shadow-xl2 md:bg-background2 fixed z-40 w-full bg-green1 top-0 md:top-8 h-16">
        <div className="lg:container md:px-10 sm:px-5 px-1">
          <div className="flex md:justify-between items-center px-2">
            <div className="flex items-center justify-between w-full z-50">
              <div className="flex items-center  justify-start">
                <div>
                  <Link
                    to="/"
                    className="flex justify-between items-center gap-3"
                  >
                    <div
                      className="flex drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover items-center justify-center rounded-full size-8 md:size-10 bg-yellow"
                    >
                      <MdCastForEducation className="text-xl text-green" />
                    </div>
                    <p
                      className="lg:text-2xl text-[16px] text-white lg:text-black md:text-black drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover"
                    >
                      Edu-Smart
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="hidden md:flex justify-between items-center h-16">
                  <div className="sm:flex  justify-end items-center">
                    <ul className="md:flex  items-center justify-center text-xl">
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
                    {currentUser && (
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
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  {currentUser ? (
                    <div className="relative flex items-center justify-center mr-2 ml-4 rounded-full h-10 w-10 text-center bg-green2 text-xl font-medium text-white">
                      {currentUser?.memberImage === "" ? (
                        <p onClick={toggleDropdown} className="cursor-pointer">
                          {currentUser.memberNick[0]}
                        </p>
                      ) : (
                        <img
                          src={`${serverApi}/${currentUser?.memberImage}`}
                          alt="user"
                          className="rounded-full h-10 w-10 cursor-pointer"
                          onClick={toggleDropdown}
                        />
                      )}
                      {dropdownVisible && (
                        <div className="absolute left-2 right-0 mt-24 w-32 bg-white border border-gray-200 rounded-lg shadow-md">
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <FaSignOutAlt className="text-green2" />
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to="login"
                      className="flex items-center justify-between gap-2 py-1 px-3 rounded-xl"
                    >
                      <FaUser className="lg:text-xl text-md md:text-green text-white cursor-pointer" />
                    </Link>
                  )}
                </div>
                <Select
                  defaultValue={i18n.language}
                  onValueChange={(value) => i18n.changeLanguage(value)}
                >
                  <SelectTrigger className="flex items-center p-0 lg:px-2 justify-between w-18 outline-none md:text-black text-white border-none bg-transparent font-bold">
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
                            className="lg:size-5 size-4 inline-block mr-2"
                          />
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex relative items-center md:hidden justify-end h-16 ml-1">
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
            <div
              className={
                !nav
                  ? `fixed z-10  left-0  top-[8%] w-full text-black bg-white/10
                backdrop-blur-2xl border-b rounded-b-md ease-in-out duration-500 cursor-pointer`
                  : "fixed top-[-150%]"
              }
            >
              <div className="flex flex-col items-center text-center justify-center h-96">
                <ul className="flex flex-col items-center justify-center px-8 w-[80%]  text-white bg-bgGreen font-bold-100 rounded-2xl pb-6">
                  {NavbarItems.map((item) => (
                    <li
                      key={item?.id}
                      onClick={handleNav}
                      className="p-4 border-b border-white text-xl w-full rounded-2xl"
                    >
                      <Link to={item.link}>{t(`${item.name}`)}</Link>
                    </li>
                  ))}
                  {currentUser && (
                    <li
                      onClick={handleNav}
                      className="p-4 border-b border-white text-xl w-full rounded-2xl"
                    >
                      <Link to="mypage">My Page</Link>
                    </li>
                  )}
                </ul>
              </div>
              <div className="w-full flex flex-col items-center justify-cente h-16 mb-6">
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="w-[80%] h-16 flex items-center justify-center text-xl text-white bg-bgGreen rounded-xl"
                  >
                    <Link onClick={handleNav} to={"/login"}>
                      Log Out
                    </Link>
                  </button>
                ) : (
                  <button className="w-[80%] h-16 flex items-center justify-center text-xl text-white bg-bgGreen rounded-xl">
                    <Link onClick={handleNav} to={"/login"}>
                      Sign in
                    </Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
