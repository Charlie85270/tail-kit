import React from "react";

const FeaturesSquare = () => {
  return (
    <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
      <div className="mb-16 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Features
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          A better way to live
        </p>
      </div>
      <div className="flex flex-wrap my-12 dark:text-white">
        <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
          <div className="flex items-center mb-6">
            <i className="fas fa-pencil-ruler h-6 w-6 text-indigo-500" />
            <div className="ml-4 text-xl">Increase sales</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Receive more sales by selling across multple sales channels instead
            of just having a single point of entry.
          </p>
        </div>
        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
          <div className="flex items-center mb-6">
            <i className="fab fa-intercom h-6 w-6 text-indigo-500" />
            <div className="ml-4 text-xl">Overlays</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Apply beautiful overlays to every product image distributed through
            our platform. A visual touch.
          </p>
        </div>
        <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
          <div className="flex items-center mb-6">
            <i className="fab fa-html5 h-6 w-6 text-indigo-500" />
            <div className="ml-4 text-xl">Control</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Apply filters and control which products to sell on each sales
            channel. E.g. exclude products with low margins.
          </p>
        </div>
        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
          <div className="flex items-center mb-6">
            <i className="fas fa-pencil-ruler h-6 w-6 text-indigo-500" />
            <div className="ml-4 text-xl">Mapping</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Map product categories with each sales channels' own categories and
            achieve better results and lower costs.
          </p>
        </div>
        <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
          <div className="flex items-center mb-6">
            <i className="fab fa-html5 h-6 w-6 text-indigo-500" />
            <div className="ml-4 text-xl">Fill the missing</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Modify products with extra properties and achieve the maximum output
            for each installed sales channel.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-8">
          <div className="flex items-center mb-6">
            <i className="fas fa-pencil-ruler h-6 w-6 text-indigo-500" />
            <div className="ml-4 text-xl">Dynamic Texts</div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Build unique product titles and descriptions instead of spending
            days manually editing each product.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSquare;
