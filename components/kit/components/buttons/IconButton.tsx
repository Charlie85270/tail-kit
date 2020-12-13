import React from "react";
const IconButton = (props: { icon?: string }) => {
  return (
    <button
      type="button"
      className="w-12 p-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-white hover:text-black"
    >
      {props.icon ? (
        <i className={props.icon} />
      ) : (
        <i className="fas fa-play"></i>
      )}
    </button>
  );
};
export default IconButton;
