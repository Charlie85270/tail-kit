import React from 'react';

const SimpleFolioHome = () => {
    return (
        <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
            <div className="hidden md:block absolute -bottom-32 -left-32 w-96 h-96">
                <div className="absolute text-extrabold text-xl right-12 z-20 text-start top-1/4">
                    <span className="text-7xl">🎨</span>
                    <p>Got a project ?</p>
                    <a href="#" className="underline">
                        Let's talk
                    </a>
                </div>

                <svg viewBox="0 0 200 200" className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#FFDBB9"
                        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>
            <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center">
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 1792 1792"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z" />
                        </svg>
                        <span className="text-xs ml-3 mt-1">CHARLIE-PRO@DESIGN.COM</span>
                    </div>
                    <div className="flex items-center">
                        <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                            <a href="#" className="py-2 px-6 flex hover:text-black">
                                Works
                            </a>
                            <a href="#" className="py-2 px-6 flex hover:text-black">
                                Resume
                            </a>
                            <a href="#" className="py-2 px-6 flex hover:text-black">
                                Services
                            </a>
                            <a href="#" className="py-2 px-6 flex hover:text-black">
                                Contact
                            </a>
                        </nav>
                        <button className="lg:hidden flex flex-col ml-4">
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                        </button>
                    </div>
                </div>
            </header>
            <div className="flex relative z-20 items-center">
                <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                    <div className="flex flex-col">
                        <img src="/images/person/11.webp" className="rounded-full w-28 mx-auto" />
                        <p className="text-3xl my-6 text-center dark:text-white">Hi, I'm Charlie 🤘</p>
                        <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                            Building digital products, brands, and experiences.
                        </h2>
                        <div className="flex items-center justify-center mt-4">
                            <a
                                href="#"
                                className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
                            >
                                CONNECT WITH ME
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default SimpleFolioHome;
