import React, { useEffect, useReducer, useState } from "react";
import { FcAddressBook, FcGoogle } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { SiApple } from "react-icons/si";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

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
    case "TOGGLE_TEACHER":
      return {
        ...state,
        teacher: action.payload,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "SET_PHONE_NUMBER":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "SET_YEAR_EXPERIENCE":
      return {
        ...state,
        yearExperience: action.payload,
      };
    case "SET_ABOUTME":
      return {
        ...state,
        aboutme: action.payload,
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
    case "VALIDATE_ADDRESS":
      return {
        ...state,
        addressValid: action.payload.trim().length >= 25,
      };
    case "VALIDATE_PHONE_NUMBER":
      return {
        ...state,
        phoneNumberValid:
          action.payload.length >= 10 && action.payload.includes("+"),
      };
    case "VALIDATE_YEAR_EXPERIENCE":
      return {
        ...state,
        yearExperienceValid:
          action.payload.trim().length <= 2 && parseInt(action.payload) >= 0,
      };
    case "VALIDATE_ABOUTME":
      return {
        ...state,
        aboutmeValid: action.payload.trim().length >= 40,
      };
    default:
      return state;
  }
};

const Signup = (props: Props) => {
  let [formValid, setFormValid] = useState(false);
  let [identifier, setIdentifier] = useState(false);
  let [form, setItems] = useState({
    email: "",
    username: "",
    password: "",
    teacher: false,
    address: "",
    phoneNumber: "",
    yearExperience: "",
    aboutme: "",
  });

  let [inputs, inputsdispatcher] = useReducer(inputReducer, {
    email: "",
    username: "",
    password: "",
    usernameValid: false,
    passwordValid: false,
    emailValid: false,
    teacher: false,
    address: "",
    phoneNumber: "",
    yearExperience: "",
    aboutme: "",
    addressValid: false,
    phoneNumberValid: false,
    yearExperienceValid: false,
    aboutmeValid: false,
  });

  useEffect(() => {}, [
    inputs.usernameValid,
    inputs.passwordValid,
    inputs.emailValid,
    inputs.teacher,
    inputs.addressValid,
    inputs.phoneNumberValid,
    inputs.yearExperienceValid,
    inputs.aboutmeValid,
  ]);

  //getting values from input fields

  function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_USERNAME" });
  }
  function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_PASSWORD" });
  }
  function emailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_EMAIL" });
  }
  // toggle switch

  function addressChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_ADDRESS" });
  }
  function phoneNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_PHONE_NUMBER" });
  }
  function yearExperienceChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_YEAR_EXPERIENCE" });
  }
  function aboutmeChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    inputsdispatcher({ payload: value, type: "SET_ABOUTME" });
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

  function addressBlur() {
    inputsdispatcher({
      payload: inputs.address,
      type: "VALIDATE_ADDRESS",
    });
  }
  function phoneNumberBlur() {
    inputsdispatcher({
      payload: inputs.phoneNumber,
      type: "VALIDATE_PHONE_NUMBER",
    });
  }
  function yearExperienceBlur() {
    inputsdispatcher({
      payload: inputs.yearExperience,
      type: "VALIDATE_YEAR_EXPERIENCE",
    });
  }
  function aboutmeBlur() {
    inputsdispatcher({
      payload: inputs.aboutme,
      type: "VALIDATE_ABOUTME",
    });
  }

  // submitting form

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (!inputs.usernameValid) {
      alert("Username should contain at least 6 characters");
    } else if (!inputs.emailValid) {
      alert("Email should contain (@) and (.) characters");
    } else if (!inputs.passwordValid) {
      alert("Password should contain  underscore (_) or hyphen (-)");
    } else if (!inputs.emailValid) {
      alert("Email should contain (@) and (.) characters");
    } else if (inputs.teacher) {
      if (!inputs.addressValid) {
        alert("Address should contain at least 25 characters");
      } else if (!inputs.phoneNumberValid) {
        alert("Phone number should be more than 10 digits and include + sign");
      } else if (!inputs.yearExperienceValid) {
        alert("Year Of Experience should be only 2 digits");
      } else if (!inputs.aboutmeValid) {
        alert("About me should contain at least 40 characters");
      }
    }
    if (
      inputs.usernameValid &&
      inputs.passwordValid &&
      inputs.emailValid &&
      !inputs.teacher
    ) {
      setItems({
        email: inputs.email,
        username: inputs.username,
        password: inputs.password,
        teacher: inputs.teacher,
        address: inputs.address,
        phoneNumber: inputs.phoneNumber,
        yearExperience: inputs.yearExperience,
        aboutme: inputs.aboutme,
      });
    } else if (
      inputs.usernameValid &&
      inputs.passwordValid &&
      inputs.emailValid &&
      inputs.teacher &&
      inputs.addressValid &&
      inputs.phoneNumberValid &&
      inputs.yearExperienceValid &&
      inputs.aboutmeValid
    )
      setItems({
        email: inputs.email,
        username: inputs.username,
        password: inputs.password,
        teacher: inputs.teacher,
        address: inputs.address,
        phoneNumber: inputs.phoneNumber,
        yearExperience: inputs.yearExperience,
        aboutme: inputs.aboutme,
      });
  }

  function switcher(checked: boolean) {
    setIdentifier(checked);
    inputsdispatcher({
      payload: checked,
      type: "TOGGLE_TEACHER",
    });
  }
  // function identifierUser(event: React.ChangeEvent<HTMLInputElement>) {
  //   setIdentifier(false);
  // }

  console.log(form);

  return (
    <div>
      <div>
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
                              ? "border-green  p-3 w-full  lg:w-[50%] text-black rounded-full border  mb-4"
                              : "border-red  p-3 w-full lg:w-[50%] text-black rounded-full border-2  mb-4"
                          }
                        />
                      </div>
                      <div className="text-2xl m-2 p-2 md:w-[50%]  base:w-[50%]  w-[100%]   items-center justify-evenly gap-5 lg:w-[50%] mx-auto">
                        <div className="flex m-2 items-center justify-between gap-3">
                          <p>Who are you?</p>
                        </div>
                        <div className="flex  m-2 items-center gap-5 space-x-2">
                          <Label htmlFor="user">
                            <span
                              className={
                                identifier
                                  ? "line-through  italic border   border-red rounded-xl bg-red px-2 text-xl text-white"
                                  : "text-xl border text-white px-2 border-green rounded-xl bg-green"
                              }
                            >
                              User
                            </span>
                          </Label>
                          <Switch
                            onCheckedChange={switcher}
                            className=""
                            id="teacherId"
                          />
                          <Label htmlFor="teacher">
                            <span
                              className={
                                !identifier
                                  ? "line-through px-2 border   border-red rounded-xl bg-red  italic text-xl text-white"
                                  : "text-xl text-white border px-2 border-green rounded-xl bg-green"
                              }
                            >
                              Teacher
                            </span>
                          </Label>
                        </div>
                      </div>
                      {identifier && (
                        <div>
                          {" "}
                          <div className="flex justify-center">
                            <input
                              id="address"
                              type="text"
                              value={inputs.address}
                              onChange={addressChange}
                              onBlur={addressBlur}
                              placeholder="addresss"
                              className={
                                inputs.addressValid
                                  ? "border-green  p-3 w-full lg:w-[50%] text-black rounded-full border  mb-4"
                                  : "border-red  p-3 w-full lg:w-[50%] text-black rounded-full border-2  mb-4"
                              }
                            />
                          </div>
                          <div className="lg:flex md:flex base:flex justify-center items-center w-full mx-auto">
                            <div className="lg:flex md:flex base:flex items-center lg:w-[50%] md:w-[100%] base:w-[100%] lg:gap-3 gap-1">
                              <div className="flex justify-center  w-[100%]">
                                <input
                                  id="phoneNumber"
                                  type="text"
                                  value={inputs.phoneNumber}
                                  onChange={phoneNumberChange}
                                  onBlur={phoneNumberBlur}
                                  placeholder="Phone Number"
                                  className={
                                    inputs.phoneNumberValid
                                      ? "border-green  p-3 w-full lg:w-[100%] text-black rounded-full border  mb-4"
                                      : "border-red  p-3 w-full lg:w-[100%] text-black rounded-full border-2  mb-4"
                                  }
                                />
                              </div>
                              <div className="flex justify-center  w-[100%]">
                                <input
                                  id="yearExperience"
                                  type="text"
                                  value={inputs.yearExperience}
                                  onChange={yearExperienceChange}
                                  onBlur={yearExperienceBlur}
                                  placeholder="Year Of Experience"
                                  className={
                                    inputs.yearExperienceValid
                                      ? "border-green  p-3 w-full lg:w-[100%] text-black rounded-full border  mb-4"
                                      : "border-red  p-3 w-full lg:w-[100%] text-black rounded-full border-2  mb-4"
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="lg:p-3 p-1 lg:w-[50%]  mx-auto">
                            <p>About me*</p>
                            <textarea
                              id="aboutme"
                              value={inputs.aboutme}
                              onBlur={aboutmeBlur}
                              onChange={aboutmeChange}
                              className={
                                inputs.aboutmeValid
                                  ? "border-green   w-full border text-black  px-3 py-1 rounded-2xl outline-none p-2 h-48 text-lg   mb-4"
                                  : "border-red   w-full border  px-3 py-1 rounded-2xl outline-none p-2 h-48 text-lg text-black   mb-4"
                              }
                            />
                          </div>{" "}
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center text-center items-center py-2">
                      <button className="flex items-center justify-between shadow-xl border lg:py-2 lg:px-3 py-1 px-2 text-lg hover:bg-bgGreen hover:text-white bg-yellow rounded-3xl">
                        Sign Up
                      </button>
                    </div>
                    <div className="flex justify-center text-center items-center py-2">
                      <Link
                        to="/login"
                        className="flex items-center justify-between shadow-xl border lg:py-2 lg:px-3 py-1 px-2 text-lg hover:bg-bgGreen hover:text-white bg-yellow rounded-3xl"
                      >
                        Login
                      </Link>
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
