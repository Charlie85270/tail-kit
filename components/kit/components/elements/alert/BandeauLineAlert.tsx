import React from "react";

interface Props {
  title: string;
  closeAction?: () => void;
}

const BandeauLineAlert = (props: Props) => {
  return (
    <div className="rounded-md flex items-center jusitfy-between px-5 py-4 mb-2 border border-blue-500 text-blue-500">
      <div className="w-full">
        <i className="fas fa-exclamation-triangle w-6 h-6 mr-2" /> {props.title}
      </div>
      <button
        type="button"
        onClick={() => props.closeAction && props.closeAction()}
        className="-mr-1 flex-shrink-0 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:-mr-2"
      >
        <span className="sr-only">Dismiss</span>
        <i className="fas fa-times h-6 w-6 text-blue-500"></i>
      </button>
    </div>
  );
};

export default BandeauLineAlert;
