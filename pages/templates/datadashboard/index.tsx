import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import KpiProject from '../../../components/kit/templates/dashboardPages/dataDashboard/KpitDashboard';

const dDtadashboardTemplates = () => {
    return (
        <AppLayout
            title="Free admin datas dashboard templates for tailwind css"
            desc="Tailwind dashboard and admin data templates for react, VueJS and Angular with tailwind css "
        >
            <SectionHeader backLink="/templates" title="Datas dashboard templates" />

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

export default dDtadashboardTemplates;
