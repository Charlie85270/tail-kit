import React, { FC } from "react";
const CovidInfo: FC = () => {
  return (
    <div className="md:p-8 p-6 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:flex-row flex-col gap-12">
      <div>
        <span className="text-bold text-gray-700 dark:text-gray-400">
          Total Cases
        </span>
        <h2 className="text-yellow-500 text-5xl mt-2 font-black">75,858,724</h2>
      </div>
      <div className="pt-5">
        <div className="relative md:text-right text-left md:block inline-block">
          <p className="text-xl md:mb-2 mb-0 dark:text-gray-100 inline-block increase">
            <i className="fas fa-exchange-alt text-red-500 mr-2"></i> 1.2%
            increase
          </p>
        </div>
        <p className="text-lg text-gray-600 md:text-right text-left dark:text-gray-400 md:block inline-block md:mb-0">
          from yesterday (+906,503)
        </p>
      </div>
    </div>
  );
};
export default CovidInfo;
