import React from "react";

interface Props {
  label: string;
  indication: string;
  onClick?: () => void;
  onIndicationClick?: () => void;
}

const ButtonWithIndications = (props: Props) => {
  return (
    <div className="flex items-center">
      <button
        onClick={() => props.onClick()}
        type="button"
        className="w-full flex items-center border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-4 py-2"
      >
        <i className="far fa-star mr-2" /> {props.label}
      </button>

      <button
        type="button"
        onClick={() => props.onIndicationClick()}
        className="w-full border text-base font-medium rounded-r-md text-black bg-white hover:bg-gray-100 px-4 py-2"
      >
        {props.indication}
      </button>
    </div>
  );
};
export default ButtonWithIndications;
