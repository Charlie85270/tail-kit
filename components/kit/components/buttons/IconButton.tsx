import React from 'react';
const IconButton = (props: { icon?: string }) => {
    return (
        <button
            type="button"
            className="w-12 p-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
        >
            {props.icon ? <i className={props.icon} /> : <i className="fas fa-play"></i>}
        </button>
    );
};
export default IconButton;
