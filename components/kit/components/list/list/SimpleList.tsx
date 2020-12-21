import React from "react";
import Avatar from "../../elements/avatars/Avatar";

interface Props {
  withAction?: boolean;
  withEffect?: boolean;
}

const SimpleList = (props: Props) => {
  const lists = [
    {
      img: "/images/person/6.jpg",
      desc: "Developer",
      label: "Jean Marc",
      info: "Live in Paris with his father",
    },
    {
      img: "/images/person/10.jpg",
      desc: "Charlie Moi",
      label: "Designer",
      info: "Love last ketchup song",
    },
    {
      img: "/images/person/3.jpg",
      desc: "Marine Jeanne",
      label: "CEO",
      info: "Beer, beer, beer and beer",
    },
    {
      img: "/images/person/7.jpg",
      desc: "Boby PArk",
      label: "CTO",
      info: "Nothing to declare",
    },
  ];

  return (
    <div className="container flex mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul className="flex flex-col divide divide-y">
        {lists.map((el) => {
          return (
            <li className="flex flex-row">
              <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                  <Avatar size="small" img={el.img} />
                </div>
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium dark:text-white">{el.label}</div>
                  <div className="text-gray-600 dark:text-gray-200 text-sm">
                    {el.desc}
                  </div>
                </div>

                <div className="text-gray-600 dark:text-gray-200 text-xs">
                  6:00 AM
                </div>
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

export default SimpleList;
