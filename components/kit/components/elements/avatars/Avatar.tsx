import React from 'react';

interface Props {
    withBorder?: boolean;
    withInfo?: boolean;
    img?: string;
    size?: 'small' | 'normal' | 'big' | 'monster';
    type?: 'square' | 'rounded' | 'full';
}
const Avatar = ({ withBorder, size, withInfo, type, img }: Props) => {
    let sizeClasses = 'h-16 w-16';
    if (size && size !== 'normal') {
        sizeClasses = size === 'small' ? 'h-10 w-10' : 'h-20 w-20';
        if (size === 'monster') {
            sizeClasses = 'h-40 w-40';
        }
    }

    let roundedClasses = 'rounded-full';
    if (type && type !== 'full') {
        roundedClasses = type === 'square' ? '' : 'rounded-lg';
    }
    return (
        <a href="#" className="relative block">
            <img
                alt="profil"
                src={img || '/images/person/1.jpg'}
                className={`mx-auto object-cover ${roundedClasses} ${sizeClasses} ${
                    withBorder ? ' border-2 border-white dark:border-gray-800' : ''
                }`}
            />
            {withInfo && (
                <span className="absolute w-3 h-3 transform -translate-x-1/2 bg-green-500 border-2 border-white rounded-full left-1/2 -bottom-2"></span>
            )}
        </a>
    );
};
export default Avatar;
