import React from "react";
import InputText from "../inputtext/InputText";

const FormSubscribe = () => {
  return (
    <form className="flex w-full max-w-sm mx-auto justify-center space-x-3">
      <InputText placeholder="Your email" />
      <button
        className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        type="button"
      >
        Subscribe
      </button>
    </form>
  );
};
export default FormSubscribe;
