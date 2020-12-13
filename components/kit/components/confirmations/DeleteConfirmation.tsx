import React, { FC } from "react";
const DeleteConfirmation: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl p-4 bg-white w-64 m-auto">
      <div className="w-full h-full text-center">
        <div className="flex h-full flex-col justify-between">
          <i className="mt-4 fas fa-trash-alt w-12 h-12 m-auto text-indigo-500" />
          <p className="text-gray-800 text-xl font-bold mt-4">Remove card</p>
          <p className="text-gray-600 text-xs py-2 px-6">
            Are you sure you want to delete this card ?{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DeleteConfirmation;
