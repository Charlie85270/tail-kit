import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SimpleFolioHome from '../../../components/kit/templates/homePages/folio/SimpleFolioHome';

const Folio = () => {
    return (
        <AppLayout
            title="Free Tailwind portfolio and folio templates for tailwind css"
            desc="Tailwind portfolio and folio templates and components for tailwind css"
        >
            <SectionHeader backLink="/templates" title="Portfolio landing page templates" />

            <ComponentLayout
                showSwitchMode={true}
                vertical={true}
                title="Simple folio"
                element={<SimpleFolioHome />}
                component={SimpleFolioHome}
            />
        </AppLayout>
    );
};

export default Folio;
