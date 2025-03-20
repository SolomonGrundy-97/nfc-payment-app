import { useState } from "react";
import { Link } from "react-router-dom";

const WithdrawWallet = () => {
  const [amount, setAmount] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure only numbers are entered
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  };

  const handleWithdrawWallet = async () => {
    if (!amount) return alert("Please enter an amount!");

    try {
      const response = await fetch("https://api.example.com/fund-wallet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseFloat(amount) }),
      });

      if (!response.ok) throw new Error("Failed to withdraw from wallet");

      alert("Wallet withdrawal successfully!");
      setAmount(""); // Clear input
    } catch (error) {
      console.error(error);
      alert("Error withdrawing from wallet. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen fixed inset-0 z-50 backdrop-blur-sm bg-linearGradient_2 bg-opacity-50 p-2">
      <div className="w-auto p-8 rounded-2xl bg-nfcThickBlack text-nfcWhite shadow-sm shadow-slate-50 relative">
        {/* Title */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-lg font-bold">Enter amount</h2>
          <Link to="/dashboard">
            <button className="text-gray-300 hover:text-nfcWhite">✕</button>
          </Link>
        </div>

        {/* Amount Input with Bigger $ Symbol */}
        <div className="mt-6 flex items-center border-b border-gray-600 pb-2">
          <span className=" flex justify-center text-center text-4xl font-bold text-nfcWhite mr-8">
            $
          </span>
          <input
            type="text"
            value={amount}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-2xl text-white placeholder-gray-500"
            placeholder=""
          />
        </div>

        {/* Fund Button */}
        <button
          onClick={handleWithdrawWallet}
          className="mt-14 w-full bg-nfcBlue hover:bg-blue-600 text-nfcWhite py-3 rounded-full text-sm font-semibold"
        >
          Withdraw to bank
        </button>
      </div>
    </div>
  );
};

export default WithdrawWallet;
