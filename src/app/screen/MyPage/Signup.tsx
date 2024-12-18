import React, { useEffect, useReducer, useState } from "react";
import { FcAddressBook, FcGoogle } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { SiApple } from "react-icons/si";

type Props = {};

const inputReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "VALIDATE_USERNAME":
      return {
        ...state,
        usernameValid: action.payload.trim().length >= 6,
      };
    case "VALIDATE_EMAIL":
      return {
        ...state,
        emailValid:
          action.payload.includes("@") && action.payload.includes("."),
      };
    case "VALIDATE_PASSWORD":
      return {
        ...state,
        passwordValid:
          action.payload.includes("_") || action.payload.includes("-"),
      };
    default:
      return state;
  }
};

const Signup = (props: Props) => {
  let [formValid, setFormValid] = useState(false);

  let [inputs, inputsdispatcher] = useReducer(inputReducer, {
    email: "",
    username: "",
    password: "",
    emailValid: false,
    usernameValid: false,
    passwordValid: false,
  });

  useEffect(() => {
    console.log("Enter")
    setFormValid(
      (inputs.email.includes("@") &&
        inputs.email.includes(".") &&
        inputs.password.includes("_")) ||
        (inputs.password.includes("-") && inputs.username.trim().length >= 6)
    );
  }, [inputs.email, inputs.username, inputs.password]);

  //getting values from input fields

  function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_USERNAME" });
  }
  function emailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_EMAIL" });
  }
  function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_PASSWORD" });
  }

  // checking validation

  function usernameBlur() {
    inputsdispatcher({
      payload: inputs.username,
      type: "VALIDATE_USERNAME",
    });
  }
  function emailBlur() {
    inputsdispatcher({
      payload: inputs.email,
      type: "VALIDATE_EMAIL",
    });
  }

  function passwordBlur() {
    inputsdispatcher({
      payload: inputs.password,
      type: "VALIDATE_PASSWORD",
    });
  }

  // submitting form

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (!inputs.emailValid) {
      alert("Email should contain (@) and (.) characters");
      return;
    } else if (!inputs.passwordValid) {
      alert("Password should contain  underscore (_) or hyphen (-)");
      return;
    } else if (!inputs.usernameValid) {
      alert("Username should contain at least 6 characters");
      return;
    }

    if (formValid) {
      console.log("Form submitted", {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      });
    }
  }

  return (
    <div>
      <div>
        <div className="lg:container md:px-10 sm:px-5 px-1">
          <div className="  rounded-xl border-black">
            <div className="h-full w-full">
              <div className=" items-center justify-center">
                <div className="flex items-center py-8 justify-center">
                  <div className="bg-yellow text-green  rounded-full">
                    <MdCastForEducation className="p-3 text-8xl" />
                  </div>
                </div>
                <p className="flex py-5 items-center justify-center text-3xl">
                  Signup
                </p>
                <form onSubmit={handleSubmit}>
                  <div data-aos="fade-up" className="container p-4">
                    <div className="">
                      <div className="flex justify-center">
                        <input
                          id="username"
                          type="text"
                          value={inputs.username}
                          onChange={usernameChange}
                          onBlur={usernameBlur}
                          placeholder="Username"
                          className={
                            inputs.usernameValid
                              ? "border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                              : "border-red  p-3 w-full lg:w-[50%] text-black rounded-full border-2  mb-4"
                          }
                        />
                      </div>
                      <div className="flex justify-center">
                        <input
                          id="password"
                          type="password"
                          value={inputs.password}
                          onChange={passwordChange}
                          onBlur={passwordBlur}
                          placeholder="Password"
                          className={
                            inputs.passwordValid
                              ? "border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                              : "border-red  p-3 w-full lg:w-[50%] text-black rounded-full border-2  mb-4"
                          }
                        />
                      </div>
                      <div className="flex justify-center">
                        <input
                          id="email"
                          type="email"
                          value={inputs.email}
                          onChange={emailChange}
                          onBlur={emailBlur}
                          placeholder="Email"
                          className={
                            inputs.emailValid
                              ? "border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                              : "border-red  p-3 w-full lg:w-[50%] text-black rounded-full border-2  mb-4"
                          }
                        />
                      </div>
                    </div>

                    <div className="flex justify-center text-center items-center py-2">
                      <button className="flex items-center justify-between shadow-xl border lg:py-2 lg:px-3 py-1 px-2 text-lg hover:bg-bgGreen hover:text-white bg-yellow rounded-3xl">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>

                <div className="flex py-3 items-center justify-center">
                  <button
                    type="submit"
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
                    <button className="text-sky-800">
                      {" "}
                      Continue with email
                    </button>
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

export default Signup;
function setPassword(value: any) {
  throw new Error("Function not implemented.");
}

function setPasswordValid(arg0: boolean) {
  throw new Error("Function not implemented.");
}
