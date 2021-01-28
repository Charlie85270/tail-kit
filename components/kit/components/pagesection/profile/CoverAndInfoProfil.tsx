import React, { FC } from 'react';
import Avatar from '../../elements/avatars/Avatar';

const CoverAndInfoProfil: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800">
            <img alt="profil" src="/images/landscape/1.jpg" className="rounded-t-lg h-28 w-full mb-4" />
            <div className="flex flex-col items-center justify-center p-4 -mt-16">
                <Avatar withBorder />

                <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">Charlie</p>
                <p className="text-gray-400 text-xs mb-4">Nantes</p>
                <p className="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">Professional</p>

                <div className="rounded-lg p-2 w-full mt-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                        <p className="flex flex-col">
                            Articles
                            <span className="text-black dark:text-white font-bold">34</span>
                        </p>
                        <p className="flex flex-col">
                            Followers <span className="text-black dark:text-white font-bold">455</span>
                        </p>
                        <p className="flex flex-col">
                            Rating <span className="text-black dark:text-white font-bold">9.3</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CoverAndInfoProfil;
