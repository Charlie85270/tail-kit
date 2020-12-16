import React from "react";

interface Props {
  color?: string;
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
    </span>
  );
};
export default Badge;
