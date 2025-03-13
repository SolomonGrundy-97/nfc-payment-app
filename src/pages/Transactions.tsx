import { Link } from "react-router-dom";
import TransactionCard from "../components/TransactionCard";
import TransportIcon from "../assets/icons/Group 9.png";
import UpArrowIcon from "../assets/icons/Group 7.png";
import DownArrowIcon from "../assets/icons/Group 10.png";
import GroceriesIcon from "../assets/icons/Group 8.png";
import Logo from "../assets/logo/logo1.png";
import BellIcon from "../assets/icons/Frame 29.png";
import MRIcon from "../assets/icons/Avatar.png";

const Transactions = () => {
  return (
    <>
      <h1 className="text-center text-nfcWhite mt-10 font-bold">Tansactions</h1>
      <div className="flex items-center justify-center lg:mx-6 px-5">
        <div className="flex justify-between items-center container text-center mb-10">
          <img src={Logo} alt="logo" className="w-15 h-12" />
          <span className="">
            <div className="flex gap-4 lg:mx-6">
              <img src={BellIcon} alt="logo" />
              <Link to="/accountprofile">
                <img src={MRIcon} alt="logo" />
              </Link>
            </div>
          </span>
        </div>
      </div>

      {/* Select-options */}
      <div className="flex mb-10 justify-center">
        <div className="pl-4">
          <select
            name=""
            id=""
            className="mr-4 py-1 pl-6 pr-8 text-start bg-nfcThickBlack border border-linearGradient_2 text-nfcMilkGray hover:border-nfcMilkGray rounded-lg"
          >
            <option value="" className="text-xs">
              All Categories{" "}
            </option>
            <option value="" className="text-xs">
              1
            </option>
            <option value="" className="text-xs">
              2
            </option>
            <option value="" className="text-xs">
              3
            </option>
          </select>
          <select
            name=""
            id=""
            className="mr-4 py-1 pl-6 pr-8 text-start bg-nfcThickBlack border border-linearGradient_2 text-nfcMilkGray hover:border-nfcMilkGray rounded-lg"
          >
            <option value="" className="text-xs">
              All Status
            </option>
            <option value="" className="text-xs">
              1
            </option>
            <option value="" className="text-xs">
              2
            </option>
            <option value="" className="text-xs">
              3
            </option>
          </select>
          <select
            name=""
            id=""
            className="px-4 py-1 text-start bg-nfcThickBlack border border-linearGradient_2 text-nfcMilkGray hover:border-nfcMilkGray rounded-lg mt-4"
          >
            <option value="" className="text-xs">
              Dec
            </option>
            <option value="" className="text-xs">
              1
            </option>
            <option value="" className="text-xs">
              2
            </option>
            <option value="" className="text-xs">
              3
            </option>
          </select>
        </div>
      </div>

      {/* Render Transaction Cards */}
      <div className="">
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
    </>
  );
};

export default Transactions;
