import React from 'react';
import SectionDesc from '../../../site/section/SectionDesc';

const DashboardPages = () => {
    const dashboardSections = [
        {
            title: 'Projects',
            items: 1,
            img: 'images/sections/dashboard.png',
            link: '/templates/dashboard',
        },
    ];

    return <SectionDesc hasCommingSoon={true} id="dashboard" items={dashboardSections} title="Dashboard" />;
};

export default DashboardPages;
