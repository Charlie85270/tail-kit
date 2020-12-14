import React from "react";

interface Props {
  withBorder?: boolean;
}
const Avatar = ({ withBorder }: Props) => {
  return (
    <a href="#">
      <img
        alt="profil"
        src="/images/person/1.jpg"
        className={`rounded-full h-16 w-16 ${
          withBorder ? " border-2 border-white" : ""
        }`}
      />
    </a>
  );
};
export default Avatar;
