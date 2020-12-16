import React from "react";

interface Props {
  withBorder?: boolean;
  withInfo?: boolean;
  size?: "small" | "normal" | "big";
}
const Avatar = ({ withBorder, size, withInfo }: Props) => {
  let sizeClasses = "h-16 w-16";
  if (size && size !== "normal") {
    sizeClasses = size === "small" ? "h-10 w-10" : "h-20 w-20";
  }
  return (
    <a href="#" className="block relative">
      <img
        alt="profil"
        src="/images/person/1.jpg"
        className={`rounded-full ${sizeClasses} ${
          withBorder ? " border-2 border-white" : ""
        }`}
      />
      {withInfo && (
        <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full"></span>
      )}
    </a>
  );
};
export default Avatar;
