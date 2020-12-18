import React from "react";

const CookieAlert = () => {
  return (
    <div className="bg-pink-600 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-pink-800 dark:bg-black">
              <i className="fas fa-cookie-bite h-6 w-6 text-white"></i>
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">This site use cookie!</span>
              <span className="hidden md:inline">
                We use cookie ! Something not ideal might be happening.
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-pink-600 dark:text-gray-800 bg-white hover:bg-pink-50"
            >
              Learn more
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <i className="fas fa-times h-6 w-6 text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieAlert;
