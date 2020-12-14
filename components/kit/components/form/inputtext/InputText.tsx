import React from "react";

interface Props {
  type?: string;
  label?: string;
  required?: boolean;
  error?: string;
  icon?: string;
  helper?: string;
  placeholder?: string;
  name?: string;
}

const InputText = (props: Props) => {
  return (
    <div className={`${props.helper || props.icon ? "flex" : ""} relative`}>
      {props.label && (
        <label htmlFor={props.name} className="text-gray-700">
          {props.label}{" "}
          {props.required && (
            <span className="required-dot text-red-500">*</span>
          )}
        </label>
      )}
      {(props.helper || props.icon) && (
        <span className="inline-flex  items-center px-3 rounded-l-md border-t border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
          {props.helper || <i className={props.icon} />}
        </span>
      )}
      <input
        className={`${props.error ? "ring-red-500 ring-2" : ""} ${
          props.helper || props.icon
            ? "rounded-r-lg "
            : "rounded-lg border-transparent"
        } flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
        type={props.type || "text"}
        name={props.name}
        placeholder={props.placeholder}
      />
      {props.error && (
        <>
          <i className="fas fa-exclamation-circle absolute right-2 text-red-500 bottom-3"></i>
          <p className="absolute -bottom-6 text-red-500 text-sm">
            {props.error}
          </p>
        </>
      )}
    </div>
  );
};

export default InputText;
