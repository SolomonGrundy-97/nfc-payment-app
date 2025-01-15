//import React from "react";
import Logo from "../assets/logo/logo1.png";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-nfcThickBlack">
      {/* Image Section */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg_image"></div>

      {/* Form Section */}
      <div className="relative flex w-full lg:w-1/2 items-center justify-center text-nfcWhite pt-10 pb-10">
      {/* Gradient Background */}
      <div className="absolute -top-20 w-80 h-80 rounded-full bg-gradient-to-r from-nfcThickBlack via-linearGradient_2 to-nfcMilkGray blur-3xl opacity-60 z-0"></div>

        <form className="w-4/5 max-w-lg space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="w-20 h-20" />
          </div>

          <h1 className="text-3xl font-bold text-center">Forgot password</h1>
          <p className="text-center text-nfcDeemGray">
            To reset your password, enter the email you used to register your
            account.
          </p>

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

          <button
            type="submit"
            className="w-full bg-nfcBlue hover:bg-blue-600 text-nfcWhite py-3 rounded-full transition"
          >
            Send email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
