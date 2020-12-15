import React, { useState, FC } from "react";
import Link from "next/link";

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-light text-3xl">{title}</h1>

      <Link href="/components">
        <a className="w-28  px-4 py-2 text-base font-medium rounded-md text-white bg-black">
          <i className="fas fa-long-arrow-alt-left mr-4"></i>
          Back
        </a>
      </Link>
    </div>
  );
};
export default SectionHeader;
