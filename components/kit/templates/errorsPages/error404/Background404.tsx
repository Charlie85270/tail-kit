import React from 'react';

const Background404 = () => {
    return (
        <div className="relative h-screen overflow-hidden bg-indigo-900">
            <img src="/images/landscape/8.svg" className="absolute object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-25"></div>

            <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                <div className="relative z-10 flex flex-col items-center w-full font-mono">
                    <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
                        You're alone here
                    </h1>

                    <p className="font-extrabold text-white text-8xl my-44 animate-bounce">404</p>
                </div>
            </div>
        </div>
    );
};
export default Background404;
