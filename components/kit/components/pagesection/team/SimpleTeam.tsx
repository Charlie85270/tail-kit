import React from "react";
import Avatar from "../../elements/avatars/Avatar";

interface Props {
  size?: "small" | "normal" | "big" | "monster";
  name: string;
  img: string;
  job: string;
  desc: string;
}

const SimpleTeam = (props: Props) => {
  return (
    <div className="p-4">
      <div className="text-center mb-4 opacity-90">
        <Avatar size={props.size} img={props.img} />
      </div>
      <div className="text-center">
        <p className="text-2xl text-gray-800 dark:text-white">{props.name}</p>
        <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
          {props.job}
        </p>
        <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
          {props.desc}
        </p>
      </div>
      <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
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
  );
};
export default SimpleTeam;
