import React, { FC } from 'react';
import Avatar from '../../elements/avatars/Avatar';
import Button from '../../elements/buttons/Button';

interface Props {
    horizontal?: boolean;
    name?: string;
    job?: string;
    img?: string;
    size?: 'small' | 'normal' | 'big' | 'monster';
    noBackground?: boolean;
    withAction?: boolean;
}

const SimpleProfile = (props: Props) => {
    return (
        <div className={`${props.noBackground ? '' : 'shadow-lg rounded-2xl bg-white dark:bg-gray-800 '}p-4`}>
            <div className={`${props.horizontal ? 'flex-row gap-4' : 'flex-col '} flex justify-center items-center`}>
                <div className="flex-shrink-0">
                    <Avatar img={props.img} size={props.size} />
                </div>

                <div className={`${props.horizontal ? '' : 'mt-2 text-center'} flex flex-col`}>
                    <span className="text-gray-600 dark:text-white text-lg font-medium">{props.name || 'Charlie'}</span>
                    <span className="text-gray-400 text-xs">{props.job || 'CTO'}</span>
                </div>

                {props.withAction && <Button label="Add" color="indigo" />}
            </div>
        </div>
    );
};
export default SimpleProfile;
