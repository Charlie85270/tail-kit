import React, { FC } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import HomePage from '../../components/kit/templates/homePages';
import ErrorPages from '../../components/kit/templates/errorsPages';
import DashboardPages from '../../components/kit/templates/dashboardPages';

const ComponentsPage: FC = () => {
    return (
        <AppLayout
            title="Tailwind UI KIT – Free and open source templates and dashboard UI for React, VueJS and Angular."
            desc="Over 250 free and open source components and templates for tailwind css, with live code edition to build beautiful UI"
        >
            <DashboardPages />
            <HomePage />
            <ErrorPages />
        </AppLayout>
    );
};

export default ComponentsPage;
