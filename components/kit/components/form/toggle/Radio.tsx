import React from 'react';

const Radio = () => {
    return (
        <div className="flex items-center gap-8">
            <label className="inline-flex items-center">
                <input type="radio" name="vehicle" className="h-5 w-5 text-red-600" />
                <span className="ml-2 text-gray-700">Car</span>
            </label>
            <label className="inline-flex items-center">
                <input type="radio" name="vehicle" className="h-5 w-5 text-red-600" />
                <span className="ml-2 text-gray-700">Cycle</span>
            </label>
        </div>
    );
};
export default Radio;
