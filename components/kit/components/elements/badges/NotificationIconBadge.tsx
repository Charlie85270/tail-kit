import React, { FC } from "react";
const NotificationIconBadge: FC = () => {
  return (
    <button type="button" className="text-md text-white text-4xl relative">
      <span className="w-4 h-4 rounded-full absolute leading text-xs bg-red-500">
        2
      </span>
      <i className="fas fa-envelope "></i>
    </button>
  );
};
export default NotificationIconBadge;
