import React from 'react';
import Avatar from '../../elements/avatars/Avatar';

interface Props {
    withShadow?: boolean;
}

const SimpleTestimonial = (props: Props) => {
    return (
        <div className={`bg-white dark:bg-gray-800 w-72 ${props.withShadow ? 'shadow-lg' : ''} mx-auto rounded-xl p-4`}>
            <p className={`text-gray-600 dark:text-white`}>
                <span className="text-lg font-bold text-indigo-500">“</span>To get social media testimonials like these,
                keep your customers engaged with your social media accounts by posting regularly yourself
                <span className="text-lg font-bold text-indigo-500">”</span>
            </p>
            <div className="flex items-center mt-4">
                <Avatar size="small" />
                <div className="flex flex-col justify-between ml-2">
                    <span className="text-sm font-semibold text-indigo-500">Jean Miguel</span>
                    <span className="flex items-center text-xs dark:text-gray-400">
                        User of Tail-Kit
                        <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SimpleTestimonial;
