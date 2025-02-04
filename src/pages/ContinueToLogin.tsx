import { useState } from "react";
import Logo from "../assets/logo/logo1.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-nfcThickBlack">
      {/* Image Section */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg_image"></div>

      {/* Form Section */}
      <div className="relative flex w-full lg:w-1/2 items-center justify-center text-nfcWhite">
      {/* Gradient Background */}
      <div className="absolute -top-20 w-80 h-80 rounded-full bg-gradient-to-r from-nfcThickBlack via-linearGradient_2 to-nfcMilkGray blur-3xl opacity-60 z-0"></div>

        <form className="w-4/5 max-w-lg space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="w-20 h-20" />
          </div>
          <h1 className="text-3xl font-bold text-center text-nfcWhite">Continue to Abovepay</h1>
          <p className="text-nfcDeemGray text-center mt-2">
              To continue to Abovepay, enter your password.
            </p>
          {/* Input Fields */}
          <div>
            <label htmlFor="email" className="block text-sm text-nfcWhite mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-nfcWhite mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="password"
                className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus:ring-nfcDeemGray focus:outline-none"
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center text-nfcDeemGray cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <BsEye size={20} />
                )}
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <Link
            to="/forgotpassword"
            className="flex justify-end text-sm text-nfcWhite hover:underline cursor-pointer"
          >
            Forgot password
          </Link>

          {/* Buttons */}
          <Link to="/dashboard">
          <button
            type="submit"
            className="w-full bg-nfcBlue hover:bg-blue-600 text-white py-3 rounded-full transition mt-8"
          >
            Log in
          </button>
          </Link>

          <span className="flex w-full py-3 items-center justify-center text-nfcWhite hover:cursor-pointer transition">
            <span className="mr-2">
              <FcGoogle size={20} />
            </span>
            <span className="hover:text-nfcMilkGray">Sign up with Google</span>
          </span>
          {/* Sign Up Redirect */}
          <p className="text-center text-nfcDeemGray text-sm">
            Don’t have an account yet?{" "}
            <Link
              to="/signup"
              className="text-nfcWhite hover:underline ml-1 cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
