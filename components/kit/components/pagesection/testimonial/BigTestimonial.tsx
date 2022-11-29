import React from 'react';
import Avatar from '../../elements/avatars/Avatar';

const BigTestimonial = () => {
    return (
        <div className={`bg-white dark:bg-gray-800 w-full mx-auto p-8`}>
            <img src="/icons/rocket.svg" className="w-10 h-10 m-auto mb-8" />

            <p className={`text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl`}>
                <span className="font-bold text-indigo-500">“</span>
                To get social media testimonials like these, keep your customers engaged with your social media accounts
                by posting regularly yourself
                <span className="font-bold text-indigo-500">”</span>
            </p>

            <div className="flex items-center justify-center mt-8">
                <Avatar size="small" />
                <div className="flex items-center justify-center ml-2">
                    <span className="mr-2 text-lg font-semibold text-indigo-500">Jean Miguel</span>
                    <span className="text-xl font-light text-gray-400">/</span>
                    <span className="ml-2 text-gray-400 text-md">User of Tail-Kit</span>
                </div>
            </div>
        </div>
    );
};

export default BigTestimonial;
