import React, { FC } from 'react';
import Avatar from '../../elements/avatars/Avatar';

const CoverAndInfoProfil: FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-2xl w-80 dark:bg-gray-800">
            <img alt="profil" src="/images/landscape/1.jpg" className="w-full mb-4 rounded-t-lg h-28" />
            <div className="flex flex-col items-center justify-center p-4 -mt-16">
                <Avatar withBorder />

                <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">Charlie</p>
                <p className="mb-4 text-xs text-gray-400">Nantes</p>
                <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">Professional</p>

                <div className="w-full p-2 mt-4 rounded-lg">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                        <p className="flex flex-col">
                            Articles
                            <span className="font-bold text-black dark:text-white">34</span>
                        </p>
                        <p className="flex flex-col">
                            Followers <span className="font-bold text-black dark:text-white">455</span>
                        </p>
                        <p className="flex flex-col">
                            Rating <span className="font-bold text-black dark:text-white">9.3</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CoverAndInfoProfil;
