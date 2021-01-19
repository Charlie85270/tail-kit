import React from "react";
import Head from "next/head";

const Meta = ({ pageTitle, description }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta
        name="image"
        property="og:image"
        content="https://www.tailwind-kit.com/home.png"
      />
      <link rel="icon" type="image/svg+xml" href="/icons/rocket.svg" />
      <link rel="mask-icon" href="/icons/rocket.svg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="https://www.tailwind-kit.com/" />
      <meta
        name="twitter:title"
        content="200 free and open source Tailwind UI components"
      />
      <meta
        name="twitter:description"
        content="Over 200 free and open source components and templates for tailwind css to build beautiful UI. All are fully coded and work with React, Angular and VueJS."
      />
      <meta
        name="twitter:image"
        content="https://www.tailwind-kit.com/home.png"
      />
      <meta
        name="og:title"
        property="og:title"
        content="200 free and open source Tailwind UI components"
      />
      <meta property="og:url" content="https://www.tailwind-kit.com" />
      <link rel="canonical" href="https://www.tailwind-kit.com" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};
export default Meta;
