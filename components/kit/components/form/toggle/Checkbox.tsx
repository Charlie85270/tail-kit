import React from "react";

interface Props {
  label?: string;
  onChange?: (checked) => void;
}

const Checkbox = (props: Props) => {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        name="checked-demo"
        onChange={(e) => props.onChange?.(e.target.checked)}
        defaultValue="1"
        className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
      />
      <span className="text-gray-700 dark:text-white font-normal">{props.label || "Option 1"}</span>
    </label>
  );
};
export default Checkbox;
