import React from "react";
import Head from "next/head";

interface IProps {
  pageTitle: string;
  description: string;
}

const Meta = ({ pageTitle, description }: IProps) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" property="og:description" content={description} />
      <meta name="image" property="og:image" content="https://www.tailwind-kit.com/home.png" />
      <link rel="icon" type="image/svg+xml" href="/icons/rocket.svg" />
      <link rel="alternate icon" href="/icons/favicon.ico" />
      <link rel="mask-icon" href="/icons/rocket.svg" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="200 free and open source Tailwind UI components" />
      <meta property="og:url" content="https://www.tailwind-kit.com" />
      <link rel="canonical" href="https://www.tailwind-kit.com" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default Meta;
