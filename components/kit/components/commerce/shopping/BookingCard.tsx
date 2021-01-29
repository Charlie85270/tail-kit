import React, { FC } from "react";

const BookingCard: FC = () => {
  return (
    <div className="lg:flex  max-w-2xl mx-auto overflow-hidden rounded-lg dark:text-gray-50 dark:bg-gray-900 shadow-lg">
      <img
        className="lg:w-1/3 w-full lg:h-auto h-48  object-cover"
        src="https://images.unsplash.com/photo-1611608822765-9a15c4aa3f63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
      />

      <div>
        <div className="bg-white dark:bg-gray-900  p-4">
          <h2 className="font-bold text-gray-900 dark:text-gray-50 text-2xl">
            Amsterdam Walking Tour
          </h2>

          <div className="text-gray-500 dark:text-gray-200 py-2">
            Explore popular destinations as well as hidden local favourtes
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 w-full p-4 flex h-full justify-between">
          <div>
            <div className="text-lg py-1 text-gray-500 dark:text-gray-200">
              <span className="font-bold text-black dark:text-white pr-1">
                $17
              </span>{" "}
              per person
              <sup>*</sup>
            </div>
            <div className="text-gray-400 dark:text-gray-100 flex items-center">
              <div className="flex mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="fill-current text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="fill-current text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="fill-current text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="fill-current text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="fill-current text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
              </div>{" "}
              28 reviews
            </div>
            <div className="text-gray-400 dark:text-gray-200 py-6">
              Price may very depending on selected date
            </div>
          </div>

          <div>
            <button className="bg-blue-700  dark:bg-blue-100 dark:text-gray-900 text-white px-4 py-2 focus:bg-blue-600 focus:border rounded shadow-lg ">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
