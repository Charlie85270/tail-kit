import React from 'react';

interface Props {
    number: number;
    size?: 'small' | 'normal' | 'big';
}

const NotificationBadge = (props: Props) => {
    let sizeClasses = 'w-8 h-8 text-base';
    if (props.size && props.size !== 'normal') {
        sizeClasses = props.size === 'small' ? 'w-6 h-6 text-xs' : 'w-12 h-12 text-base';
    }
    return (
        <button type="button" className={`${sizeClasses}  rounded-full text-white bg-red-500`}>
            <span className="p-1">{props.number}</span>
        </button>
    );
};
export default NotificationBadge;
