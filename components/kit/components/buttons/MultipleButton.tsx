import React, { FC } from "react";
const MultipleButton: FC = () => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="w-full px-8 py-3 border-l border-t border-b text-base font-medium rounded-l-xl text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
      >
        Left
      </button>
      <button
        type="button"
        className="w-full px-8 py-3 border text-base font-medium  text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
      >
        Center
      </button>
      <button
        type="button"
        className="w-full px-8 py-3 border-t border-b border-r text-base font-medium rounded-r-xl text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
      >
        Right
      </button>
    </div>
  );
};
export default MultipleButton;
