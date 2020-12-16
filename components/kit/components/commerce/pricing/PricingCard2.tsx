import React, { FC } from "react";

const PricingCard2: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl w-64 bg-indigo-500 dark:bg-gray-800 p-4">
      <div className="flex text-white  items-center justify-between">
        <p className="text-4xl font-medium mb-4">Pro</p>
        <p className="text-3xl font-bold flex flex-col">
          $99
          <span className="font-thin text-right text-sm">month</span>
        </p>
      </div>

      <p className="text-white text-md mt-4">Plan include :</p>

      <ul className="text-sm text-white w-full mt-6 mb-6">
        <li className="mb-3">
          <i className="fas fa-check mr-4" /> All illimited link
        </li>
        <li className="mb-3">
          <i className="fas fa-check mr-4" /> Own analitycs plateform link
        </li>
        <li className="mb-3">
          <i className="fas fa-check mr-4" /> 24/24 support link
        </li>
        <li className="mb-3">
          <i className="fas fa-check mr-4" /> Unlimited user
        </li>
        <li className="mb-3 opacity-30">
          <i className="fas fa-times mr-4" /> Best ranking
        </li>
        <li className="mb-3 opacity-30">
          <i className="fas fa-times mr-4" /> Prenium svg
        </li>
        <li className="mb-3 opacity-30">
          <i className="fas fa-times mr-4" />
          My wife
        </li>
      </ul>

      <button
        type="button"
        className="w-full px-3 py-3 text-xs text-sm shadow rounded-lg text-indigo-500 bg-white hover:bg-gray-100 "
      >
        Choose plan
      </button>
    </div>
  );
};
export default PricingCard2;
