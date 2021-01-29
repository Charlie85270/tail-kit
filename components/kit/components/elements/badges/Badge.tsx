import React from 'react';

interface Props {
    color?: string;
    removeAction?: () => void;
    textColor?: string;
    borderColor?: string;
    label?: string;
    icon?: boolean;
    rounded?:
        | 'rounded-none'
        | 'rounded-sm'
        | 'rounded'
        | 'rounded-md'
        | 'rounded-lg'
        | 'rounded-xl'
        | 'rounded-2xl'
        | 'rounded-3xl'
        | 'rounded-full';
    isSmall?: boolean;
    isMediumWeight?: boolean;
}

const Badge = (props: Props) => {
    return (
        <span
            className={`${props.isSmall ? `px-2 py-1` : `px-4 py-2`} ${
                props.icon ? 'flex items-center' : ''
            } text-base ${props.rounded} ${props.textColor ? props.textColor : ''} ${
                props.borderColor ? props.borderColor : ''
            } ${props.color} ${props.isMediumWeight ? 'font-medium' : ''}`}
        >
            {props.icon && (
                <svg
                    width="20"
                    fill="currentColor"
                    height="20"
                    className="mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
                </svg>
            )}
            {props.label}
            {props.removeAction && (
                <button className="bg-transparent hover" onClick={props.removeAction}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        className="ml-4"
                        viewBox="0 0 1792 1792"
                    >
                        <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
                    </svg>
                </button>
            )}
        </span>
    );
};

export default Badge;
