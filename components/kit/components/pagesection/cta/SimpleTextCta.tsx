import React from "react";
import Button from "../../elements/buttons/Button";

interface Props {
  withDesc?: boolean;
  withImage?: boolean;
  isVertical?: boolean;
  twoButton?: boolean;
  isLeft?: boolean;
}

const SimpleTextCta = (props: Props) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 ${
        props.withImage ? "overflow-hidden relative" : ""
      }`}
    >
      <div
        className={`${
          props.isVertical
            ? props.isLeft
              ? "text-start"
              : "text-center"
            : "lg:flex lg:items-center lg:justify-between"
        } ${
          props.withImage ? "w-1/2" : "w-full mx-auto"
        } py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20`}
      >
        <h2
          className={`text-3xl font-extrabold text-black dark:text-white sm:text-4xl`}
        >
          <span className="block">Want to be millionaire ?</span>
          <span className={`"block text-indigo-500`}>It's today or never.</span>
        </h2>
        {props.withDesc && (
          <p
            className={`text-xl max-w-md mx-auto ${
              props.isVertical ? "mt-4" : ""
            } text-gray-300`}
          >
            I had noticed that both in the very poor and very rich extremes of
            society the mad were often allowed to mingle freely
          </p>
        )}
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div
            className={`${
              props.isVertical ? "mt-12" : ""
            } inline-flex rounded-md shadow`}
          >
            <Button label="Get started" isFat={true} color="indigo"></Button>
          </div>
          {props.twoButton && (
            <div className="ml-3 inline-flex rounded-md shadow">
              <Button label="Invite friend" isFat={true} color="gray" />
            </div>
          )}
        </div>
      </div>
      {props.withImage && (
        <img
          src="/images/car/1.jpg"
          className="absolute w-1/2 hidden lg:block right-0 top-0"
        />
      )}
    </div>
  );
};

export default SimpleTextCta;
