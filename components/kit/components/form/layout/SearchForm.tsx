import React from "react";
import Button from "../../elements/buttons/Button";
import InputText from "../../../components/form/inputtext/InputText";

const SearchForm = () => {
  return (
    <div className="bg-white sm:max-w-md shadow sm:w-full sm:mx-auto rounded-lg sm:overflow-hidden">
      <div className="px-4 py-8 sm:px-10">
        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm leading-5">
            <span className="px-2 bg-white text-gray-500">Search criteria</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="space-y-6 w-full">
            <div className="w-full">
              <InputText placeholder="Your price" />
            </div>
            <div className="w-full">
              <InputText placeholder="Your location" />
            </div>
            <div className="w-full">
              <InputText placeholder="Your name" />
            </div>
            <div>
              <span className="block w-full rounded-md shadow-sm">
                <Button label="Search" color="indigo" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
        <p className="text-xs leading-5 text-gray-500">This data are display for information and can change</p>
      </div>
    </div>
  );
};
export default SearchForm;
