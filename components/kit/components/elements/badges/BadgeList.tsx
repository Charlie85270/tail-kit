import React, { FC } from "react";
const BadgeList: FC = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <span className="w-full px-4 py-1 text-base rounded-full text-red-600 bg-red-200">
          Starter
        </span>
      </li>
      <li>
        <span className="w-full px-4 py-1 text-base rounded-full text-yellow-600 bg-yellow-200">
          Novice
        </span>
      </li>
      <li>
        <span className="w-full px-4 py-1 text-base rounded-full text-green-600 bg-green-200">
          Expert
        </span>
      </li>
    </ul>
  );
};
export default BadgeList;
