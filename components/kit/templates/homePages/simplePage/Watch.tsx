import React from 'react';
import WatchCta from '../../../components/pagesection/cta/WatchCta';

const WatchLandingPage = () => {
    return (
        <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
            <header className="z-30 flex items-center w-full h-24 sm:h-32">
                <div className="container flex items-center justify-between px-6 mx-auto">
                    <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">Watch.ME</div>
                    <div className="flex items-center">
                        <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                            <a href="#" className="flex px-6 py-2">
                                Home
                            </a>
                            <a href="#" className="flex px-6 py-2">
                                Watch
                            </a>
                            <a href="#" className="flex px-6 py-2">
                                Product
                            </a>
                            <a href="#" className="flex px-6 py-2">
                                Contact
                            </a>
                            <a href="#" className="flex px-6 py-2">
                                Carrer
                            </a>
                        </nav>
                        <button className="flex flex-col ml-4 lg:hidden">
                            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                        </button>
                    </div>
                </div>
            </header>
            <WatchCta />
        </main>
    );
};
export default WatchLandingPage;
