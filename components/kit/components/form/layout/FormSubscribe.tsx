import React from 'react';
import InputText from '../inputtext/InputText';

interface Props {
    label: string;
    placeholder: string;
}

const FormSubscribe = ({ label, placeholder }: Props) => {
    return (
        <form className="flex w-full max-w-sm space-x-3">
            <InputText placeholder={placeholder} id={`"form-subscribe-${label}`} />
            <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
            >
                {label}
            </button>
        </form>
    );
};
export default FormSubscribe;
