import { useState } from "react";

const NewCard = ({ onClose }: { onClose: () => void }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#18181b] text-white p-6 rounded-2xl w-[400px] shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Fund wallet via bank</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <p className="text-sm text-gray-300 mt-3 mb-10">
          Use account informations with your legal names
        </p>
        <div className="mt-4 space-y-8">
          <input
            type="text"
            placeholder="First legal name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 bg-nfcLightBlack border border-nfcMilkGray text-nfcWhite rounded-3xl outline-none focus:ring-2 focus:ring-nfcMilkGray"
          />
          <input
            type="text"
            placeholder="Second legal name"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            className="w-full px-4 py-2 bg-nfcLightBlack border border-nfcMilkGray text-nfcWhite rounded-3xl outline-none focus:ring-2 focus:ring-nfcMilkGray"
          />
          <select
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="w-full px-4 py-2 bg-nfcLightBlack border border-nfcMilkGray text-gray-400 rounded-3xl outline-none focus:ring-2 focus:ring-nfcMilkGray"
          >
            <option value="" className="text-nfcWhite text-xs">
              Bank name
            </option>
            <option value="bank1" className="text-nfcWhite text-xs">
              Bank 1
            </option>
            <option value="bank2" className="text-nfcWhite text-xs">
              Bank 2
            </option>
            <option value="bank3" className="text-nfcWhite text-xs">
              Bank 3
            </option>
          </select>
          <input
            type="text"
            placeholder="Account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full px-4 py-2 bg-nfcLightBlack border border-nfcMilkGray text-nfcWhite rounded-3xl outline-none focus:ring-2 focus:ring-nfcMilkGray"
          />
          <input
            type="text"
            placeholder="Account name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="w-full px-4 py-2 bg-nfcLightBlack border border-nfcMilkGray text-nfcWhite rounded-3xl outline-none focus:ring-2 focus:ring-nfcMilkGray"
          />
        </div>
        <button className="mt-14 w-full bg-blue-500 hover:bg-nfcBlue text-sm text-nfcWhite py-3 px-4 rounded-full">
          Add bank
        </button>
      </div>
    </div>
  );
};

export default NewCard;
