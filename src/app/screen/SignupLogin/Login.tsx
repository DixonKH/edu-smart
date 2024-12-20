import React from "react";
import { SiApple } from "react-icons/si";
import { FcGoogle, FcAddressBook } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-router";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="lg:container mt-[90px] md:px-10 sm:px-5 px-1">
      <div className="  rounded-xl border-black">
        <div className="h-full w-full">
          <div className=" items-center justify-center">
            <div className="flex items-center py-8 justify-center">
              <div className="bg-yellow text-green  rounded-full">
                <MdCastForEducation className="p-3 text-8xl" />
              </div>
            </div>
            <p className="flex py-5 items-center justify-center text-3xl">
              Login
            </p>
            <form>
              <div data-aos="fade-up" className="container p-4">
                <div className="">
                  <div className="flex justify-center">
                    <input
                      id="username"
                      type="text"
                      //   value={emailState.value}
                      //   onChange={emailChangeHandler}
                      //   onBlur={validateEmailHandler}
                      placeholder="Username"
                      className=" border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                    />
                  </div>
                  <div className="flex justify-center">
                    <input
                      id="password"
                      type="password"
                      //   value={passwordState.value}
                      //   onChange={passwordChangeHandler}
                      //   onBlur={validatePasswordHandler}
                      placeholder="Password"
                      className=" border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-10">
                  <button className="flex items-center justify-between shadow-xl border lg:py-2 lg:px-5 md:px-5 py-1 px-2 text-lg hover:bg-bgGreen hover:text-white bg-yellow rounded-3xl">
                    Login
                  </button>
                </div>
                <div className="flex justify-center text-center items-center py-2">
                  <Link
                    to={"/signup"}
                    className="flex items-center justify-between shadow-xl border lg:py-2 lg:px-5 md:px-5 py-1 px-2 text-lg hover:bg-bgGreen hover:text-white bg-yellow rounded-3xl"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </form>

            <div className="flex py-3 items-center justify-center">
              <button
                className="border-black flex items-center justify-around border hover:bg-slate-100 text-center text-xs sm:text-sm font-bold 
          sm:w-4/5 md:w-2/5 base:w-3/5 lg:w-1/5 cursor-pointer bg-white text-black
                    py-1 p-5 rounded-full"
              >
                <FcGoogle />
                <span> Continue with Google </span>
              </button>
            </div>
            <div>
              <div className="flex py-3 items-center justify-center">
                <button
                  className="border-black flex justify-around items-center border hover:bg-slate-100 text-center text-xs sm:text-sm font-bold 
            sm:w-4/5 md:w-2/5 base:w-3/5 lg:w-1/5 hover:text-black cursor-pointer bg-black text-white
                    py-1 p-5 rounded-full"
                >
                  <SiApple />
                  <span>Continue with Apple</span>
                </button>
              </div>
              <div className="flex py-7 items-center justify-center">
                <span>________________or________________</span>
              </div>
              <div className="flex py-3 items-center justify-center">
                <button className="text-sky-800"> Continue with email</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;