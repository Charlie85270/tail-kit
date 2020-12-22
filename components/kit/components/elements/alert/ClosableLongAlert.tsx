import React from "react";

interface Props {
  text: string;
}

const ClosableLongAlert = (props: Props) => {
  return (
    <div
      className="container bg-blue-500 flex items-center text-white text-sm font-bold px-4 py-3 relative"
      role="alert"
    >
      <i className="fas fa-info w-4 h-4 mr-2"></i>

      <p>{props.text}</p>

      <button className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <i className="fill-current h-6 w-6 text-white fas fa-times" />
      </button>
    </div>
  );
};

export default ClosableLongAlert;
