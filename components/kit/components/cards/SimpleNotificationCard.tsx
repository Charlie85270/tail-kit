import React, { FC } from 'react';
const SimpleNotificationCard: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-64 p-4 bg-white flex justify-between items-center">
            <div className="w-2/6">
                <img src="/images/person/2.jpeg" alt="" className="h-12 w-12 rounded-full" />
            </div>
            <div className="w-3/6">
                <p className="text-gray-500 text-sm">
                    You have
                    <span className="text-indigo-500 font-bold"> 2 </span>new messages
                </p>
            </div>
            <div className="w-1/6 text-right">
                <i className="far fa-envelope text-indigo-500 h-6 w-6"></i>
            </div>
        </div>
    );
};
export default SimpleNotificationCard;
