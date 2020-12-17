import React from "react";

interface Props {
  color?: string;
  removeAction?: () => void;
  textColor?: string;
  borderColor?: string;
  label?: string;
  icon?: string;
}
const Badge = (props: Props) => {
  return (
    <span
      className={`w-full px-4 py-2 ${
        props.icon ? "flex items-center" : ""
      } text-base rounded-full ${props.textColor ? props.textColor : ""} ${
        props.borderColor ? props.borderColor : ""
      } ${props.color}`}
    >
      {props.icon && <i className={`${props.icon} mr-2`}></i>} {props.label}
      {props.removeAction && (
        <button className="bg-transparent hover" onClick={props.removeAction}>
          <i className="fas h-4 fa-times ml-8"></i>
        </button>
      )}
    </span>
  );
};
export default Badge;
