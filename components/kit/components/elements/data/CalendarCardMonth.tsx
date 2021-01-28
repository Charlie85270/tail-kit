import React, { FC } from 'react';
const CalendarCardMonth: FC = () => {
    return (
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
            <div className="flex flex-wrap overflow-hidden">
                <div className="w-full rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-left font-bold text-xl text-black dark:text-white">Dec 2021</div>
                        <div className="flex space-x-4">
                            <button className="p-2 rounded-full bg-blue-500 text-white">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                                    ></path>
                                </svg>
                            </button>
                            <button className="p-2 rounded-full bg-blue-500 text-white">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="-mx-2">
                        <table className="w-full dark:text-white">
                            <tr>
                                <th className="py-3 px-2 md:px-3 ">S</th>
                                <th className="py-3 px-2 md:px-3 ">M</th>
                                <th className="py-3 px-2 md:px-3 ">T</th>
                                <th className="py-3 px-2 md:px-3 ">W</th>
                                <th className="py-3 px-2 md:px-3 ">T</th>
                                <th className="py-3 px-2 md:px-3 ">F</th>
                                <th className="py-3 px-2 md:px-3 ">S</th>
                            </tr>
                            <tr className="text-gray-400 dark:text-gray-500">
                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">25</td>
                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">26</td>
                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">27</td>
                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">28</td>
                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">29</td>
                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">30</td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800 cursor-pointer">
                                    1
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">2</td>
                                <td className="py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer">
                                    3
                                    <span className="absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2"></span>
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">4</td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">5</td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">6</td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">7</td>
                                <td className="py-3 px-2 md:px-3 md:px-2 relative lg:px-3 hover:text-blue-500 text-center cursor-pointer">
                                    8
                                    <span className="absolute rounded-full h-2 w-2 bg-yellow-500 bottom-0 left-1/2 transform -translate-x-1/2"></span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">9</td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    10
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    11
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    12
                                </td>
                                <td className="py-3 px-2 md:px-3  text-center text-white cursor-pointer">
                                    <span className="p-2 rounded-full bg-blue-500">13</span>
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    14
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    15
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    16
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    17
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    18
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    19
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    20
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    21
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    22
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    23
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    24
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 relative text-center cursor-pointer">
                                    25
                                    <span className="absolute rounded-full h-2 w-2 bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2"></span>
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    26
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    27
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    28
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    29
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    30
                                </td>
                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                    31
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CalendarCardMonth;
