import React, { FC } from 'react';
import SectionDesc from '../../../site/section/SectionDesc';

const Commerce: FC = () => {
    const commerceSections = [
        {
            title: 'Pricing cards',
            items: 9,
            img: 'images/sections/pricing.png',
            link: '/components/pricing',
        },
        {
            title: 'Shopping cards',
            items: 7,
            img: 'images/sections/shopping.png',
            link: '/components/shopping',
        },
    ];

    return <SectionDesc id="commerce" items={commerceSections} title="Commerce" />;
};

export default Commerce;
