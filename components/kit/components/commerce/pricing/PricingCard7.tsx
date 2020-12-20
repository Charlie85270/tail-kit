import React, { FC } from "react";
import Button from "../../elements/buttons/Button";

const PricingCard7: FC = () => {
  return (
    <div className="flex flex-col w-11/12 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
        <div className="p-8 text-3xl font-bold text-center">Basic</div>
        <div className="h-1 w-full brand-gradient my-0 py-0"></div>
        <ul className="w-full text-center font-bold">
          <li className="border-b py-4">Track 25 leads</li>
          <li className="border-b py-4">Store 5 documents</li>
          <li className="border-b py-4">Discover 5 emails / month</li>
          <li className="border-b py-4">Kanban board</li>
          <li className="border-b py-4">Tasks &amp; reminders</li>
        </ul>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
        <div className="w-full pt-6 text-4xl font-bold text-center">
          $10
          <span className="text-base">/ per month</span>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://jobhuntbuddy.co/register"
            className="mx-auto lg:mx-0 brand-gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-xs hover:shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
export default PricingCard7;
