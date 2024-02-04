import { Divider } from "@mui/material";
import { FaGoogle } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";

import React from "react";

const Login = () => {
  return (
    <section className=" dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-3 py-4 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className=" w-16 h-16 mr-2 mt-24"
            src="https://learnplus.demo.frontendmatter.com/assets/images/logo/primary.svg"
            alt=""
          />
          LearnPlus
        </a>
        <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 space-y-1 md:space-y-2 sm:p-8">
            <h1 className="text-md text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <p className="capitalize text-center">Login your account</p>
            <Divider />
            <button className="w-full bg-gray-300 py-2 flex justify-center items-center gap-2">
              <FaGoogle /> Continue with Google
            </button>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email Address:
                </label>
                <div className="flex items-center border py-1 px-2 rounded">
                  <FaRegEnvelope className="" />
                  <input
                    className="pl-2 outline-none border-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button className="w-full rounded bg-sky-500 py-2 text-white">
                Login
              </button>
              <div className="flex justify-center flex-col items-center py-2">
                <a href="" className="underline">
                  Forget Password?
                </a>
                <div className="flex  py-4">
                  <p>Not yet a Student?</p>
                  <span className="text-blue-400">SignUp</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
