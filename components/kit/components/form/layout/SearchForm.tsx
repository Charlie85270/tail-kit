import React from 'react';
import Button from '../../elements/buttons/Button';
import InputText from '../../../components/form/inputtext/InputText';

const SearchForm = () => {
    return (
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">Search criteria</span>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="w-full space-y-6">
                        <div className="w-full">
                            <InputText placeholder="Your price" id="search-form-price" />
                        </div>
                        <div className="w-full">
                            <InputText placeholder="Your location" id="search-form-location" />
                        </div>
                        <div className="w-full">
                            <InputText placeholder="Your name" id="search-form-name" />
                        </div>
                        <div>
                            <span className="block w-full rounded-md shadow-sm">
                                <Button label="Search" color="indigo" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p className="text-xs leading-5 text-gray-500">This data are display for information and can change</p>
            </div>
        </div>
    );
};
export default SearchForm;
