import React from "react";

const MultipleAvatar = () => {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src="/images/person/1.jpg"
        alt="Guy"
      />
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src="/images/person/2.jpeg"
        alt="Max"
      />
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src="/images/person/3.jpg"
        alt="Charles"
      />
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src="/images/person/4.jpg"
        alt="Jade"
      />
    </div>
  );
};
export default MultipleAvatar;
