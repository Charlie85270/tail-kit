import React from 'react';

interface Props {
    showOne?: boolean;
}

const MultipleShoppingCard = (props: Props) => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className="flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-yellow-500 rounded-lg max-w-xs shadow-lg">
                <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                    <rect
                        x="159.52"
                        y="175"
                        width="152"
                        height="152"
                        rx="8"
                        transform="rotate(-45 159.52 175)"
                        fill="#f3c06b"
                    />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#f3c06b" />
                </svg>
                <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                    <picture>
                        <source srcSet="/images/object/5.webp" type="image/webp" />
                        <source srcSet="/images/object/5.png" />
                        <img className="relative w-40" src="/images/object/5.png" alt="shopping item" />
                    </picture>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Indoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Peace Lily</span>
                        <span className="bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $36.00
                        </span>
                    </div>
                </div>
            </div>
            {!props.showOne && (
                <>
                    <div className="flex-shrink-0 mx-2 mb-6 sm:mb-0 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                            <rect
                                x="159.52"
                                y="175"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 159.52 175)"
                                fill="#6da3fb"
                            />
                            <rect
                                y="107.48"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 0 107.48)"
                                fill="#6da3fb"
                            />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                            <img className="relative w-40" src="/images/object/6.png" alt="shopping" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <span className="block opacity-75 -mb-1">Outdoor</span>
                            <div className="flex justify-between">
                                <span className="block font-semibold text-xl">Monstera</span>
                                <span className="bg-white rounded-full text-blue-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                    $45.00
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 mx-2 -mb-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                            <rect
                                x="159.52"
                                y="175"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 159.52 175)"
                                fill="#a17cf3"
                            />
                            <rect
                                y="107.48"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 0 107.48)"
                                fill="#a17cf3"
                            />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                            <img className="relative w-40" src="/images/object/7.png" alt="shopping" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <span className="block opacity-75 -mb-1">Outdoor</span>
                            <div className="flex justify-between">
                                <span className="block font-semibold text-xl">Oak Tree</span>
                                <span className="bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                    $68.50
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export default MultipleShoppingCard;
