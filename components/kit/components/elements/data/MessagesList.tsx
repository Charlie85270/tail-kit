import React, { FC } from 'react';
import Avatar from '../avatars/Avatar';

const MessagesList: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
            <p className="font-bold text-md text-black dark:text-white">Messages</p>

            <ul>
                <li className="flex items-center my-6 space-x-2">
                    <Avatar size="small" />

                    <div className="flex flex-col">
                        <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                            Charlie Rabiller
                        </span>
                        <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                            Hey John ! Do you read the NextJS doc ?
                        </span>
                    </div>
                </li>

                <li className="flex items-center my-6 space-x-2">
                    <Avatar size="small" img="/images/person/5.jpg" />

                    <div className="flex flex-col">
                        <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">Marie Lou</span>
                        <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                            No I think the dog is better...
                        </span>
                    </div>
                </li>
                <li className="flex items-center my-6 space-x-2">
                    <Avatar size="small" img="/images/person/6.jpg" />

                    <div className="flex flex-col">
                        <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">Ivan Buck</span>
                        <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                            Seriously ? haha Bob is not a children !
                        </span>
                    </div>
                </li>
                <li className="flex items-center my-6 space-x-2">
                    <Avatar size="small" img="/images/person/7.jpg" />

                    <div className="flex flex-col">
                        <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">Marina Farga</span>
                        <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">Do you need that deisgn ?</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default MessagesList;
