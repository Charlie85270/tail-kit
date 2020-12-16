import React from "react";
import Avatar from "../../elements/avatars/Avatar";
import SimpleTestimonial from "./SimpleTestimonial";

const MultipleTestimonial = () => {
  return (
    <div className="w-full text-justify flex flex-col md:flex-row mb-8 md:mb-0 flex-between items-center p-8">
      <SimpleTestimonial />

      <SimpleTestimonial />

      <SimpleTestimonial />
    </div>
  );
};

export default MultipleTestimonial;
