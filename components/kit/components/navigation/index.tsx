import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Navigation: FC = () => {
  const formSections = [
    {
      title: "Header",
      items: 9,
      img: "images/sections/header.svg",
      link: "/components/header",
    },
    {
      title: "Footer",
      items: 11,
      img: "images/sections/footer.svg",
      link: "/components/footer",
    },
    {
      title: "Sidebar",
      items: 12,
      img: "images/sections/sidebar.svg",
      link: "/components/sidebar",
    },
  ];

  return (
    <SectionDesc id="navigation" items={formSections} title="Navigation" />
  );
};

export default Navigation;
