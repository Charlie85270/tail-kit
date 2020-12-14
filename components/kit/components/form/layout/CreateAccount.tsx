import React from "react";
import Button from "../../elements/buttons/Button";
import InputText from "../inputtext/InputText";
import Checkbox from "../toggle/Checkbox";

const CreateAccount = () => {
  return (
    <div className="flex flex-col bg-white shadow px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg max-w-md">
      <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800 mb-2">
        Create a new account
      </div>
      <span className="flex-items-center text-gray-500 justify-center text-center text-sm">
        Already have an account ?
        <a
          href="#"
          target="_blank"
          className="text-blue-500 hover:text-blue-700 text-sm underline"
        >
          Sign in
        </a>
      </span>

      <div className="mt-8">
        <form action="#">
          <div className="flex flex-col mb-2">
            <InputText name="pseudo" type="text" placeholder="Pseudo" />
          </div>
          <div className="flex gap-4 mb-2">
            <InputText name="First name" type="text" placeholder="First name" />
            <InputText name="Last name" type="text" placeholder="Last name" />
          </div>
          <div className="flex flex-col mb-2">
            <InputText type="text" placeholder="Email" />
          </div>

          <div className="flex w-full">
            <Button label="Login" color="purple" />
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Checkbox
          noShadow={true}
          label="I have read and agree term of services "
        />
      </div>
    </div>
  );
};
export default CreateAccount;
