import React from 'react';

interface Props {
    type?: string;
    label?: string;
    required?: boolean;
    error?: string;
    icon?: JSX.Element;
    helper?: string;
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    square?: boolean;
    withForceIndications?: boolean;
    id?: string;
}

const InputText = (props: Props) => {
    return (
        <div
            className={`${props.helper || props.icon ? 'flex' : ''} relative ${
                props.disabled ? 'opacity-50 pointer-events-none' : ''
            }`}
        >
            {props.label && (
                <label htmlFor={props.id} className="text-gray-700">
                    {props.label} {props.required && <span className="text-red-500 required-dot">*</span>}
                </label>
            )}
            {(props.helper || props.icon) && (
                <span
                    className={`${
                        props.square ? '' : 'rounded-l-md'
                    } inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm`}
                >
                    {props.helper || props.icon}
                </span>
            )}
            <input
                id={props.id}
                disabled={props.disabled}
                className={`${props.error ? 'ring-red-500 ring-2' : ''}${
                    props.helper || props.icon
                        ? !props.square
                            ? ' rounded-r-lg'
                            : ''
                        : !props.square
                        ? ' rounded-lg border-transparent'
                        : ''
                } flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                type={props.type || 'text'}
                name={props.name}
                placeholder={props.placeholder}
            />
            {props.withForceIndications && (
                <>
                    <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
                        <div className="h-full col-span-3 bg-green-500 rounded"></div>
                        <div className="h-full col-span-3 bg-green-500 rounded"></div>
                        <div className="h-full col-span-3 bg-green-500 rounded"></div>
                        <div className="h-full col-span-3 bg-gray-200 rounded dark:bg-dark-1"></div>
                    </div>
                    <div className="mt-2 text-green-500">Valid password</div>
                </>
            )}
            {props.error && (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="currentColor"
                        className="absolute text-red-500 right-2 bottom-3"
                        viewBox="0 0 1792 1792"
                    >
                        <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
                    </svg>

                    <p className="absolute text-sm text-red-500 -bottom-6">{props.error}</p>
                </>
            )}
        </div>
    );
};

export default InputText;
