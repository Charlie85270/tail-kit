import React, { FC } from "react";
import SectionDesc from "../../../site/section/SectionDesc";

const Pagesection: FC = () => {
  const pageSections = [
    {
      title: "CTAs",
      items: 8,
      img: "images/sections/cta.svg",
      link: "/components/cta",
    },
    {
      title: "Testimonials",
      items: 6,
      img: "images/sections/testimonial.svg",
      link: "/components/testimonial",
    },
    {
      title: "Profiles",
      items: 8,
      img: "images/sections/profile.svg",
      link: "/components/profile",
    },
    {
      title: "Teams",
      items: 6,
      img: "images/sections/team.svg",
      link: "/components/team",
    },
    {
      title: "FAQs",
      items: 2,
      img: "images/sections/faq.svg",
      link: "/components/faq",
    },
    {
      title: "Features",
      items: 5,
      img: "images/sections/feature.svg",
      link: "/components/feature",
    },
    {
      title: "Blogs",
      items: 5,
      img: "images/sections/blog.svg",
      link: "/components/blog",
    },
  ];

  return (
    <SectionDesc id="pagesection" items={pageSections} title="Page sections" />
  );
};

export default Pagesection;
