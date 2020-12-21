import React from "react";

const FeaturesImage = () => {
  return (
    <div className="relative bg-white dark:bg-gray-800 p-4">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2 md:pl-20">
          <h4 className="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
            Manage everything
          </h4>
          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <i className="fas fa-flag-checkered h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900 dark:text-white font-bold">
                    One-look dashboard
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    Know everything about your business in a single glance with
                    your new dashboard.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <i className="fab fa-html5 h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900 dark:text-white font-bold">
                    Orders, managed
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    All your orders in one place so you can manage your
                    delivery, collection, asap and pre-orders in one place.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <i className="fab fa-intercom h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900 dark:text-white font-bold">
                    Email &amp; SMS Notifications
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    Never miss a new order with notifications via your
                    dashboard, by sound, and to your email and phone.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
          <img
            src="/images/object/8.jpg"
            alt="illustration"
            className="relative mx-auto shadow-lg rounded w-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturesImage;
