// import { useState, useEffect } from "react";
// import MRIcon from "../assets/icons/Avatar.png";
// import LogoutIcon from "../assets/icons/log-out-01.png";

// const AccountProfileForm = () => {
//   const [user, setUser] = useState({
//     name: "Mike Ross",
//     email: "mike.ross@example.com",
//   });

//   useEffect(() => {
//     // Fetch user details from the backend
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("https://api.example.com/user");
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-nfcThickBlack text-nfcWhite">
//       <div className="w-full max-w-md p-6 rounded-lg bg-nfcThickBlack">
//         {/* Profile Section */}
//         <div className="text-center">
//           <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto  mb-6 flex items-center justify-center text-xl font-bold">
//             <img src={MRIcon} alt="user profile icon" className="w-20 h-20 " />
//           </div>
//           <h2 className="text-xl font-semibold mt-2">{user.name}</h2>
//           <button className="mt-4 mb-6 px-6 py-2 bg-blue-600 text-nfcWhite rounded-full hover:bg-blue-700">
//             Edit Profile
//           </button>
//         </div>

//         {/* Account Settings */}
//         <div className="mt-6 space-y-3">
//           <h3 className="text-nfcWhite text-xs">ACCOUNT SETTINGS</h3>
//           <div className="bg-nfcLightBlack p-4 rounded-lg flex justify-between items-center cursor-pointer">
//             <span>Payment Method</span>{" "}
//             {/* add a routing link to the payment method page... */}
//             <span>&gt;</span>
//           </div>

//           {/* Security */}
//           <h3 className="text-nfcWhite text-xs">SECURITY</h3>
//           <div className="bg-nfcLightBlack p-4 rounded-lg flex justify-between items-center cursor-pointer">
//             <span>Change Password</span>
//             <span>&gt;</span>
//           </div>

//           {/* payment settings */}
//           <h3 className="text-nfcWhite text-xs">PAYMENT SETTINGS</h3>
//           <div className="bg-nfcLightBlack p-4 rounded-lg flex justify-between items-center cursor-pointer">
//             <span>Transaction Pin</span>
//             <span>&gt;</span>
//           </div>

//           {/* Notifications */}
//           <h3 className="text-nfcWhite text-xs">NOTIFICATIONS</h3>
//           <div className="bg-nfcLightBlack p-4 rounded-lg flex justify-between items-center">
//             <span>Receive notifications via email</span>
//             <input type="checkbox" className="w-5 h-5 accent-blue-500" />
//           </div>

//           {/* Help & Support */}
//           <h3 className="text-nfcWhite text-xs">HELP & SUPPORT</h3>
//           <div className="bg-nfcLightBlack rounded-full">
//             <div className="bg-nfcLightBlack p-4 rounded-lg flex justify-between items-center cursor-pointer">
//               <span>Contact Us</span>
//               <span>&gt;</span>
//             </div>
//             <div className="bg-nfcLightBlack p-4 rounded-lg flex justify-between items-center cursor-pointer">
//               <span>FAQ's</span>
//               <span>&gt;</span>
//             </div>
//           </div>

//           {/* Logout */}
//           <button className="mt-8 w-full py-2 text-red-500 hover:text-red-600 inline-flex justify-center gap-1">
//             <span className="mt-1">
//               <img src={LogoutIcon} />
//             </span>
//             <span>Log out</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountProfileForm;

// =================================================================================================================

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MRIcon from "../assets/icons/Avatar.png";
import LogoutIcon from "../assets/icons/log-out-01.png";

const AccountProfileForm = () => {
  const [user, setUser] = useState({
    name: "Mike Ross",
    email: "mike.ross@example.com",
  });

  // Notification toggle...
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    // Call backend API to update user preference
    console.log("Notifications:", !isEnabled ? "Enabled" : "Disabled");
  };

  useEffect(() => {
    // Fetch user details from the backend
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://api.example.com/user");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-nfcThickBlack text-nfcWhite">
      <div className="w-full max-w-md p-6 rounded-lg bg-nfcThickBlack">
        <h6 className="text-center text-2xl font-semibold mb-12">Account</h6>

        {/* Profile Section */}
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-bold">
            <img src={MRIcon} alt="user profile icon" className="w-20 h-20 " />
          </div>
          <h2 className="text-xl font-semibold mt-2">{user.name}</h2>
          <Link to="/editprofile">
            <button className="mt-4 mb-6 px-6 py-2 bg-nfcBlue text-nfcWhite rounded-full hover:bg-blue-600">
              Edit Profile
            </button>
          </Link>
        </div>

        {/* Account Settings */}
        <div className="mt-6 space-y-3">
          <h3 className="text-nfcWhite text-xs">ACCOUNT SETTINGS</h3>
          <Link
            to="/paymentmethod"
            className="bg-nfcLightBlack p-4 rounded-xl flex justify-between items-center cursor-pointer"
          >
            <span>Payment Method</span>
            <span>&gt;</span>
          </Link>
          <br />

          {/* Security */}
          <h3 className="text-nfcWhite text-xs">SECURITY</h3>
          <div className="bg-nfcLightBlack p-4 rounded-xl flex justify-between items-center cursor-pointer">
            <span>Change Password</span>
            <span>&gt;</span>
          </div>
          <br />

          {/* Payment settings */}
          <h3 className="text-nfcWhite text-xs">PAYMENT SETTINGS</h3>
          <div className="bg-nfcLightBlack p-4 rounded-xl flex justify-between items-center cursor-pointer">
            <span>Transaction Pin</span>
            <span>&gt;</span>
          </div>
          <br />

          {/* Notifications */}
          <h3 className="text-nfcWhite text-xs">NOTIFICATIONS</h3>
          <div className="bg-nfcLightBlack p-4 rounded-xl flex justify-between items-center">
            <span>Receive notifications via Email</span>
            {/* Toggle Switch */}
            <button
              onClick={toggleSwitch}
              className={`relative w-12 h-6 rounded-full transition-all ${
                isEnabled ? "bg-nfcBlue" : "bg-gray-500"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-nfcWhite rounded-full transition-all ${
                  isEnabled ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>
          <br />

          {/* Help & Support */}
          <h3 className="text-nfcWhite text-xs">HELP & SUPPORT</h3>
          <div className="bg-nfcLightBlack rounded-full">
            <div className="bg-nfcLightBlack p-4 flex rounded-xl justify-between items-center cursor-pointer">
              <span>Contact Us</span>
              <span>&gt;</span>
            </div>
            <div className="bg-nfcLightBlack p-4 flex rounded-xl justify-between items-center cursor-pointer">
              <span>FAQ's</span>
              <span>&gt;</span>
            </div>
          </div>
          <br />

          {/* Logout */}
          <button className="mt-10 w-full py-2 text-red-500 hover:text-red-600 inline-flex justify-center gap-1">
            <span className="mt-1">
              <img src={LogoutIcon} alt="logout icon" />
            </span>
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountProfileForm;
