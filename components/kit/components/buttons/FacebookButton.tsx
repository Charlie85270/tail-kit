import React from "react";
const FacebookButton = () => {
  return (
    <button
      type="button"
      className="flex items-center p-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
    >
      <i className="fab fa-facebook-f mr-4"></i> Sign in with Facebook
    </button>
  );
};
export default FacebookButton;
