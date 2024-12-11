import React from "react";
import { SiApple } from "react-icons/si";
import { FcGoogle, FcAddressBook } from "react-icons/fc";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="lg:container md:px-10 sm:px-5 px-1">
      <div className="  rounded-xl border-black">
        <div className="h-full w-full">
          <div className=" items-center justify-center">
            <div className="flex items-center py-8 justify-center">
              <FcAddressBook className=" text-8xl" />
            </div>
            <p className="flex py-5 items-center justify-center text-3xl">
              Signup & Login
            </p>
            <form>
              <div data-aos="fade-up" className="container p-4">
                <div className="">
                  <div className="flex justify-center">
                    <input
                      id="email"
                      type="email"
                      //   value={emailState.value}
                      //   onChange={emailChangeHandler}
                      //   onBlur={validateEmailHandler}
                      placeholder="Email"
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
                  <div className="flex justify-center">
                    <input
                      id="number"
                      type="number"
                      //   value={passwordState.value}
                      //   onChange={passwordChangeHandler}
                      //   onBlur={validatePasswordHandler}
                      placeholder="Phone Number"
                      className=" border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-10">
                  <button
                    type="submit"
                    // disabled={!formState.isValid}
                    // onClick={authctx.onLogin}
                    className={
                      "bg-gradient-to-r border hover:bg-green border-green from-orange-800 to-orange-500 hover:scale-105 duration-200 text-black py-1 px-4 rounded-full"
                    }
                  >
                    Login
                  </button>
                  <button
                    className="bg-gradient-to-r border hover:bg-green border-green from-orange-800 to-orange-500
                              hover:scale-105 duration-200 text-black
                              py-1 px-4 rounded-full"
                  >
                    LogOut
                  </button>
                </div>
                <div className="flex justify-center text-center items-center py-2">
                  <button
                    // to="/signup"

                    className="    
                              hover:scale-105 duration-200 text-blue-600
                              py-1 pt-2 rounded-full"
                  >
                    Sign up
                  </button>
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
