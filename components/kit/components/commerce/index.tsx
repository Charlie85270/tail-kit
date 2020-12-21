import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Commerce: FC = () => {
  const commerceSections = [
    {
      title: "Pricing card",
      items: 8,
      img: "images/sections/pricing.svg",
      link: "/components/pricing",
    },
    {
      title: "Shopping card",
      items: 7,
      img: "images/sections/shopping.svg",
      link: "/components/shopping",
    },
  ];

  return (
    <SectionDesc id="commerce" items={commerceSections} title="Commerce" />
  );
};

export default Commerce;
