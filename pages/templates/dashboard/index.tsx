import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SimpleProjectDashboard from '../../../components/kit/templates/dashboardPages/projectDashboard/SimpleProjectDashboard';
import KpiProject from '../../../components/kit/templates/dashboardPages/projectDashboard/KpitDashboard';

const DashBoardTemplates = () => {
    return (
        <AppLayout
            title="Free dashboard templates and admin templates for tailwind css"
            desc="Tailwind dashboard and admin templates for react, VueJS and Angular with tailwind css "
        >
            <SectionHeader backLink="/templates" title="Dashboard and admin templates" />

            <ComponentLayout
                showSwitchMode={true}
                vertical={true}
                fullscreen={true}
                title="Simple dashboard"
                element={<SimpleProjectDashboard />}
                component={SimpleProjectDashboard}
            />
            <ComponentLayout
                showSwitchMode={true}
                vertical={true}
                fullscreen={true}
                title="Kpi dashboard"
                element={<KpiProject />}
                component={KpiProject}
            />
        </AppLayout>
    );
};

export default DashBoardTemplates;
