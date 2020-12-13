import React, { FC } from "react";
import Avatar from "./Avatar";

const CoverAndButtonsProfilCard: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl w-64  bg-white">
      <img
        alt="profil"
        src="/images/landscape/1.jpg"
        className="rounded-t-lg h-28 w-full mb-4"
      />
      <div className="flex flex-col items-center justify-center p-4 -mt-16">
        <Avatar />

        <p className="text-gray-800 text-xl font-medium mt-2">Charlie</p>
        <p className="text-gray-400 text-xs">
          <i className="fas fa-map-marker-alt mr-2" />
          Nantes
        </p>
        <p className="text-gray-400 text-xs">FullStack dev</p>

        <div className="flex items-center justify-between gap-4 w-full mt-8">
          <button
            type="button"
            className="w-1/2 px-2 py-2 text-xs text-sm shadow rounded-lg text-white bg-gray-300 hover:bg-gray-400 "
          >
            Add friend
          </button>
          <button
            type="button"
            className="w-1/2 px-2 py-2 text-xs text-sm shadow rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 "
          >
            See profile
          </button>
        </div>
      </div>
    </div>
  );
};
export default CoverAndButtonsProfilCard;
