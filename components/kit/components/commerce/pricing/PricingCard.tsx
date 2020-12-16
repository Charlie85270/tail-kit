import React, { FC } from "react";
import Button from "../../elements/buttons/Button";

const PricingCard: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
      <p className="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
        Entreprise
      </p>
      <p className="text-gray-900 dark:text-white text-3xl font-bold">
        $199 <span className="text-gray-300 text-sm">/ month </span>
      </p>
      <p className="text-gray-600 dark:text-gray-100  text-xs mt-4">
        For most businesses that want to optimize web queries.
      </p>

      <ul className="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
        <li className="mb-3">
          <i className="fas fa-check-circle text-green-400 mr-4" /> All
          illimited link
        </li>
        <li className="mb-3">
          <i className="fas fa-check-circle text-green-400 mr-4" /> Own
          analitycs plateform link
        </li>
        <li className="mb-3">
          <i className="fas fa-check-circle text-green-400 mr-4" /> 24/24
          support link
        </li>
        <li className="mb-3">
          <i className="fas fa-check-circle text-green-400 mr-4" /> Unlimited
          user
        </li>
        <li className="mb-3">
          <i className="fas fa-check-circle text-green-400 mr-4" /> Best ranking
        </li>
        <li className="mb-3 text-gray-200">
          <i className="fas fa-times-circle text-gray-200 mr-4" /> Prenium svg
        </li>
        <li className="mb-3 text-gray-200">
          <i className="fas fa-times-circle text-gray-200 mr-4" /> My wife
        </li>
      </ul>

      <Button label="Choose plan" color="indigo" />
    </div>
  );
};
export default PricingCard;
