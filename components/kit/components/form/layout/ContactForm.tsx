import React from 'react';
import InputText from '../inputtext/InputText';
import InputArea from '../inputtext/InputArea';
import Button from '../../elements/buttons/Button';

const ContactForm = () => {
    return (
        <form className="flex w-full max-w-sm space-x-3">
            <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">Contact us !</div>

                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                        <InputText placeholder="Name" id="contact-form-name" />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <InputText placeholder="email" id="contact-form-email" />
                    </div>

                    <div className="col-span-2">
                        <InputArea />
                    </div>

                    <div className="col-span-2 text-right">
                        <Button submit={true} label="Send" color="indigo" />
                    </div>
                </div>
            </div>
        </form>
    );
};
export default ContactForm;
