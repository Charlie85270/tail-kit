import React from 'react';

interface Props {
    textColor?: string;
    backgroundBadgeColor: string;
    label: string;
    badgeLabel: string;
}
const ColoredTextAndBadge = (props: Props) => {
    return (
        <div className="inline-flex items-center bg-white leading-none ${props.textColor} rounded-full p-2 shadow text-teal text-sm">
            <span
                className={`inline-flex ${props.backgroundBadgeColor} text-white rounded-full h-6 px-3 justify-center items-center`}
            >
                {props.badgeLabel}
            </span>
            <span className={`inline-flex px-2 ${props.textColor}`}>{props.label}</span>
        </div>
    );
};
export default ColoredTextAndBadge;
