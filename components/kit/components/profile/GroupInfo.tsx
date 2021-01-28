import React, { FC } from 'react';
import MultipleAvatar from '../elements/avatars/MultipleAvatar';

const GroupInfo: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-80 p-4 bg-white">
            <div className="flex flex-row items-start gap-4">
                <img src="/images/food/3.jpg" className="w-28 h-20 rounded-lg" />

                <div className="h-20 w-full flex flex-col justify-between">
                    <div>
                        <p className="text-gray-800 text-xl font-medium">Eggs eater</p>
                        <p className="text-gray-400 text-xs">13 458 members</p>
                    </div>

                    <MultipleAvatar />
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-6">
                <button
                    type="button"
                    className="w-1/2 px-4 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 "
                >
                    Invite friend
                </button>
                <button
                    type="button"
                    className="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 "
                >
                    Join
                </button>
            </div>
        </div>
    );
};
export default GroupInfo;
