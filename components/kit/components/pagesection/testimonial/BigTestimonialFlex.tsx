import React from 'react';
import Avatar from '../../elements/avatars/Avatar';

const BigTestimonialFlex = () => {
    return (
        <div className={`bg-white dark:bg-gray-800 w-full mx-auto p-8`}>
            <div className="flex items-center md:items-start flex-col md:flex-row justify-center">
                <Avatar size="monster" />

                <div className="w-full md:w-2/3">
                    <p className={`text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-left text-lg md:text-3xl`}>
                        <span className="font-bold text-indigo-500">“</span>
                        To get social media testimonials like these, keep your customers engaged with your social media
                        accounts by posting regularly yourself
                        <span className="font-bold text-indigo-500">”</span>
                    </p>
                    <div className="flex mt-8 items-center justify-center">
                        <span className="font-semibold text-indigo-500 mr-2 text-lg">Jean Miguel</span>
                        <span className="text-gray-400 text-xl font-light">/</span>
                        <span className="text-gray-400 text-md ml-2">User of tail-kit</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigTestimonialFlex;
