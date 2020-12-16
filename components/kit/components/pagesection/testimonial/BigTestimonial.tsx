import React from "react";
import Avatar from "../../elements/avatars/Avatar";

interface Props {
  backgroundColor: string;
  textColor: string;
  nameColor: string;
  descColor?: string;
  withImage?: boolean;
  isVertical?: boolean;
  isLeft?: boolean;
}

const BigTestimonial = (props: Props) => {
  return (
    <div className={`${props.backgroundColor} w-full mx-auto p-8`}>
      <img src="/icons/rocket.svg" className="h-10 w-10 mb-8 m-auto" />

      <p
        className={`${props.textColor} w-full md:w-2/3 m-auto text-center text-lg md:text-3xl`}
      >
        <span className="font-bold text-indigo-500">“</span>
        To get social media testimonials like these, keep your customers engaged
        with your social media accounts by posting regularly yourself
        <span className="font-bold text-indigo-500">”</span>
      </p>
      <div className="flex items-center justify-center mt-8">
        <Avatar size="small" />
        <div className="flex ml-2 items-center justify-center">
          <span className={`font-semibold ${props.nameColor}  mr-2 text-lg`}>
            Jean Miguel
          </span>
          <span className="text-indigo-500 text-xl font-bold">/</span>
          <span className="text-gray-400 text-md ml-2">User of FastUI</span>
        </div>
      </div>
    </div>
  );
};

export default BigTestimonial;
