import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Forms: FC = () => {
  const formSections = [
    {
      title: "Input",
      items: 9,
      img: "images/sections/inputtext.svg",
      link: "/components/inputtext",
    },
    {
      title: "Select",
      items: 4,
      img: "images/sections/inputselect.svg",
      link: "/components/inputselect",
    },
    {
      title: "Toggle",
      items: 3,
      img: "images/sections/toggle.svg",
      link: "/components/toggle",
    },
    {
      title: "Layout",
      items: 10,
      img: "images/sections/form.svg",
      link: "/components/form",
    },
  ];

  return <SectionDesc id="forms" items={formSections} title="Forms" />;
};

export default Forms;
