import React from "react";

const FeaturesImage = () => {
  return (
    <div className="relative mt-12 sm:mt-16 lg:mt-24">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2 md:pl-20">
          <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9">
            Manage everything
          </h4>
          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                    One-look dashboard
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
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
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                    Orders, managed
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
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
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900 font-bold">
                    Email &amp; SMS Notifications
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Never miss a new order with notifications via your
                    dashboard, by sound, and to your email and phone.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
          <svg
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
            className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
          >
            <defs>
              <pattern
                id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  fill="currentColor"
                  className="text-gray-200"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
            ></rect>
          </svg>
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
