import React, { useState } from "react";
import InputText from "../../form/inputtext/InputText";
import Button from "../buttons/Button";

interface Props {
  //boolean to always open ddm (for presentation)
  forceOpen?: boolean;
  label?: string;
  icon?: string;
}

const DropDownMenuWithForm = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {props.label}

          <i
            className={`${props.icon || "fas fa-caret-down"}${
              props.label ? " ml-4 h-4" : " h-8 w-8 text-lg"
            }`}
          />
        </button>
      </div>

      {(props.forceOpen || isOpen) && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="p-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div>
              <InputText placeholder="Name" />
            </div>
            <div>
              <div className="text-md text-gray-500 w-full text-center my-3">
                Or
              </div>
              <InputText placeholder="City" />
            </div>
            <div className="flex items-center mt-3">
              <Button label="Search" color="indigo" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DropDownMenuWithForm;
