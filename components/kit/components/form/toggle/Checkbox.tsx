import React from "react";

interface Props {
  label?: string;
  noShadow?: boolean;
}

const Checkbox = (props: Props) => {
  return (
    <div className={props.noShadow ? "" : "p-4 bg-white rounded-xl shadow-md"}>
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="checked-demo"
          defaultValue="1"
          className="form-tick appearance-none bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
        />
        <span className="text-gray-900 font-medium">
          {props.label || "Option 1"}
        </span>
      </label>
    </div>
  );
};
export default Checkbox;
