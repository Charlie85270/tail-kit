import React from "react";
import InputText from "../inputtext/InputText";
import Button from "../../elements/buttons/Button";

const LoginWithBackground = () => {
  return (
    <div className="h-screen w-full font-sans bg-landscape bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
              <p className="text-white mb-8 font-light text-center text-2xl">
                Login
              </p>
              <div className="mb-2">
                <InputText placeholder="email" />
              </div>
              <div className="mb-2">
                <InputText placeholder="password" type="password" />
              </div>

              <div className="mt-4 items-center flex justify-between">
                <Button submit={true} color="indigo" label="Validate" />
              </div>
              <div className="text-center">
                <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-gray-800">
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
