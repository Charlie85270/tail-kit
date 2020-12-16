import React from "react";

interface Props {
  icon?: string;
  label?: string;
  onClick?: () => void;
}

const RoundedButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.icon ? "flex items-center" : ""}${
        props.label ? " px-6 py-2" : " p-4"
      }  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none`}
    >
      {props.icon && (
        <i className={`${props.icon}${props.label ? " mr-4" : ""}`} />
      )}
      {props.label}
    </button>
  );
};
export default RoundedButton;
