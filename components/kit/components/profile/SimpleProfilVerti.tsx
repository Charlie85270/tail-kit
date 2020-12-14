import React, { FC } from "react";
import Avatar from "../elements/avatars/Avatar";

const SimpleProfilVerti: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl w-36 p-2 py-6 bg-white">
      <div className="flex flex-col items-center justify-center">
        <Avatar />

        <p className="text-gray-800 text-xl font-medium mb-2 mt-2">Charlie</p>
        <p className="text-gray-400 text-xs">FullStack dev</p>
      </div>
    </div>
  );
};
export default SimpleProfilVerti;
