import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useMemberStore } from "../teachers/model/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  sweetErrorHandling,
  sweetTopSuccessAlert,
} from "@/shared/lib/sweetAlert";

const Login = () => {
  const login = useMemberStore((state) => state.login);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      memberNick: "",
      memberPassword: "",
    },
    validationSchema: Yup.object({
      memberNick: Yup.string().required("Required"),
      memberPassword: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        await login(values);
        sweetTopSuccessAlert("Signup Success!");
        navigate("/");
      } catch (error: any) {
        sweetErrorHandling(error);
      }
    }, 
  });
  return (
    <div className="lg:container mt-[110px] mb-4 md:px-10 sm:px-5 px-1">
      <div className="  rounded-xl border-black">
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-2/4 h-[800px] border rounded-l-xl border-green">
            <p className="flex py-5 items-center justify-center text-6xl font-bold text-slate-700">
              Sign in
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col w-full items-center justify-center"
            >
              <div className="flex flex-col mb-4">
                <input
                  placeholder="Username"
                  id="memberNick"
                  name="memberNick"
                  type="text"
                  value={formik.values.memberNick}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className=" border-green p-3 w-96 text-black rounded-full border"
                />
                {formik.touched.memberNick && formik.errors.memberNick ? (
                  <div className="text-red">{formik.errors.memberNick}</div>
                ) : null}
              </div>
              <div className="flex flex-col mb-3">
                <input
                  placeholder="Password"
                  id="memberPassword"
                  name="memberPassword"
                  type="text"
                  value={formik.values.memberPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className=" border-green p-3 w-96 text-black rounded-full border"
                />
                {formik.touched.memberPassword &&
                formik.errors.memberPassword ? (
                  <div className="text-red">{formik.errors.memberPassword}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className="border-green py-3 w-96 text-xl text-white bg-green1 rounded-full border  my-2 mt-8 cursor-pointer"
              >
                Sign in
              </button>
            </form>
            <div className="flex py-3 items-center justify-center">
              <button className="border-green p-3 w-64 text-black rounded-full border gap-2 flex items-center justify-center">
                <FcGoogle />
                <span> Continue with Google </span>
              </button>
            </div>
            <div>
              <div className="flex py-3 items-center justify-center">
                <button className="p-3 w-64 text-white bg-black rounded-full border gap-2  mb-2 flex items-center justify-center">
                  <SiApple />
                  <span>Continue with Apple</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center  justify-center w-2/4 h-[800px] bg-green1 rounded-r-xl">
            <div className="flex flex-col items-center justify-center mb-32">
              <div className="flex items-center py-8 justify-center">
                <div className="bg-yellow text-green1  rounded-full">
                  <MdCastForEducation className="p-3 text-8xl" />
                </div>
              </div>
              <h1 className="text-4xl text-white">Welcome Back!</h1>
              <p className="text-white text-xl text-center p-4">
                To keep connected with us please login with your personal info
              </p>
              <div className="border-white border w-48 py-2 rounded-3xl text-center mt-8 cursor-pointer">
                <Link
                  to={"/signup"}
                  className="text-3xl text-white p-3 w-96 mb-2"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
