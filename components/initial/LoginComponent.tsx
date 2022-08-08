/** @jsxImportSource @emotion/react */
import React, { Fragment, useCallback, useState } from "react";
import tw from "twin.macro";
import { useDispatch } from "react-redux";
import { css } from "@emotion/react";
import AuthServices from "../../services/AuthServices";
import { Desktop } from "../utilities/Responsive";
import { AppDispatch } from "../../redux/store";
import { useNotification } from "../utilities/Notification";
import { hideLoadingSpinner, showLoadingSpinner } from "../App";
import { logIn } from "../../redux/actions/authAction";
import { useRouter } from "next/router";
import PasswordStrengthBar from "react-password-strength-bar";

type LoginFormType = {
  email: string;
  password: string;
};

type RegisterFormType = {
  email: string;
  password: string;
};

const loginState = {
  email: "",
  password: "",
};

const registerState = {
  email: "",
  password: "",
};

const LoginComponent = () => {
  const [loginForm, setLoginForm] = useState<LoginFormType>(loginState);
  const [registerForm, setRegisterForm] =
    useState<RegisterFormType>(registerState);
  const [isRegister, setIsRegister] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const handleSwitchRegister = useCallback(() => {
    if (isRegister) {
      setIsRegister(false);
      setLoginForm(loginState);
      return;
    }
    setIsRegister(true);
    setRegisterForm(registerState);
  }, [isRegister]);

  return (
    <Fragment>
      <section tw="h-screen bg-white-lilac-400">
        <div tw="h-full text-gray-800">
          <div tw="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full">
            <Desktop tw="flex-grow-0 h-[350px] sm:h-[100%] flex-shrink-[1] md:flex-shrink-0 flex-auto w-6/12 mb-12 md:mb-0">
              <div tw="h-[100vh] sticky top-0 left-0 bottom-0 right-0 grid grid-cols-1 content-center">
                <div tw="flex flex-col w-full">
                  <div tw="block mx-auto py-20 px-14 rounded-xl flex justify-center items-center">
                    <img src="/images/learning.png" tw="w-[80%]" />
                  </div>
                </div>
              </div>
            </Desktop>

            <div tw="px-6 lg:px-10 xl:px-20 w-full md:w-5/12 sm:w-5/12  mb-12 md:mb-0">
              <h2 tw="text-[35px] font-poppins text-cornflower-blue-600">
                Sevima Collab
              </h2>
              <div tw="flex flex-row items-center justify-center lg:justify-start">
                <p tw="text-lg mb-0 mr-4">Masuk dengan platform</p>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  tw="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    tw="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  tw="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    tw="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  tw="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    tw="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                </button>
              </div>

              <div tw="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p tw="text-center font-semibold mx-4 mb-0">Or</p>
              </div>
              {!isRegister ? (
                <LoginFormComponent
                  loginForm={loginForm}
                  setLoginForm={setLoginForm}
                  dispatch={dispatch}
                />
              ) : (
                <RegisterFormComponent
                  registerForm={registerForm}
                  setRegisterForm={setRegisterForm}
                  setIsRegister={setIsRegister}
                />
              )}

              <p tw="text-sm font-semibold mt-2 pt-1 mb-0">
                Tidak mempunyai akun?
                <button
                  onClick={handleSwitchRegister}
                  tw="text-red-600 hover:text-red-700 cursor-pointer focus:text-red-700 transition duration-200 ease-in-out ml-2"
                >
                  {isRegister ? "Masuk ke Dashboard" : "Daftar Sekarang"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginComponent;

export const LoginFormComponent = ({
  loginForm,
  setLoginForm,
  dispatch,
}: {
  loginForm: LoginFormType;
  setLoginForm: React.Dispatch<React.SetStateAction<LoginFormType>>;
  dispatch: AppDispatch;
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const notification = useNotification();
  const router = useRouter();

  const handleLogin = useCallback(
    async (e: any): Promise<void> => {
      if (e) e.preventDefault();
      try {
        showLoadingSpinner();
        const response = await AuthServices.login(loginForm);
        notification.showNotification({
          message: `${response.data?.message}`,
          type: response.data.status,
          dismissTimeout: 3000,
        });
        dispatch(logIn(loginForm, response.data));
        router.replace("/dashboard");
        hideLoadingSpinner();
      } catch (err: any) {
        notification.showNotification({
          message: `${err.data?.message}`,
          type: "danger",
          dismissTimeout: 3000,
        });
        hideLoadingSpinner();
      }
    },
    [loginForm]
  );

  const handleShowPassword = useCallback(() => {
    if (showPassword) {
      setShowPassword(false);
      return;
    }
    setShowPassword(true);
  }, [showPassword]);

  return (
    <Fragment>
      <div tw="pb-5">
        <h2 tw="font-medium text-[20px] font-poppins text-gray-600">
          Login Form
        </h2>
      </div>
      <form onSubmit={handleLogin} tw="space-y-3">
        <div>
          <input
            value={loginForm.email || ""}
            onChange={(e) => {
              if (e) e.preventDefault();
              setLoginForm({
                ...loginForm,
                email: e.target.value,
              });
            }}
            type="text"
            tw="block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email"
            autoFocus
            required
          />
        </div>
        <div tw="w-full flex bg-white border border-solid border-gray-300 focus:bg-white focus:border-blue-600 rounded-lg">
          <input
            tw="block w-[90%] px-4 py-1 text-xl font-normal text-gray-700 bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 border-none focus:outline-none"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            autoFocus
            value={loginForm.password || ""}
            onChange={(e) => {
              if (e) e.preventDefault();
              setLoginForm({
                ...loginForm,
                password: e.target.value,
              });
            }}
            required
          />

          <div
            tw="w-[10%] flex justify-center items-center py-1 cursor-pointer hover:bg-gray-200"
            onClick={handleShowPassword}
          >
            <i
              className="fa-solid fa-eye"
              tw="text-xl"
              css={[showPassword ? tw`text-blue-500` : tw`text-gray-600`]}
            />
          </div>
        </div>
        <div tw="flex justify-between items-center mb-6">
          <div className="group" tw="cursor-pointer">
            <input
              type="checkbox"
              tw="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label tw="inline-block text-gray-800" htmlFor="exampleCheck2">
              Agree terms & conditions
            </label>
          </div>
          <a href="#!" tw="text-gray-800">
            Masuk dashboard
          </a>
        </div>

        <div tw="text-center lg:text-left">
          <button
            type="submit"
            tw="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Login
          </button>
        </div>
      </form>
    </Fragment>
  );
};

const RegisterFormComponent = ({
  registerForm,
  setRegisterForm,
  setIsRegister,
}: {
  registerForm: RegisterFormType;
  setRegisterForm: React.Dispatch<React.SetStateAction<RegisterFormType>>;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const notification = useNotification();

  const handleRegister = useCallback(
    async (e: any): Promise<void> => {
      if (e) e.preventDefault();
      try {
        showLoadingSpinner();
        const response = await AuthServices.register(registerForm);
        notification.showNotification({
          message: `${response.data?.message}`,
          type: response.data.status,
          dismissTimeout: 3000,
        });
        setIsRegister(false);
        hideLoadingSpinner();
      } catch (err: any) {
        notification.showNotification({
          message: `${err.data?.message}`,
          type: "danger",
          dismissTimeout: 3000,
        });
        hideLoadingSpinner();
      }
    },
    [registerForm]
  );

  const handleShowPassword = useCallback(() => {
    if (showPassword) {
      setShowPassword(false);
      return;
    }
    setShowPassword(true);
  }, [showPassword]);

  return (
    <Fragment>
      <div tw="pb-5">
        <h2 tw="font-medium text-[20px] font-poppins text-gray-600">
          Register Form
        </h2>
      </div>
      <form onSubmit={handleRegister} tw="space-y-3">
        <div tw="relative">
          <input
            value={registerForm.email || ""}
            onChange={(e) => {
              if (e) e.preventDefault();
              setRegisterForm({
                ...registerForm,
                email: e.target.value,
              });
            }}
            type="text"
            tw="block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Email"
            autoFocus
            required
          />
        </div>
        <div tw="w-full flex bg-white border border-solid border-gray-300 focus:bg-white focus:border-blue-600 rounded-lg">
          <input
            tw="block w-[90%] px-4 py-1 text-xl font-normal text-gray-700 bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 border-none focus:outline-none"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            autoFocus
            value={registerForm.password || ""}
            onChange={(e) => {
              if (e) e.preventDefault();
              setRegisterForm({
                ...registerForm,
                password: e.target.value,
              });
            }}
            required
          />

          <div
            tw="w-[10%] flex justify-center items-center py-1 cursor-pointer hover:bg-gray-200"
            onClick={handleShowPassword}
          >
            <i
              className="fa-solid fa-eye"
              tw="text-xl"
              css={[showPassword ? tw`text-blue-500` : tw`text-gray-600`]}
            />
          </div>
        </div>
        <PasswordStrengthBar
          password={registerForm.password}
          shortScoreWord={"Terlalu lemah"}
          scoreWords={[
            "Sangat lemah",
            "Lemah",
            "Sedang",
            "Kuat",
            "Sangat kuat",
          ]}
        />
        <div tw="flex justify-between items-center mb-6">
          <div className="group" tw="cursor-pointer">
            <input
              type="checkbox"
              tw="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label tw="inline-block text-gray-800" htmlFor="exampleCheck2">
              Agree terms & conditions
            </label>
          </div>
          <a href="#!" tw="text-gray-800">
            Daftar Dashboard
          </a>
        </div>

        <div tw="text-center lg:text-left">
          <button
            type="submit"
            tw="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Register
          </button>
        </div>
      </form>
    </Fragment>
  );
};
