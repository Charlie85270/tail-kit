import React, { useState } from "react";

interface Props {
  forceOpen?: boolean;
  label?: string;
  icon?: string;
  items: DDMItem[];
}

interface DDMItem {
  icon?: string;
  label: string;
}

const Ddm = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {props.label}

          <i
            className={`${props.icon || "fas fa-caret-down"} ${
              props.label ? "ml-4" : ""
            }  h-4`}
          />
        </button>
      </div>

      {(props.forceOpen || isOpen) && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {props.items.map((item) => {
              return (
                <a
                  href="#"
                  className={`${
                    item.icon ? "flex items-center" : "block"
                  } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                  role="menuitem"
                >
                  {item.icon && <i className={`${item.icon} mr-2`} />}
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Ddm;
