import React from "react";
import Head from "next/head";

const Meta = ({ pageTitle, description }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/svg+xml" href="/icons/rocket.svg" />
      <link rel="alternate icon" href="/icons/favicon.ico" />
      <link rel="mask-icon" href="/icons/rocket.svg" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="Tailwind UI KIT" />
      <meta property="og:url" content="https://www.tailwind-kit.com" />
      <link rel="icon" type="image/svg" href="/images/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
      <link rel="canonical" href="https://www.tailwind-kit.com" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};
export default Meta;
