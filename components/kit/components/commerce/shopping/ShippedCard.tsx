import React, { FC } from "react";
const ShippedCard: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl p-4 bg-gray-900 w-64 m-auto relative">
      <div className="w-full h-full text-center">
        <div className="flex h-full flex-col justify-between">
          <i className="mt-4 fas fa-shipping-fast w-10 h-10 m-auto text-white" />
          <p className="absolute text-sm italic text-white top-2 right-2">
            by express
          </p>
          <p className="text-white text-lg mt-4">Package delivered</p>
          <p className="text-gray-50 text-xs font-thin py-2 px-6">
            Your package was delivered in 1 day and 4 hours by our postal
            partner
          </p>
        </div>
      </div>
    </div>
  );
};
export default ShippedCard;
