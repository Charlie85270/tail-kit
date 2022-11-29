import React, { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';

interface Props {
    onChange: (checked) => void;
    check?: boolean;
    label?: string;
}

const Toggle = (props: Props) => {
    const [id] = useState(_uniqueId('prefix-'));
    return (
        <div>
            <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
                <input
                    type="checkbox"
                    name="toggle"
                    id={id}
                    checked={props.check}
                    onChange={(e) => props.onChange(e.target.checked)}
                    className="absolute block w-6 h-6 duration-200 ease-in bg-white border-4 rounded-full appearance-none cursor-pointer right-4 checked:right-0 checked:bg-blue-600"
                />
                <label htmlFor={id} className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer" />
            </div>
            {props.label && <span className="font-medium text-gray-400">{props.label}</span>}
        </div>
    );
};
export default Toggle;
