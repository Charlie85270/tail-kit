import React from "react";
interface Props {
  size?: "small" | "normal" | "big";
}
const MultipleAvatar = ({ size }: Props) => {
  let sizeClasses = "h-16 w-16";
  if (size && size !== "normal") {
    sizeClasses = size === "small" ? "h-10 w-10" : "h-20 w-20";
  }
  return (
    <div className="flex -space-x-2 overflow-hidden">
      <img
        className={`inline-block ${sizeClasses} rounded-full ring-2 ring-white`}
        src="/images/person/1.jpg"
        alt="Guy"
      />
      <img
        className={`inline-block ${sizeClasses} rounded-full ring-2 ring-white`}
        src="/images/person/2.jpeg"
        alt="Max"
      />
      <img
        className={`inline-block ${sizeClasses} rounded-full ring-2 ring-white`}
        src="/images/person/3.jpg"
        alt="Charles"
      />
      <img
        className={`inline-block ${sizeClasses} rounded-full ring-2 ring-white`}
        src="/images/person/4.jpg"
        alt="Jade"
      />
    </div>
  );
};
export default MultipleAvatar;
