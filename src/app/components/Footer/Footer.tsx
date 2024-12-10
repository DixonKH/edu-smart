import { MdCastForEducation } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="bg-green1 text-white">
        <div className=" container md:px-10 sm:px-5 px-1  ">
          <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-10">
            <div className="col-span-2 gap-4">
              <div className="flex justify-start items-center gap-2 p-3">
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-yellow">
                  <MdCastForEducation className="text-xl text-bgGreen" />
                </div>
                <p className="text-2xl">Edu-Smart</p>
              </div>
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                quam et sapien sed magna placerat. Donec vel neque et nunc
                gravida ultricies. Vivamus sed diam non et justo just
              </p>
              <div className="sm:flex flex justify-evenly items-center gap-1 p-2">
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-bgGreen">
                  <FaFacebook className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-bgGreen">
                  <FaTwitter className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-bgGreen">
                  <FaPinterest className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-bgGreen">
                  <FaInstagramSquare className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-bgGreen">
                  <FaYoutube className="text-xl text-white" />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="lg:flex">
                <div className="">
                  <p className="text-2xl p-3">Company</p>
                  <ul className="inline-block">
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      Our Team
                    </li>
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      Pricing
                    </li>
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      Testimonial
                    </li>
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      FAQs
                    </li>
                    <li className="p-2 hover:text-[18px] hover:text-yellow">
                      Contact Us
                    </li>
                  </ul>
                </div>

                <div className="">
                  <p className="text-2xl p-3">Contact</p>
                  <ul className="inline-block">
                    <li className="p-2">+82101234567</li>
                    <li className="p-2">example@gmail.com</li>
                    <li className="p-2">123456, Royal, Messey, New Jersey</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-3 col-span-2">
              <p className="p-3  text-2xl">Get the latest information</p>
              <div className="flex items-center p-3 ">
                <input
                  className="rounded-l-md w-full bg-bgGreen"
                  type="text"
                  placeholder=""
                />
                <IoSend className="text-2xl text-black  rounded-r-md bg-yellow" />
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
