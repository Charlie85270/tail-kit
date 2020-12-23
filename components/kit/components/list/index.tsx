import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const ListPage: FC = () => {
  const tableSections = [
    {
      title: "Tables",
      items: 6,
      img: "images/sections/table.svg",
      link: "/components/table",
    },
    {
      title: "Lists",
      items: 11,
      img: "images/sections/list.svg",
      link: "/components/list",
    },
  ];

  return <SectionDesc id="list" items={tableSections} title="List" />;
};

export default ListPage;
