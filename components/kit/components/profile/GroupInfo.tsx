import React, { FC } from 'react';
import MultipleAvatar from '../elements/avatars/MultipleAvatar';

const GroupInfo: FC = () => {
    return (
        <div className="p-4 bg-white shadow-lg rounded-2xl w-80">
            <div className="flex flex-row items-start gap-4">
                <img src="/images/food/3.jpg" className="h-20 rounded-lg w-28" />

                <div className="flex flex-col justify-between w-full h-20">
                    <div>
                        <p className="text-xl font-medium text-gray-800">Eggs eater</p>
                        <p className="text-xs text-gray-400">13 458 members</p>
                    </div>

                    <MultipleAvatar />
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-6">
                <button
                    type="button"
                    className="w-1/2 px-4 py-2 text-base bg-white border rounded-lg text-grey-500 hover:bg-gray-200 "
                >
                    Invite friend
                </button>
                <button
                    type="button"
                    className="w-1/2 px-4 py-2 text-base text-white bg-indigo-500 border rounded-lg hover:bg-indigo-700 "
                >
                    Join
                </button>
            </div>
        </div>
    );
};
export default GroupInfo;
