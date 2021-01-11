import React, { FC } from "react";
import MultipleAvatar from "../avatars/MultipleAvatar";
const TaskCard: FC = () => {
  return (
    <div className="shadow-lg rounded max-w-md p-4 bg-white relative overflow-hidden">
      <a href="#" className="absolute w-full h-full"></a>
      <div className="w-full">
        <p className="text-gray-800 text-xl font-medium mb-2">
          Improve css design of the carousel
        </p>
        <p className="text-gray-400 text-xs font-medium mb-2">
          Sunday 13 october
        </p>
        <p className="text-gray-400 text-sm mb-4">
          You’ve been coding for a while now and know your way around a CSS
          file. You’re certainly no master, but with enough fiddling you can get
          where you want to go.
        </p>
        <div className="flex items-center justify-between">
          <p>Task progress</p>
          <p>33%</p>
        </div>
        <div className="w-full h-2 bg-gray-400 rounded-full mt-3 mb-6">
          <div
            className={`w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full`}
          ></div>
        </div>
        <div className="flex items-center">
          <MultipleAvatar size="small" />
          <span className="text-gray-500 ml-2">+ 4 more</span>
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
