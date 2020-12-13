import React from "react";
const GoogleButton = () => {
  return (
    <button
      type="button"
      className="flex items-center p-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
    >
      <i className="fab fa-google mr-4"></i> Sign in with Google
    </button>
  );
};
export default GoogleButton;
