//import React from "react";
import Logo from "../assets/logo/logo1.png";

const EmailVerification = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-nfcThickBlack text-nfcWhite">
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

          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-nfcWhite">Email Verification</h1>
            <p className="text-nfcDeemGray mt-2">
              A verification link and code has been sent to your email. Follow
              the link or input the code.
            </p>
          </div>

          {/* Verification Inputs */}
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-2xl rounded-lg bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
              aria-label="Verification Code Digit 1"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-2xl rounded-lg bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
              aria-label="Verification Code Digit 2"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-2xl rounded-lg bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
              aria-label="Verification Code Digit 3"
            />
            <span className="text-3xl text-nfcDeemGray text-center">-</span>
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-2xl rounded-lg bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
              aria-label="Verification Code Digit 4"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-2xl rounded-lg bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
              aria-label="Verification Code Digit 5"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-2xl rounded-lg bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
              aria-label="Verification Code Digit 6"
            />
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full bg-nfcBlue hover:bg-blue-600 text-nfcWhite py-3 rounded-full transition"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
