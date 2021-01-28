import React, { FC } from 'react';
import SectionDesc from '../../../site/section/SectionDesc';

const Navigation: FC = () => {
    const formSections = [
        {
            title: 'Headers',
            items: 9,
            img: 'images/sections/header.png',
            link: '/components/header',
        },
        {
            title: 'Footers',
            items: 9,
            img: 'images/sections/footer.png',
            link: '/components/footer',
        },
        {
            title: 'Sidebars',
            items: 8,
            img: 'images/sections/sidebar.png',
            link: '/components/sidebar',
        },
    ];

    return <SectionDesc id="navigation" items={formSections} title="Navigation" />;
};

export default Navigation;
