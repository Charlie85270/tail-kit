import React, { FC } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import Elements from '../../components/kit/components/elements';
import Forms from '../../components/kit/components/form';
import Commerce from '../../components/kit/components/commerce';
import Navigation from '../../components/kit/components/navigation';
import Pagesection from '../../components/kit/components/pagesection';
import ListPage from '../../components/kit/components/list';

const ComponentsPage: FC = () => {
    return (
        <AppLayout
            title="Tailwind UI KIT – Components section for React, VueJS and Angular."
            desc="Over 200 free and open source components for tailwind css, with live code edition to build beautiful UI"
        >
            <Elements />
            <Forms />
            <Commerce />
            <Navigation />
            <Pagesection />
            <ListPage />
        </AppLayout>
    );
};

export default ComponentsPage;
