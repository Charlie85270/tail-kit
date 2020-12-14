import React, { FC } from "react";
import Button from "../../elements/buttons/Button";
const ClassicShoppingCard: FC = () => {
  return (
    <div className="flex bg-white rounded-lg shadow">
      <div className="flex-none w-48 relative">
        <img
          src="/images/object/8.jpg"
          alt=""
          className="absolute rounded-lg inset-0 w-full h-full object-cover"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl font-semibold">
            Classic Utility Jacket
          </h1>
          <div className="text-xl font-semibold text-gray-500">$110.00</div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            In stock
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6">
          <div className="space-x-2 flex">
            <label className="text-center">
              <input
                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-lg"
                name="size"
                type="radio"
                value="xs"
              />
              XS
            </label>
            <label className="text-center">
              <input
                className="w-6 h-6 flex items-center justify-center"
                name="size"
                type="radio"
                value="s"
              />
              S
            </label>
            <label className="text-center">
              <input
                className="w-6 h-6 flex items-center justify-center"
                name="size"
                type="radio"
                value="m"
              />
              M
            </label>
            <label className="text-center">
              <input
                className="w-6 h-6 flex items-center justify-center"
                name="size"
                type="radio"
                value="l"
              />
              L
            </label>
            <label className="text-center">
              <input
                className="w-6 h-6 flex items-center justify-center"
                name="size"
                type="radio"
                value="xl"
              />
              XL
            </label>
          </div>
          <a href="#" className="ml-auto text-sm text-gray-500 underline">
            Size Guide
          </a>
        </div>
        <div className="flex mb-4 text-sm font-medium">
          <Button label="Buy now" color="indigo" />
        </div>
        <p className="text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};
export default ClassicShoppingCard;
