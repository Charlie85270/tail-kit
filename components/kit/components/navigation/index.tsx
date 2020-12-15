import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Navigation: FC = () => {
  const formSections = [
    {
      title: "Header",
      items: 8,
      img: "images/sections/header.svg",
      link: "/components/header",
    },
    {
      title: "Footer",
      items: 11,
      img: "images/sections/footer.svg",
      link: "/components/footer",
    },
  ];

  return <SectionDesc id="forms" items={formSections} title="Navigation" />;
};

export default Navigation;
