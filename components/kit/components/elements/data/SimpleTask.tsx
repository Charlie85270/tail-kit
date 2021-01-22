import React from "react";
import Avatar from "../avatars/Avatar";

const SimpleTask = () => {
  return (
    <div className="shadow-lg rounded-xl w-full md:w-72 p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
      <a
        href="#"
        aria-label="Go to article"
        className="absolute w-full h-full"
      ></a>
      <div className="w-full flex items-center">
        <Avatar size="small" />
        <div className="flex flex-col items-center ml-2">
          <span className="dark:text-white">Charlie Rabiller</span>
          <span className="text-gray-400 text-sm dark:text-gray-300">
            Tailwind-kit.com
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-2">
        <p className="text-gray-300 text-sm">4/6 task completed</p>
      </div>
      <div className="w-full h-2 bg-blue-200 rounded-full">
        <div
          className={`w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full`}
        ></div>
      </div>
    </div>
  );
};
export default SimpleTask;
