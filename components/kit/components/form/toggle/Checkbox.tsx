import React from 'react';

interface Props {
    label?: string;
    onChange?: (checked) => void;
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

const Checkbox = (props: Props) => {
    return (
        <div>
            {colors.map((color, index) => {
                return (
                    <label key={color.label} className="flex items-center space-x-3 mb-3">
                        <input
                            type="checkbox"
                            name="checked-demo"
                            className={`form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md ${color.color} checked:border-transparent focus:outline-none`}
                        />
                        <span className="text-gray-700 dark:text-white font-normal">{color.label}</span>
                    </label>
                );
            })}
        </div>
    );
};
export default Checkbox;
