import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
    pageTitle: string;
    description: string;
}

const Meta = ({ pageTitle, description }: Props) => {
    const router = useRouter();

    const url = 'https://www.tailwind-kit.com';
    const path = router.asPath;

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" property="og:description" content={description} />
            <meta name="image" property="og:image" content={`${url}/home.png`} />
            <link rel="icon" type="image/svg+xml" href="/icons/rocket.svg" />
            <link rel="mask-icon" href="/icons/rocket.svg" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@92f5236c58d94ef" />
            <meta property="og:title" content={`${pageTitle}`} />
            <meta property="og:url" content={`${url}${path}`} />
            <link rel="canonical" href={`${url}${path}`} />
            <meta name="monetization" content="$ilp.uphold.com/GidKX3giK2m2" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    );
};
export default Meta;
