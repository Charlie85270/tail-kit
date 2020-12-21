import React, { FC } from "react";
const PagerButton: FC = () => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="w-full px-1 py-1 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
      >
        <i className="fas fa-angle-left"></i>
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 px-4 py-2"
      >
        1
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border text-base text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
      >
        2
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
      >
        3
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border text-base text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
      >
        4
      </button>
      <button
        type="button"
        className="w-full px-1 py-1 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
      >
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
};
export default PagerButton;
