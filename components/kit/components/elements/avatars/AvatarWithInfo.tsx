import React from "react";

interface Props {
  withBorder?: boolean;
}
const AvatarWithInfo = ({ withBorder }: Props) => {
  return (
    <a href="#" className="relative block">
      <img
        alt="profil"
        src="/images/person/1.jpg"
        className={`rounded-full h-16 w-16 ${
          withBorder ? " border-2 border-white" : ""
        }`}
      />
      <span className="absolute w-3 border-2 left-1/2 -bottom-2 transform -translate-x-1/2 border-white h-3 bg-green-500 rounded-full"></span>
    </a>
  );
};
export default AvatarWithInfo;
