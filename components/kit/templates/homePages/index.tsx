import React from 'react';
import SectionDesc from '../../../site/section/SectionDesc';

const HomePage = () => {
    const homeSection = [
        {
            title: 'Products',
            items: 3,
            img: 'images/sections/homePage2.png',
            link: '/templates/simpleHome',
        },
        {
            title: 'Get Started',
            items: 3,
            img: 'images/sections/homePage.png',
            link: '/templates/getStarted',
        },
        {
            title: 'Portfolio',
            items: 1,
            img: 'images/sections/folio.png',
            link: '/templates/folio',
        },
    ];

    return (
        <SectionDesc isTemplate={true} hasCommingSoon={true} id="errors" items={homeSection} title="Landing pages" />
    );
};

export default HomePage;
