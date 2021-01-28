import React from 'react';
import SectionDesc from '../../../site/section/SectionDesc';

const ErrorPages = () => {
    const homeSection = [
        {
            title: '404 Not found',
            items: 3,
            img: 'images/sections/404.png',
            link: '/templates/errors404',
        },
    ];

    return <SectionDesc hasCommingSoon={true} id="home" items={homeSection} title="Errors pages" />;
};

export default ErrorPages;
