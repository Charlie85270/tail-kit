import React from 'react';
import Avatar from '../avatars/Avatar';
import Button from '../buttons/Button';

const RecapCard = () => {
    return (
        <div className="shadow-lg rounded-xl bg-blue-500 w-full md:w-64 p-6 bg-white dark:bg-gray-800 relative overflow-hidden">
            <p className="text-white text-xl">Quick recap</p>

            <div className="flex items-center my-4 text-blue-500 rounded justify-between">
                <span className="rounded-lg p-2 bg-white">
                    <svg
                        width="25"
                        height="25"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
                    </svg>
                </span>
                <div className="flex flex-col w-full ml-2 items-start justify-evenly">
                    <p className="text-white text-lg">45%</p>
                    <p className="text-blue-200 text-sm">Your growth</p>
                </div>
            </div>
            <div className="flex items-center text-blue-500 rounded justify-between">
                <span className="rounded-lg p-2 bg-white">
                    <svg
                        width="25"
                        height="25"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
                    </svg>
                </span>
                <div className="flex flex-col w-full ml-2 items-start justify-evenly">
                    <p className="text-white text-lg">70%</p>
                    <p className="text-blue-200 text-sm">Your delivery</p>
                </div>
            </div>
            <div className="mt-4">
                <button
                    type="button"
                    className="py-2 px-4  bg-blue-700 hover:bg-blue-800 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                >
                    Optimize
                </button>
            </div>
        </div>
    );
};
export default RecapCard;
