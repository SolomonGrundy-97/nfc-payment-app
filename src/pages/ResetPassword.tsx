import { useState } from "react";
import Logo from "../assets/logo/logo1.png";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-nfcThickBlack text-nfcWhite">
      {/* Image Section */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg_image"></div>

      {/* Form Section */}
      <div className="relative flex w-full lg:w-1/2 items-center text-nfcWhite justify-center">
      {/* Gradient Background */}
      <div className="absolute -top-20 w-80 h-80 rounded-full bg-gradient-to-r from-nfcThickBlack via-linearGradient_2 to-nfcMilkGray blur-3xl opacity-60 z-0"></div>

        <form className="w-4/5 max-w-lg space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="w-20 h-20" />
          </div>
          <h1 className="text-3xl font-bold text-center">Password reset</h1>

          {/* Instruction */}
          <p className="text-center text-nfcDeemGray">
            Reset your password by entering a new password.
          </p>

          {/* Input Fields */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-nfcWhite mb-2"
            >
              Create new password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="new password"
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

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full bg-nfcBlue hover:bg-blue-600 text-nfcWhite py-3 rounded-full transition"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
