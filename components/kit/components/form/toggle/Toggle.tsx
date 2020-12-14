import React from "react";

const Toggle = () => {
  return (
    <div className="p-4 max-w-xs mx-auto bg-white rounded-xl shadow-md flex items-center">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="checked:right-0 checked:bg-blue-600 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <span className="text-gray-900 font-medium">Option 1</span>
    </div>
  );
};
export default Toggle;
