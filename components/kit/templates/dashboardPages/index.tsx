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
        {
            title: 'Datas',
            isNew: true,
            items: 1,
            img: 'images/sections/datadashboard.png',
            link: '/templates/datadashboard',
        },
    ];

    return (
        <SectionDesc
            isTemplate={true}
            hasCommingSoon={true}
            id="dashboard"
            items={dashboardSections}
            title="Dashboards"
        />
    );
};

export default DashboardPages;
