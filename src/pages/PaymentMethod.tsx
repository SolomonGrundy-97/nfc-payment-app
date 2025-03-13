import { Link } from "react-router-dom";

const PaymentMethod = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-nfcThickBlack text-nfcWhite px-4">
      <div className="w-full max-w-lg bg-nfcThickBlack p-6 mb-16">
        <h2 className="text-center text-nfcWhite text-2xl font-semibold mb-16">
          Payment Method
        </h2>

        {/* Back Button */}
        <Link to="/accountprofile">
          <button className="flex items-center text-gray-400 hover:text-nfcWhite mb-8">
            ← Back
          </button>
        </Link>

        {/* Primary Account */}
        <div className="mb-4">
          <h3 className="text-nfcWhite text-sm mb-2">PRIMARY ACCOUNT</h3>
          <Link to="/bankdetails">
            <button className="w-full p-4 bg-nfcLightBlack text-nfcWhite rounded-xl flex justify-between items-cente transition">
              Add Primary Account
              <span>&gt;</span>
            </button>
          </Link>
        </div>
        <br />

        {/* Debit Card */}
        <div>
          <h3 className="text-nfcWhite text-sm mb-2">DEBIT CARD</h3>
          <Link to="/carddetails">
            <button className="w-full p-4 bg-nfcLightBlack text-nfcWhite rounded-xl flex justify-between items-center transition">
              Add Debit Card
              <span>&gt;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
