import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo1.png";
import BellIcon from "../assets/icons/Frame 29.png";
import MRIcon from "../assets/icons/Avatar.png";
import TransactionCard from "../components/TransactionCard";
import Wallet from "../assets/icons/path2828.png";
import Eye from "../assets/icons/eyeIcon.png";
import BankIcon from "../assets/icons/bank.png";
import TransportIcon from "../assets/icons/Group 9.png";
import UpArrowIcon from "../assets/icons/Group 7.png";
import DownArrowIcon from "../assets/icons/Group 10.png";
import GroceriesIcon from "../assets/icons/Group 8.png";
import RIcon from "../assets/icons/front_icon.png";
import CreditCard from "../assets/icons/credit-card-01.png";
import BankIcon2 from "../assets/icons/bank2.png";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="container items-center text-center mt-10 mb-10 px-5">
          <div className="flex justify-between items-center lg:mx-6 container text-center mb-10">
            <img src={Logo} alt="logo" className="w-15 h-12" />
            <span className="">
              <div className="flex gap-4 lg:mx-6">
                <img src={BellIcon} alt="logo" />
                <img src={MRIcon} alt="logo" />
              </div>
            </span>
          </div>

          {/* Make the gradient background to display only on the top coner of the card... */}
          <div
            className="bg-gradient-to-r from-linearGradient_2 via-linearGradient_2 to-nfcLightBlack text-nfcWhite border border-nfcMilkGray rounded-xl shadow-md p-6
      sm:w-full sm:mx-4 md:w-[500px] lg:w-[500px] md:mx-auto lg:mx-auto"
          >
            {/* NFC Icon */}
            <div className="flex justify-end">
              <img
                src={Wallet}
                alt="atm logo"
                className="w-10 h-6 text-nfcWhite"
              />
            </div>

            <br />
            <br />
            <br />
            <br />

            {/* Wallet Balance */}
            <div className="mt-4">
              <p className="flex justify-start text-sm text-nfcWhite">
                Wallet Balance
              </p>
              <div className="flex items-center gap-2"></div>
            </div>

            {/* Account Number */}
            <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
              <div className="inline-flex justify-center">
                <p className="text-2xl text-nfcWhite font-bold">$180.00</p>
                <img
                  src={Eye}
                  alt="view balance"
                  className="w-4 h-3 mt-3 ml-2 text-gray-400 hover:cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2 border border-gray-400 p-2 rounded-lg">
                <img
                  src={BankIcon}
                  alt="bank icon"
                  className="w-5 h-5 text-gray-400"
                />
                <span className="text-gray-400">*** 342 724</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mt-8">
            <span
              className="bg-nfcLightBlack border border-nfcMilkGray text-center hover:cursor-pointer pl-10 pr-10 pt-3 pb-3 rounded-3xl"
              onClick={handleOpenModal}
            >
              <button className="text-nfcWhite text-center">Fund wallet</button>
            </span>
            <span className="bg-nfcLightBlack border border-nfcMilkGray text-center hover:cursor-pointer pl-11 pr-11 pt-3 pb-3 rounded-3xl">
              <button className="text-nfcWhite text-center">Withdraw</button>
            </span>
          </div>

          <div className="mt-10">
            <div
              className="flex justify-between mb-5 text-nfcWhite items-center border-b border-nfcWhite
      rounded-md p-4 shadow-sm 
      sm:w-full sm:mx-4 
      md:w-[500px] lg:w-[500px] md:mx-auto lg:mx-auto"
            >
              <span className="font-bold">Transactions</span>
              <div className="flex items-center hover:cursor-pointer">
                <Link to="/transactions" className="mr-2">See more</Link>
                <span className="">
                  <img src={RIcon} alt="right icon" />
                </span>
              </div>
            </div>
            {/* Render Transaction Cards */}
            <TransactionCard
              description="Withdraw to bank"
              amount="- $30.00"
              date="12/12/2024"
              icon={UpArrowIcon}
            />
            <TransactionCard
              description="Fund wallet"
              amount="+ $210.00"
              date="12/12/2024"
              icon={DownArrowIcon}
            />
            <TransactionCard
              description="Willo Groceries"
              amount="- $75.00"
              date="12/12/2024"
              icon={GroceriesIcon}
            />
            <TransactionCard
              description="ABC Transport"
              amount="- $30.00"
              date="12/12/2024"
              icon={TransportIcon}
            />
          </div>

          {/* Modal that pop's up when clicked on fundwallet button.*/}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-linearGradient_2 bg-opacity-50">
              {/* Modal Card */}
              <div className="bg-nfcThickBlack text-nfcWhite p-10 mx-2 rounded-2xl shadow-lg w-auto">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-lg font-bold">Fund wallet via</h2>
                  <button
                    className="text-gray-300 hover:text-nfcWhite"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                </div>

                {/* Options */}
                <div className="space-y-8">
                  {/* Bank Transfer Option */}
                  <div className="flex items-center gap-4 p-4 bg-nfcLightBlack border border-nfcMilkGray rounded-xl cursor-pointer">
                    <div className="p-2">
                      <img src={BankIcon2} alt="bank icon" className="w-12" />
                    </div>
                    <div>
                      <h3 className="font-bold text-start text-nfcWhite mb-2">
                        Bank transfer
                      </h3>
                      <p className="text-sm font-semibold text-nfcMilkGray text-start">
                        Fund your wallet by sending money to your unique NGN
                        account
                      </p>
                    </div>
                  </div>

                  {/* Debit/Credit Card Option */}
                  <div className="flex items-center gap-4 p-4 bg-nfcLightBlack border border-nfcMilkGray rounded-xl cursor-pointer">
                    <div className="p-2">
                      <img
                        src={CreditCard}
                        alt="creditcard icon"
                        className="w-12"
                      />
                    </div>
                    <div className="">
                      <h3 className="font-bold text-start text-nfcWhite mb-2">
                        Debit/credit card
                      </h3>
                      <p className="text-sm font-semibold text-nfcMilkGray text-start">
                        Fund your wallet by sending money to your unique NGN
                        account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
