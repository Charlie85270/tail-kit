import React from "react";
import Avatar from "../../elements/avatars/Avatar";
import SimpleTestimonial from "./SimpleTestimonial";

interface Props {
  isDark?: boolean;
}

const MultipleTestimonial = (props: Props) => {
  const bg = props.isDark ? "bg-gray-800" : "bg-white";
  const txt = props.isDark ? "text-white" : "text-gray-800";
  const desc = props.isDark ? "text-gray-50" : "text-gray-600";
  return (
    <div
      className={`${bg} w-full text-justify flex flex-col md:flex-row mb-8 md:mb-0 flex-between items-center p-8`}
    >
      <SimpleTestimonial
        backgroundColor={bg}
        textColor={txt}
        nameColor={txt}
        descColor={desc}
      />

      <SimpleTestimonial
        backgroundColor={bg}
        textColor={txt}
        nameColor={txt}
        descColor={desc}
      />

      <SimpleTestimonial
        backgroundColor={bg}
        textColor={txt}
        nameColor={txt}
        descColor={desc}
      />
    </div>
  );
};

export default MultipleTestimonial;
