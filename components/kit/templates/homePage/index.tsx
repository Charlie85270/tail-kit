import React from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const HomePage = () => {
  const homeSection = [
    {
      title: "Products",
      items: 3,
      img: "images/sections/homePage2.png",
      link: "/templates/simpleHome",
    },
    {
      title: "Get Started",
      items: 3,
      img: "images/sections/homePage.png",
      link: "/templates/getStarted",
    },
  ];

  return (
    <SectionDesc
      hasCommingSoon={true}
      id="home"
      items={homeSection}
      title="Landing page"
    />
  );
};

export default HomePage;
