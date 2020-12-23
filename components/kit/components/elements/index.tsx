import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Elements: FC = () => {
  const elementsSection = [
    {
      title: "Buttons",
      items: 15,
      img: "images/sections/button.svg",
      link: "/components/buttons",
    },
    {
      title: "Badges",
      items: 11,
      img: "images/sections/badges.svg",
      link: "/components/badges",
    },
    {
      title: "Avatars",
      items: 11,
      img: "images/sections/avatar.svg",
      link: "/components/avatar",
    },
    {
      title: "Menu list",
      items: 7,
      img: "images/sections/ddm.svg",
      link: "/components/ddm",
    },
    {
      title: "Alerts",
      items: 11,
      img: "images/sections/banner.svg",
      link: "/components/alert",
    },
    {
      title: "Datas display",
      items: 10,
      img: "images/sections/data.svg",
      link: "/components/data",
    },
    {
      title: "Progress bars",
      items: 5,
      img: "images/sections/progress.svg",
      link: "/components/progress",
    },
  ];

  return <SectionDesc id="elements" items={elementsSection} title="Elements" />;
};

export default Elements;
