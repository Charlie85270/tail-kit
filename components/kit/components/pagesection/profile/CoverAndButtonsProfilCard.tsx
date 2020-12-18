import React, { FC } from "react";
import Avatar from "../../elements/avatars/Avatar";
import Button from "../../elements/buttons/Button";

const CoverAndButtonsProfilCard: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800">
      <img
        alt="profil"
        src="/images/landscape/1.jpg"
        className="rounded-t-lg h-28 w-full mb-4"
      />
      <div className="flex flex-col items-center justify-center p-4 -mt-16">
        <Avatar />

        <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
          Charlie
        </p>
        <p className="text-gray-400 text-xs">
          <i className="fas fa-map-marker-alt mr-2" />
          Nantes
        </p>
        <p className="text-gray-400 text-xs">FullStack dev</p>

        <div className="flex items-center justify-between gap-4 w-full mt-8">
          <Button color="indigo" label="See profile" />
        </div>
      </div>
    </div>
  );
};
export default CoverAndButtonsProfilCard;
