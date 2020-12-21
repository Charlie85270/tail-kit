import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const ListPage: FC = () => {
  const tableSections = [
    {
      title: "Table",
      items: 6,
      img: "images/sections/table.svg",
      link: "/components/table",
    },
    {
      title: "List",
      items: 10,
      img: "images/sections/list.svg",
      link: "/components/list",
    },
  ];

  return <SectionDesc id="table" items={tableSections} title="Table" />;
};

export default ListPage;
