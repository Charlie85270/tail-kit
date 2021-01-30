import React from 'react';
import _uniqueId from 'lodash/uniqueId';

interface Props {
    onChange: (checked) => void;
    check?: boolean;
    label?: string;
}

const colors = [
    {
        color: 'checked:bg-blue-500',
        label: 'Blue',
    },
    {
        color: 'checked:bg-pink-500',
        label: 'Pink',
    },
    {
        color: 'checked:bg-green-500',
        label: 'Green',
    },
    {
        color: 'checked:bg-yellow-500',
        label: 'Orange',
    },
    {
        color: 'checked:bg-purple-500',
        label: 'Purple',
    },
    {
        color: 'checked:bg-black',
        label: 'Black',
    },
    {
        color: 'checked:bg-indigo-500',
        label: 'Indigo',
    },
    {
        color: 'checked:bg-red-500',
        label: 'Red',
    },
    {
        color: 'checked:bg-gray-500',
        label: 'Gray',
    },
];

const MultipleToggle = (props: Props) => {
    return (
        <div>
            {colors.map((color) => {
                return (
                    <div key={color.label} className="mb-3">
                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input
                                type="checkbox"
                                name="toggle"
                                id={color.label}
                                onChange={(e) => props.onChange(e.target.checked)}
                                className={`${color.color} focus:outline-none checked:right-0 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`}
                            />
                            <label
                                htmlFor={color.label}
                                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                            />
                        </div>

                        <span className="text-gray-400 font-medium">{props.label || color.label}</span>
                    </div>
                );
            })}
        </div>
    );
};
export default MultipleToggle;
