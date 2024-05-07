import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="bg-blue-50 w-screen h-screen flex justify-center flex-col items-center">
      <Link to={"/"}>
        <div className="w-[200px] mb-4">
          <img src="images/logo.png" alt="" className="w-full h-full" />
        </div>
      </Link>
      <form className="max-w-[400px] relative space-y-1 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 mx-4 md:mx-0">
        <h1 className="text-xl text-center text-[#01649b] font-medium mb-4 lg:text-2xl">
          Login to Your Account
        </h1>

        <div className="">
          <label className=""> Username or Email</label>
          <input
            type="text"
            placeholder=""
            className="mt-2 h-10 w-full placeholder:bg-white border border-gray-800 rounded-lg bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>

        <div>
          <label className=""> Password </label>
          <input
            type="password"
            placeholder=""
            className="mt-2 h-12 w-full placeholder:bg-white border border-gray-800 rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>

        <div>
          <button
            type="button"
            className="mt-3 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
