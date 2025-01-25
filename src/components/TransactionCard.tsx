import React from "react";

interface TransactionCardProps {
  description: string;
  amount: string;
  date: string;
  icon: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  description,
  amount,
  date,
  icon,
}) => {
  return (
    <div
      className="flex justify-between items-center border-b border-linearGradient_2
      rounded-md p-4 shadow-sm 
      sm:w-full sm:mx-4 
      md:w-[500px] lg:w-[500px] md:mx-auto lg:mx-auto"
    >

      <div className="flex items-center gap-3">
        {/* Transaction Icon */}
        <img src={icon} alt={description} className="w-8 h-8" />
        <div>
          <p className="text-nfcWhite text-sm font-semibold">{description}</p>
          <p className="text-gray-400 text-xs">{date}</p>
        </div>
      </div>
      <p
        className={`font-bold ${
          amount.startsWith("-") ? "text-nfcWhite" : "text-green-500"
        }`}
      >
        {amount}
      </p>
    </div>
  );
};

export default TransactionCard;


