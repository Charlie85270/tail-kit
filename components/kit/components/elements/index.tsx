import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Elements: FC = () => {
  const elementsSection = [
    {
      title: "Buttons",
      items: 12,
      img: "images/sections/button.svg",
      link: "/components/buttons",
    },
    {
      title: "Badges",
      items: 7,
      img: "images/sections/badges.svg",
      link: "/components/badges",
    },
    {
      title: "Avatar",
      items: 7,
      img: "images/sections/avatar.svg",
      link: "/components/avatar",
    },
    {
      title: "DropDown Menu",
      items: 5,
      img: "images/sections/ddm.svg",
      link: "/components/ddm",
    },
  ];

  return <SectionDesc id="elements" items={elementsSection} title="Elements" />;
};

export default Elements;
