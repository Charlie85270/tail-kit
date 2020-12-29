import React, { FC } from "react";
import Badge from "./Badge";
const BadgeList: FC = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Badge label="refused" color="bg-red-200" textColor="text-red-600" />
      </li>
      <li>
        <Badge label="pending" color="bg-yellow-200" textColor="text-yellow-600" />
      </li>
      <li>
        <Badge label="accepted" color="bg-green-200" textColor="text-green-600" />
      </li>
    </ul>
  );
};
export default BadgeList;
