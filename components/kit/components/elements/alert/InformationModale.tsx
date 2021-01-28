import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    withCloseBtn?: boolean;
    onClose: () => null;
    withFooter?: boolean;
}

const InformationModale = ({ children, withCloseBtn, onClose, withFooter }: Props) => {
    return (
        <div className="relative">
            <div className="h-screen w-full z-10 inset-0 overflow-y-auto">
                <div className="absolute w-full h-full inset-0 bg-gray-500 opacity-75"></div>

                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>

                    <div
                        className="inline-block relative overflow-hidden transform transition-all sm:align-middle sm:max-w-lg"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div>
                            <div className={`${withFooter ? 'rounded-t-lg' : 'rounded-lg'} p-8 bg-white shadow`}>
                                {withCloseBtn && (
                                    <div className="absolute right-4 top-4">
                                        <button
                                            onClick={() => onClose}
                                            className="bg-transparent border border-transparent"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="h-6 w-6 text-gray-700"
                                                viewBox="0 0 1792 1792"
                                            >
                                                <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                {children}
                            </div>
                            {withFooter && (
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-lg">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InformationModale;
