import React, { FC } from "react";
const MutlipleTask: FC = () => {
  return (
    <div className="shadow-lg rounded-xl w-72 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden">
      <a href="#" className="absolute w-full h-full"></a>
      <div className="w-full">
        <p className="text-gray-800 dark:text-white text-2xl font-medium mb-6">
          Task Progress
        </p>

        <div className="flex items-center justify-between">
          <p>Design</p>
          <p className="text-gray-400">3/8</p>
        </div>
        <div className="w-full h-2 bg-green-100 rounded-full mb-6">
          <div
            className={`w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full`}
          ></div>
        </div>

        <div className="flex items-center justify-between">
          <p>Development</p>
          <p className="text-gray-400">6/10</p>
        </div>
        <div className="w-full h-2 bg-indigo-100 rounded-full mb-6">
          <div
            className={`w-2/3 h-full text-center text-xs text-white bg-indigo-400 rounded-full`}
          ></div>
        </div>

        <div className="flex items-center justify-between">
          <p>DevOps</p>
          <p className="text-gray-400">2/8</p>
        </div>
        <div className="w-full h-2 bg-blue-100 rounded-full mb-6">
          <div
            className={`w-1/4 h-full text-center text-xs text-white bg-blue-400 rounded-full`}
          ></div>
        </div>
        <div className="flex items-center justify-between">
          <p>Marketing</p>
          <p className="text-gray-400">8/8</p>
        </div>
        <div className="w-full h-2 bg-pink-100 rounded-full mb-6">
          <div
            className={`w-full h-full text-center text-xs text-white bg-pink-400 rounded-full`}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default MutlipleTask;
