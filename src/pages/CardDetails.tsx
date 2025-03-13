import { useState } from "react";
import { Link } from "react-router-dom";

const CardDetailsForm = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    bankName: "",
    accountName: "",
    cardNumber: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.example.com/card-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save card details");

      alert("Card details saved successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to save card details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-nfcThickBlack text-nfcWhite px-4">
      <div className="w-full max-w-lg bg-nfcThickBlack p-6">
        <h2 className="text-center text-nfcWhite text-2xl font-semibold mb-12">
          Card details
        </h2>

        {/* Back Button */}
        <Link to="/paymentmethod">
          <button className="flex items-center text-gray-400 hover:text-nfcWhite mb-6">
            ← Back
          </button>
        </Link>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Account Number */}
          <div>
            <label className="block text-nfcWhite mb-1">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Enter account number"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              required
            />
          </div>
          <br />

          {/* Bank Name */}
          <div>
            <label className="block text-nfcWhite mb-1">Bank Name</label>
            <select
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              required
            >
              <option value="" className="text-xs">
                Select bank
              </option>
              <option value="Bank A" className="text-xs">
                Bank A
              </option>
              <option value="Bank B" className="text-xs">
                Bank B
              </option>
              <option value="Bank C" className="text-xs">
                Bank C
              </option>
            </select>
          </div>
          <br />

          {/* Account Name */}
          <div>
            <label className="block text-nfcWhite mb-1">Account Name</label>
            <input
              type="text"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
              placeholder="Enter account name"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              required
            />
          </div>
          <br />

          {/* Card Number */}
          <div>
            <label className="block text-nfcWhite mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Enter card number"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              required
            />
          </div>

          {/* Submit Button */}
          <br />
          <br />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-nfcBlue hover:bg-blue-600 text-nfcWhite py-1 rounded-full transition font-semibold flex items-center justify-center"
          >
            {loading ? "Saving..." : "Save changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardDetailsForm;
