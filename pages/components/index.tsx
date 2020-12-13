import React, { FC } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Link from "next/link";

const ComponentsPage: FC = () => {
  const sections = [
    {
      title: "Profile",
      items: 9,
      img: "images/sections/profile.svg",
      link: "/components/profile",
    },
  ];

  return (
    <AppLayout>
      <h1 className="w-full text-left text-4xl mb-8">Components</h1>
      <div className="flex justify-between items-start">
        <div className="flex w-2/3">
          {sections.map((section) => {
            return (
              <Link href={section.link}>
                <a className="hover:opacity-80 border rounded-lg">
                  <img
                    src={section.img}
                    alt={section.title}
                    className="rounded-lg"
                  />
                  <p className="text-gray-800 text-xl p-2">
                    Profile{" "}
                    <span className="text-gray-400 text-sm">
                      ({section.items} components)
                    </span>
                  </p>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default ComponentsPage;
