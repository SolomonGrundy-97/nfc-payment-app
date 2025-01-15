//import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo1.png";
import { FcGoogle } from "react-icons/fc";
import RightIcon from "../assets/icons/login_right_icon.png";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-nfcThickBlack">
      {/* Image Section */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg_image"></div>

      {/* Form Section */}
      <div className=" relative flex w-full lg:w-1/2 items-center justify-center text-nfcWhite">
      {/* Gradient Background */}
      <div className="absolute -top-20 w-80 h-80 rounded-full bg-gradient-to-r from-nfcThickBlack via-linearGradient_2 to-nfcMilkGray blur-3xl opacity-60 z-0"></div>

        <form className="w-4/5 max-w-lg space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="w-20 h-20" />
          </div>

          <h1 className="text-3xl font-bold text-center text-nfcWhite">Login</h1>
          <p className="text-center text-nfcDeemGray">
            Welcome back! You can enter your email or login with your Google
            account.
          </p>

          <div className="relative">
            <label htmlFor="email" className="block text-sm mb-2 text-nfcWhite">
              Email address
            </label>
            <div className="">
              <input
                type="email"
                id="email"
                placeholder="name@email.com"
                className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-nfcDeemGray cursor-pointer">
                <img
                  src={RightIcon}
                  alt="right icon"
                  className="text-center mt-7"
                />
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-nfcBlue hover:bg-blue-600 text-nfcWhite py-3 rounded-full transition"
          >
            Continue
          </button>

          <span className="flex w-full py-3 items-center justify-center text-nfcWhite hover:cursor-pointer transition">
            <span className="mr-2">
              <FcGoogle size={20} />
            </span>
            <span className="hover:text-nfcMilkGray">Sign in with Google</span>
          </span>

          <p className="text-center text-nfcDeemGray text-sm">
            Don’t have an account yet?{" "}
            <Link to="/signup" className="text-nfcWhite hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
