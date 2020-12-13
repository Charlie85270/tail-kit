import React, { FC } from "react";
const TextAndIconButton: FC = () => {
  return (
    <button
      type="button"
      className="justify-center px-8 py-3 border text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
    >
      <i className="fas fa-upload mr-2" />
      Upload
    </button>
  );
};
export default TextAndIconButton;
