import React, { FC } from "react";
const DisabledButton: FC = () => {
  return (
    <button
      disabled
      type="button"
      className="w-full opacity-70 cursor-not-allowed px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
    >
      Remove
    </button>
  );
};
export default DisabledButton;
