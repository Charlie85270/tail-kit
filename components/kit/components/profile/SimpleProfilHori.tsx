import React, { FC } from "react";
import Avatar from "../elements/avatars/Avatar";

const SimpleProfilHori: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl w-52 p-2 py-4 bg-white">
      <div className="flex flex-row items-start gap-6">
        <Avatar />

        <div>
          <p className="text-gray-800 text-xl font-medium">Charlie</p>
          <p className="text-gray-400 text-xs">FullStack dev</p>
        </div>
      </div>
    </div>
  );
};
export default SimpleProfilHori;
