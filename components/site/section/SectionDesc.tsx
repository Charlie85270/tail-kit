import React from "react";
import Link from "next/link";

interface Props {
  items: section[];
  title: string;
  id: string;
}

interface section {
  title: string;
  items: number;
  img: string;
  link: string;
}

const SectionDesc = ({ title, items, id }: Props) => {
  return (
    <div className="mb-8" id={id}>
      <h1 className="w-full text-left text-2xl font-light mb-4 text-gray-600">
        {title}
      </h1>

      <div className="flex w-full gap-0 md:gap-4 flex-wrap justify-evenly md:justify-start items-center">
        {items.map((section) => {
          return (
            <div
              key={section.title}
              className="hover:opacity-80 border rounded-lg w-1/3 m-2 md:m-0  md:w-1/5"
            >
              <Link href={section.link}>
                <a className="">
                  <img
                    src={section.img}
                    alt={section.title}
                    className="rounded-lg w-60 md:h-36 opacity-50 hover:opacity-100"
                  />
                  <p className="text-gray-600 text-md p-2">
                    {section.title}{" "}
                    <span className="text-gray-400 font-thin text-sm">
                      ({section.items} components)
                    </span>
                  </p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SectionDesc;
