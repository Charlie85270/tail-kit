import React from 'react';
import Button from '../../elements/buttons/Button';
import InputText from '../inputtext/InputText';
import Checkbox from '../toggle/Checkbox';

const CreateAccount = () => {
    return (
        <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                Create a new account
            </div>
            <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                Already have an account ?
                <a href="#" target="_blank" className="text-sm text-blue-500 underline hover:text-blue-700">
                    Sign in
                </a>
            </span>

            <div className="p-6 mt-8">
                <form action="#">
                    <div className="flex flex-col mb-2">
                        <InputText name="pseudo" type="text" placeholder="Pseudo" id="create-account-pseudo" />
                    </div>
                    <div className="flex gap-4 mb-2">
                        <InputText
                            name="First name"
                            type="text"
                            placeholder="First name"
                            id="create-account-first-name"
                        />
                        <InputText name="Last name" type="text" placeholder="Last name" id="create-account-last-name" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <InputText type="text" placeholder="Email" id="create-account-email" />
                    </div>

                    <div className="flex w-full my-4">
                        <Button submit={true} label="Login" color="purple" />
                    </div>
                </form>
                <div className="flex items-center justify-center mt-6">
                    <Checkbox label="I have read and agree term of services " />
                </div>
            </div>
        </div>
    );
};
export default CreateAccount;
