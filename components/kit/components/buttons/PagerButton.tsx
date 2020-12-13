import React, { FC } from "react";
const PagerButton: FC = () => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="w-full px-1 py-1 border-l border-t border-b text-base font-medium rounded-l-xl text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
      >
        1
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border text-base font-medium  text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
      >
        2
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border text-base font-medium  text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
      >
        3
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border text-base font-medium  text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
      >
        4
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border text-base font-medium  text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
      >
        5
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border-t border-b border-r text-base font-medium rounded-r-xl text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
      >
        6
      </button>
    </div>
  );
};
export default PagerButton;
