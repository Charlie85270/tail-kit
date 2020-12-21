import React from "react";
import Avatar from "../../elements/avatars/Avatar";

interface Props {
  withDesc?: boolean;
  withEffect?: boolean;
  withAction?: boolean;
}

const BlockList = (props: Props) => {
  const lists = [
    {
      img: "/images/person/6.jpg",
      desc: "Developer",
      label: "Jean Marc",
    },
    {
      img: "/images/person/10.jpg",
      desc: "Charlie Moi",
      label: "Designer",
    },
    {
      img: "/images/person/3.jpg",
      desc: "Marine Jeanne",
      label: "CEO",
    },
    {
      img: "/images/person/7.jpg",
      desc: "Boby PArk",
      label: "CTO",
    },
  ];

  return (
    <div className="container flex mx-auto w-full items-center justify-center">
      <ul className="flex flex-col">
        {lists.map((el) => {
          return (
            <li className="border-gray-400 flex flex-row mb-2">
              <div
                className={`${
                  props.withEffect
                    ? "transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg "
                    : "shadow border"
                }select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4`}
              >
                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                  <Avatar size="small" img={el.img} />
                </div>
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium dark:text-white">{el.label}</div>
                  <div className="text-gray-600 dark:text-gray-200 text-sm">
                    {el.desc}
                  </div>
                </div>
                {props.withDesc && (
                  <div className="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                  </div>
                )}
                {props.withAction && (
                  <button className="w-24 text-right">
                    <i className="fas hover:text-gray-800 dark:hover:text-white dark:text-gray-200 fa-chevron-right text-gray-500 mr-4" />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlockList;
