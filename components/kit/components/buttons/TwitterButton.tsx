import React from "react";
const TwitterButton = () => {
  return (
    <button
      type="button"
      className="flex items-center p-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500"
    >
      <i className="fab fa-twitter mr-4"></i> Sign in with Twitter
    </button>
  );
};
export default TwitterButton;
