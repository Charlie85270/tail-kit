import React from "react";
import InputText from "../inputtext/InputText";
import InputArea from "../inputtext/InputArea";
import Button from "../../elements/buttons/Button";

const ContactForm = () => {
  return (
    <form className="flex w-full max-w-sm space-x-3">
      <div className="max-w-2xl bg-white dark:bg-gray-800 py-10 px-5 m-auto w-full mt-10 shadow rounded-lg">
        <div className="text-3xl mb-6 font-light text-gray-800 dark:text-white text-center">Contact us !</div>

        <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <div className="col-span-2 lg:col-span-1">
            <InputText placeholder="Name" />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <InputText placeholder="email" />
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
