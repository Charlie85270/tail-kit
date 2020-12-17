import React from "react";
import InputText from "../inputtext/InputText";
import Button from "../../elements/buttons/Button";

const DesignLogin = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a href="#" className="bg-black text-white font-bold text-xl p-4">
            Design.
          </a>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <InputText
                square={true}
                icon="far fa-envelope"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col pt-4 mb-12">
              <InputText
                square={true}
                icon="fas fa-unlock-alt"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="py-2 px-4 bg-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold py-2 px-4 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
            >
              <span className="w-full">Submit</span>
            </button>
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Don't have an account?{" "}
              <a href="register.html" className="underline font-semibold">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="/images/object/9.jpg"
        />
      </div>
    </div>
  );
};
export default DesignLogin;
