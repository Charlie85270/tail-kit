import React from "react";

const FeaturesCards = () => {
  return (
    <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <i className="fas fa-pencil-ruler h-6 w-6" />
          </div>
        </div>

        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
          Website Design
        </h3>
        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
          Encompassing today’s website design technology to integrated and build
          solutions relevant to your business.
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <i className="fab fa-intercom h-6 w-6" />
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
          Branding
        </h3>
        <p className="text-md text-gray-500 dark:text-gray-300 py-4">
          Share relevant, engaging, and inspirational brand messages to create a
          connection with your audience.
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <i className="fab fa-html5 h-6 w-6" />
          </div>
        </div>

        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
          SEO Marketing
        </h3>
        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
          Let us help you level up your search engine game, explore our
          solutions for digital marketing for your business.
        </p>
      </div>
    </div>
  );
};
export default FeaturesCards;
