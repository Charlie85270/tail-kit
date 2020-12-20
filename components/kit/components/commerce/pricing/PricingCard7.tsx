import React, { FC } from "react";
import Button from "../../elements/buttons/Button";

const PricingCard7: FC = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
        <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
          <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
            Zero Commission
          </h3>
          <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            Start selling online for free with all the features you need to
            launch your local delivery and pick-up service, nothing more. We
            don't charge commission or monthly fees, keep all your margin.
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                What's included
              </h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <i className="fas fa-check-circle h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Unlimited stores
                </p>
              </li>
              <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <i className="fas fa-check-circle h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Instant setup
                </p>
              </li>
              <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <i className="fas fa-check-circle h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Offer local delivery &amp; collection
                </p>
              </li>
              <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <i className="fas fa-check-circle h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  Online payment processing
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 bg-white text-sm dark:bg-gray-800 leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                &amp; What's not
              </h4>
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0">
                  <i className="fas fa-times-circle h-5 w-5 text-red-400" />
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  No Contracts. No monthly, setup, or additional payment
                  processor fees
                </p>
              </li>
              <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                <div className="flex-shrink-0">
                  <div className="flex-shrink-0">
                    <i className="fas fa-times-circle h-5 w-5 text-red-400" />
                  </div>
                </div>
                <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                  No 2-week on-boarding, it takes 20 minutes!
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
          <p className="text-lg leading-6 font-bold text-gray-900">Free</p>
          <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
            <span>$0/mo</span>
          </div>
          <p className="mt-4 text-sm leading-5">
            <span className="block font-medium text-gray-500 dark:text-gray-400">
              Card payments:
            </span>
            <span className=" inline-block font-medium text-gray-500 dark:text-gray-400">
              2.9% + 20p per transaction
            </span>
          </p>
          <div className="mt-6">
            <div className="rounded-md shadow">
              <Button label="Create your store" color="indigo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PricingCard7;
