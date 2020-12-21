import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Pagesection: FC = () => {
  const pageSections = [
    {
      title: "CTA",
      items: 8,
      img: "images/sections/cta.svg",
      link: "/components/cta",
    },
    {
      title: "Testimonial",
      items: 6,
      img: "images/sections/testimonial.svg",
      link: "/components/testimonial",
    },
    {
      title: "Profile",
      items: 8,
      img: "images/sections/profile.svg",
      link: "/components/profile",
    },
    {
      title: "Team",
      items: 6,
      img: "images/sections/team.svg",
      link: "/components/team",
    },
    {
      title: "Faq",
      items: 2,
      img: "images/sections/faq.svg",
      link: "/components/faq",
    },
    {
      title: "Feature",
      items: 5,
      img: "images/sections/feature.svg",
      link: "/components/feature",
    },
  ];

  return (
    <SectionDesc id="pagesection" items={pageSections} title="Page sections" />
  );
};

export default Pagesection;
