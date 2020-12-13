import React, { FC } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Link from "next/link";

const ComponentsPage: FC = () => {
  const sections = [
    {
      title: "Elements",
      items: 10,
      img: "images/sections/button.svg",
      link: "/components/elements",
    },
    {
      title: "Profile",
      items: 9,
      img: "images/sections/profile.svg",
      link: "/components/profile",
    },
    {
      title: "Pricing",
      items: 3,
      img: "images/sections/pricing.svg",
      link: "/components/pricing",
    },
  ];

  return (
    <AppLayout>
      <h1 className="w-full text-left text-4xl mb-8">Components</h1>
      <div className="flex justify-between items-start">
        <div className="flex w-2/3 gap-4">
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
                    {section.title}{" "}
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
