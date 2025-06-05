import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";
import FooterLp from "../../components/landingPage/FooterLp";
import HeaderLp from "../../components/header/HeaderLp";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { ApiServices } from "../../services/ApiServices";
import GenService from "../../services/GenService";

const schema = Yup.object().shape({
  nikNpm: Yup.string().required("NIK/NPM tidak boleh kosong"),
  password: Yup.string()
    .min(6, "Minimum 6 symbols")
    .required("Password tidak boleh kosong"),
});

export default function SignIn() {
  //added
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const formik: any = useFormik({
    initialValues: {
      nikNpm: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        submit(values);
      } catch (error: any) {
        console.error(error);
      }
    },
  });

  const submit = async (data: any) => {
    setLoading(true);
    let res = await ApiServices.login(data, setLoading);
    if (res) {
      setLoading(false);
      if (res.success) {
        let userData = res.data.userData;
        let access_token = res.data.access_token;
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("access_token", access_token);
        navigate("/");
      } else {
        GenService.alertError(res.message);
      }
    }
  };
  //added
  return (
    <>
      <PageMeta title="Sign In" description="UNIPI E-Learning SignIn Page" />
      {/* <AuthLayout>
        <SignInForm />
      </AuthLayout> */}

      <HeaderLp />
      <section className="bg-[url('/images/landingpage/bg0.jpg')] bg-cover bg-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full backdrop-blur-md bg-white/70 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                {/* input nik */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    NIK/NPM
                  </label>
                  <input
                    type="text"
                    value={formik.values.nikNpm}
                    {...formik.getFieldProps("nikNpm")}
                    onChange={(event: any) => {
                      formik.setValues({
                        ...formik.values,
                        nikNpm: event.target.value,
                      });
                    }}
                    className={clsx(
                      "w-full bg-white form-input border border-gray-300 rounded-md px-4 py-3 ",
                      {
                        "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500":
                          formik.touched.nikNpm && formik.errors.nikNpm,
                      },
                      {
                        "bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500":
                          formik.touched.nikNpm && !formik.errors.nikNpm,
                      }
                    )}
                    placeholder=""
                  />

                  {formik.touched.nikNpm && formik.errors.nikNpm && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {formik.errors?.nikNpm}
                    </p>
                  )}
                </div>
                {/* input password */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    value={formik.values.password}
                    {...formik.getFieldProps("password")}
                    onChange={(event: any) => {
                      formik.setValues({
                        ...formik.values,
                        password: event.target.value,
                      });
                    }}
                    className={clsx(
                      "w-full bg-white form-input border border-gray-300 rounded-md px-4 py-3 ",
                      {
                        "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500":
                          formik.touched.password && formik.errors.password,
                      },
                      {
                        "bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500":
                          formik.touched.password && !formik.errors.password,
                      }
                    )}
                    placeholder="****"
                  />

                  {formik.touched.password && formik.errors.password && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {formik.errors?.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded 
                      bg-gray-50 focus:ring-3 focus:ring-primary-300 
                      dark:bg-gray-700 dark:border-gray-600 
                      dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full 
                text-white bg-cyan-600 
                hover:bg-primary-700 
                focus:ring-4 focus:outline-none 
                focus:ring-primary-300 
                font-medium rounded-lg 
                text-sm px-5 py-2.5 
                text-center 
                dark:bg-primary-600 
                dark:hover:bg-primary-700 
                dark:focus:ring-primary-800"
                >
                  {Loading ? "Loading.." : "Sign in"}
                </button>
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
      <FooterLp />
    </>
  );
}
