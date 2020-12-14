import React, { FC } from "react";
const LargeBadgeIcon: FC = () => {
  return (
    <span className="w-full flex items-center px-4 py-1 text-base rounded-full text-red-600 bg-red-200">
      <i className="fas fa-voicemail mr-2"></i> Voice
    </span>
  );
};
export default LargeBadgeIcon;
