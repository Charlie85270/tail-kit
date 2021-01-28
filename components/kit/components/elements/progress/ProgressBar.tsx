import React from 'react';

interface Props {
    color?: string;
    textColor?: string;
    isFat?: boolean;
    label?: string;
    withBadge?: boolean;
}

const ProgressBar = (props: Props) => {
    return (
        <div>
            <div className="bg-white rounded-lg w-72 shadow block p-4 m-auto">
                {props.withBadge && (
                    <div>
                        <span
                            className={`text-xs font-light inline-block py-1 px-2 uppercase rounded-full ${props.textColor} ${props.color}`}
                        >
                            Task in progress
                        </span>
                    </div>
                )}
                <div className={`w-full ${props.isFat ? 'h-4' : 'h-2'} bg-gray-400 rounded-full mt-3`}>
                    <div className={`w-3/4 h-full text-center text-xs text-white ${props.color} rounded-full`}>
                        {props.label}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProgressBar;
