import React, { useState } from "react";

interface Props {
  forceOpen?: boolean;
  label?: string;
  withDivider?: boolean;
  icon?: string;
  items: DDMItem[];
  withBackground?: boolean;
}

export interface DDMItem {
  icon?: string;
  label: string;
  desc?: string;
  link?: string;
}

const DropDownMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={` ${
            props.withBackground
              ? "border border-gray-300 bg-white dark:bg-gray-800 shadow-sm"
              : ""
          } flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500`}
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
            className={`py-1 ${
              props.withDivider ? "divide-y divide-gray-100" : ""
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {props.items.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.link || "#"}
                  className={`${
                    item.icon ? "flex items-center" : "block"
                  } block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600`}
                  role="menuitem"
                >
                  {item.icon && <i className={`${item.icon} mr-2`} />}

                  <span className="flex flex-col">
                    <span>{item.label}</span>
                    {item.desc && (
                      <span className="text-gray-400 text-xs">{item.desc}</span>
                    )}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default DropDownMenu;
