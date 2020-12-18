import React from "react";
import Avatar from "../../elements/avatars/Avatar";

interface Props {
  size?: "small" | "normal" | "big" | "monster";
  name: string;
  img: string;
  job: string;
  desc: string;
}

const ShadowTeam = (props: Props) => {
  return (
    <div className="p-4 relative">
      <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
        <Avatar
          withBorder={true}
          size={props.size}
          type="rounded"
          img={props.img}
        />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
        <div className="text-center">
          <p className="text-2xl text-gray-800 dark:text-white">{props.name}</p>
          <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
            {props.job}
          </p>
          <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
            {props.desc}
          </p>
        </div>
        <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
          <a href="#">
            <i className="text-xl fab fa-facebook-f hover:text-gray-800 dark:hover:text-white transition-colors duration-200"></i>
          </a>
          <a href="#">
            <i className="text-xl fab fa-twitter hover:text-gray-800 dark:hover:text-white transition-colors duration-200"></i>
          </a>
          <a href="#">
            <i className="text-xl fab fa-github hover:text-gray-800 dark:hover:text-white transition-colors duration-200"></i>
          </a>
          <a href="#">
            <i className="text-xl fab fa-linkedin-in hover:text-gray-800 dark:hover:text-white transition-colors duration-200"></i>
          </a>
          <a href="#">
            <i className="text-xl fab fa-amazon hover:text-gray-800 dark:hover:text-white transition-colors duration-200"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ShadowTeam;
