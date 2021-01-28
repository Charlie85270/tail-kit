import React from 'react';

const SelectWithLabel = () => {
    return (
        <label className="text-gray-700" htmlFor="animals">
            Animals
            <select
                id="animals"
                className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                name="animals"
            >
                <option value="">Select an options</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
        </label>
    );
};
export default SelectWithLabel;
