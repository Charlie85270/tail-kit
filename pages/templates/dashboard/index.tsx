import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SimpleFolioHome from '../../../components/kit/templates/homePages/folio/SimpleFolioHome';
import SimpleProjectDashboard from '../../../components/kit/templates/dashboardPages/projectDashboard/SimpleProjectDashboard';

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
        </AppLayout>
    );
};

export default DashBoardTemplates;
