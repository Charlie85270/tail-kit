import React, { FC } from "react";
const ButtonWithIndications: FC = () => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="w-full flex items-center border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-4 py-2"
      >
        <i className="far fa-star mr-2" /> Star
      </button>

      <button
        type="button"
        className="w-full border text-base font-medium rounded-r-md text-black bg-white hover:bg-gray-100 px-4 py-2"
      >
        798
      </button>
    </div>
  );
};
export default ButtonWithIndications;
