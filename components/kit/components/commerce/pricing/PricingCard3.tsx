import React, { FC } from "react";

const PricingCard3: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
      <p className="text-black dark:text-white text-3xl font-bold">Essential</p>
      <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
        For the basics
      </p>
      <p className="text-black dark:text-white  text-3xl font-bold">$99</p>
      <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
        Per agent per month
      </p>

      <button
        type="button"
        className="w-56 m-auto px-3 py-3 text-xs text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
      >
        Request demo
      </button>

      <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
        <li className="mb-3">
          <i className="fas fa-dot-circle mr-4" /> All illimited link
        </li>
        <li className="mb-3">
          <i className="fas fa-dot-circle mr-4" /> Own analitycs plateform link
        </li>
        <li className="mb-3">
          <i className="fas fa-dot-circle mr-4" /> 24/24 support link
        </li>
      </ul>
      <span className="w-56 block bg-gray-100 h-1 rounded-lg my-2"></span>
      <ul className="text-sm text-black dark:text-white w-full mt-6 mb-6">
        <li className="mb-3">
          <i className="fas fa-plus text-green-500 mr-4" /> Everything off
          <a href="#" className="text-red-500 font-semibold">
            free plan
          </a>
        </li>
        <li className="mb-3">
          <i className="fas fa-plus mr-4 text-green-500" /> Best ranking
        </li>
        <li className="mb-3">
          <i className="fas fa-plus mr-4 text-green-500" /> Prenium svg
        </li>
      </ul>
    </div>
  );
};
export default PricingCard3;
