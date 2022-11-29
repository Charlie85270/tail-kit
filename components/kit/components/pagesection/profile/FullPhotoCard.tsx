import React, { FC } from 'react';
const FullPhotoCard: FC = () => {
    return (
        <div className="relative w-64 m-auto mb-1 mb-6 overflow-hidden rounded-lg shadow-lg">
            <img alt="eggs" src="/images/person/3.jpg" className="rounded-lg" />
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-b bg-opacity-60 from-transparent to-black">
                <p className="text-2xl text-white nb-4">Helena Yakro</p>
                <div className="flex justify-between">
                    <p className="flex items-center text-sm text-gray-300">18/12/1993</p>
                    <p className="flex items-center text-sm text-gray-300">
                        <svg
                            width="10"
                            height="10"
                            fill="currentColor"
                            className="w-4 h-4"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
                        </svg>
                        Nantes
                    </p>
                </div>
            </div>
        </div>
    );
};
export default FullPhotoCard;
