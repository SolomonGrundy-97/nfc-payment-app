// import { useState } from "react";
// import Logo from "../assets/logo/logo1.png";
// import { FcGoogle } from "react-icons/fc";
// import { AiOutlineEyeInvisible } from "react-icons/ai";
// import { BsEye } from "react-icons/bs";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex flex-col-reverse sm:flex-row bg-nfcThickBlack">
//       {/* Image Section */}
//       <div className="hidden sm:flex sm:w-1/2 items-center justify-center bg_image"></div>

//       {/* Form Section */}
//       <div className="flex w-full sm:w-1/2 items-center justify-center text-nfcWhite relative">
//         <form className="w-4/5 max-w-md space-y-6 pb-5 pt-5 relative z-10">
//         <div className="absolute radial_gradient_style"></div>
//           {/* Logo */}
//           <div className="flex justify-center">
//             <img src={Logo} alt="Logo" className="w-20 h-20" />
//           </div>

//           <h1 className="text-3xl font-bold text-center">
//             Welcome to Abovepay
//           </h1>
//           <p className="text-center text-nfcDeemGray">
//             Get started with Abovepay
//           </p>

//           {/* Input Fields */}
//           <div>
//             <label
//               htmlFor="first-name"
//               className="block text-sm mb-2 text-nfcWhite"
//             >
//               First name
//             </label>
//             <input
//               type="text"
//               id="first-name"
//               placeholder="first name"
//               className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="last-name"
//               className="block text-sm mb-2 text-nfcWhite"
//             >
//               Last name
//             </label>
//             <input
//               type="text"
//               id="last-name"
//               placeholder="last name"
//               className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm mb-2 text-nfcWhite">
//               Email address
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="name@email.com"
//               className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus:ring-nfcDeemGray focus:outline-none"
//             />
//           </div>

//           <div>
//             <label htmlFor="phone" className="block text-sm mb-2 text-nfcWhite">
//               Phone number
//             </label>
//             <PhoneInput
//               country="ng"
//               enableSearch={false} // Enable search for countries?
//               inputStyle={{
//                 marginLeft: "4.5rem",
//                 width: "81%",
//                 padding: "1.5rem",
//                 borderTopRightRadius: "25px",
//                 borderBottomRightRadius: "25px",
//                 backgroundColor: "#212120",
//                 border: "1px solid #999999",
//                 color: '#FFFFFF',
//                 display: 'block',
//               }}
//               buttonStyle={{
//                 backgroundColor: '#212120',
//                 border: "1px solid #999999",
//                 paddingRight: "8px",
//                  borderTopLeftRadius: "25px",
//                  borderBottomLeftRadius: "25px",
//                  padding: "1.5rem",
//                  display: 'block',
//               }}
//               dropdownStyle={{
//                 backgroundColor: "#7FACEA",
//                 color: "#121212",
//               }}
//               placeholder="Input phone number"
//               inputClass="text-nfcWhite focus:ring-nfcDeemGray focus:outline-none"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="create password"
//               className="block text-sm mb-2 text-nfcWhite"
//             >
//               Create password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="create password"
//                 placeholder="Create password"
//                 className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus:ring-nfcDeemGray focus:outline-none"
//               />
//               <span
//                 className="absolute inset-y-0 right-4 flex items-center text-nfcDeemGray cursor-pointer"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? (
//                   <AiOutlineEyeInvisible size={20} />
//                 ) : (
//                   <BsEye size={20} />
//                 )}
//               </span>
//             </div>
//           </div>

//           {/* Buttons */}
//           <button
//             type="submit"
//             className="w-full bg-nfcBlue hover:bg-blue-600 text-nfcWhite py-3 rounded-full transition"
//           >
//             Continue
//           </button>

//           <span className="flex w-full py-3 items-center justify-center text-nfcWhite hover:cursor-pointer transition">
//             <span className="mr-2">
//               <FcGoogle size={20} />
//             </span>
//             <span className="hover:text-nfcMilkGray">Sign up with Google</span>
//           </span>

//           <p className="text-center text-nfcDeemGray text-sm">
//             By signing up, you agree to our
//             <a
//               href="#"
//               className="text-nfcWhite ml-1 cursor-pointer hover:underline"
//             >
//               Terms of service
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




import { useState } from "react";
import Logo from "../assets/logo/logo1.png";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row bg-nfcThickBlack">
      {/* Image Section */}
      <div className="hidden sm:flex sm:w-1/2 items-center justify-center bg_image"></div>

      {/* Form Section */}
      <div className="relative flex w-full sm:w-1/2 items-center justify-center text-nfcWhite">
        {/* Gradient Background */}
        <div className="absolute -top-20 w-80 h-80 rounded-full bg-gradient-to-r from-nfcThickBlack via-linearGradient_2 to-nfcMilkGray blur-3xl opacity-60 z-0"></div>

        <form className="relative z-10 w-4/5 max-w-md space-y-6 pb-5 pt-5">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="w-20 h-20" />
          </div>

          <h1 className="text-3xl font-bold text-center">
            Welcome to Abovepay
          </h1>
          <p className="text-center text-nfcDeemGray">
            Get started with Abovepay
          </p>

          {/* Input Fields */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm mb-2 text-nfcWhite"
            >
              First name
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="first name"
              className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm mb-2 text-nfcWhite"
            >
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="last name"
              className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus: focus:ring-nfcDeemGray focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-nfcWhite">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              className="w-full p-3 rounded-full bg-nfcLightBlack border border-nfcDeemGray focus:ring-nfcDeemGray focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm mb-2 text-nfcWhite">
              Phone number
            </label>
            <PhoneInput
              country="ng"
              enableSearch={false}
              inputStyle={{
                marginLeft: "4.5rem",
                width: "81%",
                padding: "1.5rem",
                borderTopRightRadius: "25px",
                borderBottomRightRadius: "25px",
                backgroundColor: "#212120",
                border: "1px solid #999999",
                color: "#FFFFFF",
                display: "block",
              }}
              buttonStyle={{
                backgroundColor: "#212120",
                border: "1px solid #999999",
                paddingRight: "8px",
                borderTopLeftRadius: "25px",
                borderBottomLeftRadius: "25px",
                padding: "1.5rem",
                display: "block",
              }}
              dropdownStyle={{
                backgroundColor: "#7FACEA",
                color: "#121212",
              }}
              placeholder="Input phone number"
              inputClass="text-nfcWhite focus:ring-nfcDeemGray focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="create password"
              className="block text-sm mb-2 text-nfcWhite"
            >
              Create password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="create password"
                placeholder="Create password"
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

          {/* Buttons */}
          <Link to="/dashboard">
          <button
            type="submit"
            className="w-full bg-nfcBlue hover:bg-blue-600 text-nfcWhite py-3 rounded-full transition mt-8"
          >
              Continue
          </button>
          </Link>
  
          <span className="flex w-full py-3 items-center justify-center text-nfcWhite hover:cursor-pointer transition">
            <span className="mr-2">
              <FcGoogle size={20} />
            </span>
            <span className="hover:text-nfcMilkGray">Sign up with Google</span>
          </span>

          <p className="text-center text-nfcDeemGray text-sm">
            By signing up, you agree to our
            <a
              href="#"
              className="text-nfcWhite ml-1 cursor-pointer hover:underline"
            >
              Terms of service
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
