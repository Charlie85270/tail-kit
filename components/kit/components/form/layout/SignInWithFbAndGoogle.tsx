import React from "react";
import Button from "../../elements/buttons/Button";
import InputText from "../inputtext/InputText";

const SignInWithFbAndGoogle = () => {
  return (
    <div className="flex flex-col bg-white shadow px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg w-full max-w-md">
      <div className="font-medium self-center text-xl sm:text-2xl  text-gray-800 mb-6">
        Login To Your Account
      </div>
      <div className="flex item-center gap-4">
        <Button label="Facebook" icon="fab fa-facebook-f" color="blue" />
        <Button label="Google" icon="fab fa-google" color="red" />
      </div>
      <div className="relative mt-10 h-px bg-gray-300">
        <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
          <span className="bg-white px-4 text-xs text-gray-500 ">
            Or Login With Email
          </span>
        </div>
      </div>
      <div className="mt-10">
        <form action="#" autoComplete="off">
          <div className="flex flex-col mb-2">
            <InputText icon="far fa-envelope" placeholder="Your email" />
          </div>
          <div className="flex flex-col mb-6">
            <InputText icon="fas fa-unlock-alt" placeholder="Your password" />
          </div>

          <div className="flex items-center mb-6 -mt-4">
            <div className="flex ml-auto">
              <a
                href="#"
                className="inline-flex font-thin text-xs sm:text-sm text-gray-500 hover:text-gray-700"
              >
                Forgot Your Password?
              </a>
            </div>
          </div>

          <div className="flex w-full">
            <Button label="Login" color="purple" />
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center mt-6">
        <a
          href="#"
          target="_blank"
          className="inline-flex items-center font-thin text-gray-500 hover:text-gray-700 text-xs text-center"
        >
          <span className="ml-2">You don't have an account?</span>
        </a>
      </div>
    </div>
  );
};
export default SignInWithFbAndGoogle;
