
import { FcGoogle } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { SiApple } from "react-icons/si";
import { useMemberStore } from "../teachers/model/store";
import { MemberInput } from "@/shared/types/member";
import { useFormik } from "formik";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { MemberType } from "@/shared/enums/member.enum";
import { sweetErrorHandling, sweetTopSuccessAlert } from "@/shared/lib/sweetAlert";
import * as Yup from "yup";

const validate = (values: MemberInput) => {
  const errors: Partial<MemberInput> = {};

  if (!values.memberNick) {
    errors.memberNick = "Required";
  } else if (values.memberNick.length > 15) {
    errors.memberNick = "Must be 15 characters or less";
  }

  if (!values.memberPassword) {
    errors.memberPassword = "Required";
  } else if (values.memberPassword.length > 20) {
    errors.memberPassword = "Must be 20 characters or less";
  }

  if (!values.memberPhone) {
    errors.memberPhone = "Required";
  } else if (values.memberPhone.length > 20) {
    errors.memberPhone = "Must be 20 characters or less";
  }

  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

  return errors;
};
const Signup = () => {
  const signup = useMemberStore((state) => state.signUp);
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      memberNick: "",
      memberPassword: "",
      memberPhone: "",
      memberType: MemberType.STUDENT,
    },
    validationSchema: Yup.object({
      memberNick: Yup.string().required("Required"),
      memberPassword: Yup.string().required("Required"),
      memberPhone: Yup.string().required("Required"),

    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await signup(values);
        sweetTopSuccessAlert("Signup Success!");
        navigate("/");
      } catch (error: any) {     
        sweetErrorHandling(error)
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <div>
        <div className="lg:container mt-[110px] mb-4">
          <div className="  rounded-xl border-black">
            <div className="h-full w-full flex items-center justify-center">
              <div className="flex flex-col items-center  justify-center w-2/4 h-[800px] bg-green1 rounded-l-xl">
                <div className="flex flex-col items-center justify-start w-full mb-32">
                  <div className="flex items-center py-8 justify-center">
                    <div className="bg-yellow text-green1  rounded-full">
                      <MdCastForEducation className="p-3 text-8xl" />
                    </div>
                  </div>
                  <h1 className="text-white text-4xl py-5">Hello Friend!</h1>
                  <p className="text-white text-xl text-center">
                    Sign up to Edu-Smart and start journay with us!
                  </p>
                  <div className="border-white border w-48 py-2 rounded-3xl text-center mt-8">
                    <Link
                      to={"/login"}
                      className=" text-3xl text-white p-3 w-96 mb-2"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-2/4 h-[800px] border rounded-r-xl border-green">
                <p className="flex mb-8 items-center justify-center text-6xl font-bold text-slate-700">
                  Signup
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

                  <div className="flex flex-col mb-4">
                    <input
                      placeholder="Password"
                      id="memberPassword"
                      name="memberPassword"
                      type="password"
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
                  <div className="flex flex-col mb-3">
                    <input
                      placeholder="Phone Number"
                      id="memberPhone"
                      name="memberPhone"
                      type="text"
                      value={formik.values.memberPhone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className=" border-green p-3 w-96 text-black rounded-full border"
                    />
                    {formik.touched.memberPhone && formik.errors.memberPhone ? (
                      <div className="text-red">{formik.errors.memberPhone}</div>
                    ) : null}
                  </div>

                  <div className="flex justify-center items-center gap-5 mt-4">
                    <p className="font-bold">I want to be registered as: </p>
                    <div className="flex justify-center gap-4">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          value={MemberType.STUDENT}
                          checked={
                            formik.values.memberType === MemberType.STUDENT
                          }
                          onCheckedChange={(checked) =>
                            formik.setFieldValue("memberType", checked ? MemberType.STUDENT : "")
                          }
                        />
                        <span>Student</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          value={MemberType.TEACHER}
                          checked={
                            formik.values.memberType === MemberType.TEACHER
                          }
                          onCheckedChange={(checked) =>
                            formik.setFieldValue("memberType", checked ? MemberType.TEACHER : "")
                          }
                        />
                        <span>Teacher</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="border-green py-3 w-96 text-xl text-white bg-green1 rounded-full border  my-2 mt-8 cursor-pointer"
                  >
                    {formik.isSubmitting ? "Submitting..." : "Sign Up"}
                  </button>
                </form>
                <div className="flex w-full py-3 items-center justify-center">
                  <button
                    type="submit"
                    className="border-green p-3 w-64 text-black rounded-full border gap-2 flex items-center justify-center"
                  >
                    <FcGoogle className="text-2xl" />
                    <span> Continue with Google </span>
                  </button>
                </div>
                <div>
                  <div className="flex py-3 items-center justify-center">
                    <button className="p-3 w-64 text-white bg-black rounded-full border gap-2  mb-2 flex items-center justify-center">
                      <SiApple className="text-xl" />
                      <span>Continue with Apple</span>
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
