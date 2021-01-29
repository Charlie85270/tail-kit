import React from 'react';
import Avatar from '../../../components/elements/avatars/Avatar';
import SimpleLevelsCard from '../../../components/elements/data/SimpleLevelsCard';

const KpiProject = () => {
    return (
        <main className="bg-gray-100 dark:bg-gray-800 relative h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <div className="h-screen hidden lg:block shadow-lg relative w-80">
                    <div className="bg-white h-full dark:bg-gray-700">
                        <div className="flex items-center justify-start pt-6 ml-8">
                            <p className="font-bold dark:text-white text-xl">Plannifer</p>
                        </div>

                        <nav className="mt-6">
                            <div>
                                <a
                                    className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" />
                                        </svg>
                                    </span>
                                    <span className="mx-2 text-sm font-normal">Home</span>
                                </a>
                                <a
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 2048 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                                        </svg>
                                    </span>
                                    <span className="mx-2 text-sm font-normal">
                                        Refered Projects{' '}
                                        <span className="p-1 ml-4 rounded-lg w-4 h-2 bg-gray-200 text-gray-400 text-xs">
                                            0
                                        </span>
                                    </span>
                                </a>
                                <a
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z" />
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">Resources</span>
                                </a>
                                <a
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 2048 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zm743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zm-236-507q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zm635 507q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zm-266-397q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zm592 561q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z" />
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">Store feedback</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col w-full md:space-y-4">
                    <header className="w-full h-16 z-40 flex items-center justify-between">
                        <div className="block lg:hidden ml-6">
                            <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
                                <svg
                                    width="20"
                                    height="20"
                                    className="text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                            <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                                <button className="flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md">
                                    <svg
                                        width="20"
                                        height="20"
                                        className=""
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
                                    </svg>
                                </button>
                                <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md">
                                    <svg
                                        width="20"
                                        height="20"
                                        className="text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z" />
                                    </svg>
                                </button>
                                <span className="w-1 h-8 rounded-lg bg-gray-200"></span>
                                <Avatar size="small" />
                                <button className="flex items-center text-gray-500 dark:text-white text-md">
                                    Charlie R
                                    <svg
                                        width="20"
                                        height="20"
                                        className="ml-2 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                            Good afternoom, Charlie
                        </h1>
                        <h2 className="text-md text-gray-400">
                            Here's what's happening with your ambassador account today.
                        </h2>
                        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                            <div className="w-full md:w-6/12">
                                <SimpleLevelsCard />
                            </div>
                            <div className="flex items-center w-full md:w-1/2 space-x-4">
                                <div className="w-1/2">
                                    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                        <p className="text-2xl text-black dark:text-white font-bold">12</p>
                                        <p className="text-gray-400 text-sm">Active projects</p>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                        <p className="text-2xl text-black dark:text-white font-bold">$93.76</p>
                                        <p className="text-gray-400 text-sm">Commission in approval</p>
                                        <span className="rounded-full absolute p-4 bg-purple-500 top-2 right-4">
                                            <svg
                                                width="40"
                                                fill="currentColor"
                                                height="40"
                                                className="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center text-gray-400 text-md border-gray-300 border px-4 py-2 rounded-tl-sm rounded-bl-full rounded-r-full">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="mr-2 text-gray-400"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z" />
                                </svg>
                                Last month
                                <svg
                                    width="20"
                                    height="20"
                                    className="ml-2 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                                </svg>
                            </button>
                            <span className="text-sm text-gray-400">Compared to oct 1- otc 30, 2020</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Project Reffered
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">12</p>
                                        <span className="text-green-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            22%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200">
                                            <p>Unique URL</p>
                                            <div className="flex items-end text-xs">
                                                34
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    22%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Embedded form</p>
                                            <div className="flex items-end text-xs">
                                                13
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>New visitor</p>
                                            <div className="flex items-end text-xs">
                                                45
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    41%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Project Paid
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">23</p>
                                        <span className="text-green-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            12%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>User paid</p>
                                            <div className="flex items-end text-xs">
                                                21
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    20%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Income</p>
                                            <div className="flex items-end text-xs">
                                                10
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    2%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>Royal tees</p>
                                            <div className="flex items-end text-xs">
                                                434
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        New features
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">12</p>
                                        <span className="text-red-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3 rotate-180 transform"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            2%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Down</p>
                                            <div className="flex items-end text-xs">
                                                34
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    22%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Up</p>
                                            <div className="flex items-end text-xs">
                                                13
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>No developed</p>
                                            <div className="flex items-end text-xs">
                                                45
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    41%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Sign in
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">16</p>
                                        <span className="text-red-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3 transform rotate-180"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            14%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Amercia</p>
                                            <div className="flex items-end text-xs">
                                                43
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Europe</p>
                                            <div className="flex items-end text-xs">
                                                133
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    19%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>Asia</p>
                                            <div className="flex items-end text-xs">
                                                23
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    4%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Sales
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">9</p>
                                        <span className="text-green-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            34%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Templates</p>
                                            <div className="flex items-end text-xs">
                                                345
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    12%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Components</p>
                                            <div className="flex items-end text-xs">
                                                139
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>Icons</p>
                                            <div className="flex items-end text-xs">
                                                421
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    4%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                                    <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                        Maintenance
                                    </p>
                                    <div className="flex items-end space-x-2 my-6">
                                        <p className="text-5xl text-black dark:text-white font-bold">15</p>
                                        <span className="text-green-500 text-xl font-bold flex items-center">
                                            <svg
                                                width="20"
                                                fill="currentColor"
                                                height="20"
                                                className="h-3"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                            </svg>
                                            34%
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Cloud</p>
                                            <div className="flex items-end text-xs">
                                                123
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-red-500 rotate-180 transform"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    22%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                                            <p>Infra</p>
                                            <div className="flex items-end text-xs">
                                                134
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    9%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                                            <p>Office</p>
                                            <div className="flex items-end text-xs">
                                                23
                                                <span className="flex items-center">
                                                    <svg
                                                        width="20"
                                                        fill="currentColor"
                                                        height="20"
                                                        className="h-3 text-green-500"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
                                                    </svg>
                                                    41%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default KpiProject;
