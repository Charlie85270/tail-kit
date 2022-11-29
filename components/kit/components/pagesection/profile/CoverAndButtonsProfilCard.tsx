import React, { FC } from 'react';
import Avatar from '../../elements/avatars/Avatar';
import Button from '../../elements/buttons/Button';

const CoverAndButtonsProfilCard: FC = () => {
    return (
        <div className="w-64 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <img alt="profil" src="/images/landscape/1.jpg" className="w-full mb-4 rounded-t-lg h-28" />
            <div className="flex flex-col items-center justify-center p-4 -mt-16">
                <Avatar />

                <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">Charlie</p>
                <p className="flex items-center text-xs text-gray-400">
                    <svg
                        width="10"
                        height="10"
                        fill="currentColor"
                        className="w-4 h-4 mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
                    </svg>
                    Nantes
                </p>
                <p className="text-xs text-gray-400">FullStack dev</p>

                <div className="flex items-center justify-between w-full gap-4 mt-8">
                    <Button color="indigo" label="See profile" />
                </div>
            </div>
        </div>
    );
};
export default CoverAndButtonsProfilCard;
