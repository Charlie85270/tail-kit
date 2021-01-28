import React from 'react';
import Avatar from '../../elements/avatars/Avatar';
import InputText from '../inputtext/InputText';
import Button from '../../elements/buttons/Button';

const UserInfoForm = () => {
    return (
        <section className="h-screen bg-gray-100 bg-opacity-50">
            <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
                <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4">
                            <Avatar />
                            <h1 className="text-gray-600">Charlie</h1>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 bg-white">
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <InputText placeholder="Email" id="user-info-email" />
                        </div>
                    </div>

                    <hr />
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
                        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                            <div>
                                <InputText placeholder="Name" id="user-info-name" />
                            </div>
                            <div>
                                <InputText placeholder="Phone number" id="user-info-phone" />
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-4/12">Change password</h2>

                        <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                            <InputText placeholder="Password" id="user-info-password" />
                        </div>

                        <div className="text-center md:w-3/12 md:pl-6">
                            <Button color="pink" label="Change" />
                        </div>
                    </div>

                    <hr />
                    <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <Button submit={true} color="blue" label="Save" />
                    </div>
                </div>
            </form>
        </section>
    );
};
export default UserInfoForm;
