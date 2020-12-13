import React, { FC } from "react";
const InformationIconCard: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl w-64 p-4 py-6 bg-white">
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-green-200 rounded-full relative">
          <i className="w-8 h-8 fas fa-balance-scale-right text-green-700 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2" />
        </div>

        <p className="text-gray-800 text-xl font-medium mb-4 mt-4">Justice</p>
        <p className="text-gray-400 text-center text-xs px-2">
          I therefore look forward to further developments in this area so that
          we can ease the path in bringing these reckless individuals to
          justice.
        </p>
      </div>
    </div>
  );
};
export default InformationIconCard;
