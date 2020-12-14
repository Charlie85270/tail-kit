import React, { FC } from "react";
const ShoppingDetailsCard: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl  bg-white w-64 m-auto p-2">
      <img
        src="/images/object/3.png"
        alt="adidas"
        className="w-32 p-4 h-36 m-auto"
      />

      <div className="bg-pink-200 m-3 p-4 rounded-lg">
        <p className="text-white text-xl font-bold ">Adidas</p>
        <p className="text-gray-50 text-xs">Live your dream</p>
        <div className="flex items-center justify-between ">
          <p className="text-white">$98.00</p>
          <button
            type="button"
            className="w-10 h-10 text-base font-medium rounded-full text-white bg-pink-500 hover:bg-pink-700 "
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShoppingDetailsCard;
