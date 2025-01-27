// import { useState } from "react";

// const FundWallet = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       {/* Fund Wallet Button */}
//       <button
//         className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
//         onClick={handleOpenModal}
//       >
//         Fund Wallet
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
//           {/* Modal Card */}
//           <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Fund wallet via</h2>
//               <button
//                 className="text-gray-400 hover:text-gray-200"
//                 onClick={handleCloseModal}
//               >
//                 &times;
//               </button>
//             </div>

//             {/* Options */}
//             <div className="space-y-4">
//               {/* Bank Transfer Option */}
//               <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-md hover:bg-gray-600 cursor-pointer">
//                 <div className="bg-gray-500 p-2 rounded-full">
//                   <span role="img" aria-label="Bank">
//                     🏦
//                   </span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Bank transfer</h3>
//                   <p className="text-sm text-gray-400">
//                     Fund your wallet by sending money to your unique NGN
//                     account
//                   </p>
//                 </div>
//               </div>

//               {/* Debit/Credit Card Option */}
//               <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-md hover:bg-gray-600 cursor-pointer">
//                 <div className="bg-gray-500 p-2 rounded-full">
//                   <span role="img" aria-label="Card">
//                     💳
//                   </span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Debit/credit card</h3>
//                   <p className="text-sm text-gray-400">
//                     Fund your wallet by sending money to your unique NGN
//                     account
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FundWallet;
