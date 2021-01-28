import React from 'react';
import InputText from '../inputtext/InputText';
import Button from '../../elements/buttons/Button';

const LoginWithBackground = () => {
    return (
        <div className="w-full h-screen font-sans bg-cover bg-landscape">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl">
                            <p className="mb-8 text-2xl font-light text-center text-white">Login</p>
                            <div className="mb-2">
                                <InputText placeholder="email" id="login-with-bg-email" />
                            </div>
                            <div className="mb-2">
                                <InputText placeholder="password" id="login-with-bg-password" />
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <Button submit={true} color="indigo" label="Validate" />
                            </div>
                            <div className="text-center">
                                <a className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                                    Create an account
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginWithBackground;
