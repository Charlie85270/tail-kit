import React from "react";
import Avatar from "../../elements/avatars/Avatar";
import InputText from "../inputtext/InputText";
import Button from "../../elements/buttons/Button";

const UserInfoForm = () => {
  return (
    <section className="bg-gray-100 bg-opacity-50 h-screen">
      <form className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-lg">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <Avatar />
              <h1 className="text-gray-600">Charlie Vérole</h1>
            </div>
          </div>
        </div>
        <div className="bg-white space-y-6">
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
            <div className="md:w-2/3 max-w-sm mx-auto">
              <InputText placeholder="Email" />
            </div>
          </div>

          <hr />
          <div className="md:inline-flex space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
              <div>
                <InputText placeholder="Name" />
              </div>
              <div>
                <InputText placeholder="Phone number" />
              </div>
            </div>
          </div>

          <hr />
          <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
            <h2 className="md:w-4/12 max-w-sm mx-auto">Change password</h2>

            <div className="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
              <InputText placeholder="Password" />
            </div>

            <div className="md:w-3/12 text-center md:pl-6">
              <Button color="pink" label="Change" />
            </div>
          </div>

          <hr />
          <div className="w-full md:w-1/3 px-4 pb-4 ml-auto text-gray-500">
            <Button submit={true} color="blue" label="Save" />
          </div>
        </div>
      </form>
    </section>
  );
};
export default UserInfoForm;
