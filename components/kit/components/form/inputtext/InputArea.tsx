import React from 'react';

const InputArea = () => {
    return (
        <label className="text-gray-700" htmlFor="name">
            <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows={5}
                cols={40}
            />
        </label>
    );
};

export default InputArea;
