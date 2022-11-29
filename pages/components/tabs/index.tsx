import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import BasicTabs from '../../../components/kit/components/elements/tabs/BasicTabs';
import BasicTabsDisabled from '../../../components/kit/components/elements/tabs/BasicTabsDisabled';
import BasicTabsUnderline from '../../../components/kit/components/elements/tabs/BasicTabsUnderline';
const ComponentsPage: FC = () => {
    return (
        <AppLayout
            title="Tabs free Tailwind components"
            desc="Tabs, banner, placeolder and more components for tailwind css"
        >
            <SectionHeader title="Tabs" />
            <ComponentLayout title="Simple Tabs" element={<BasicTabs />} component={BasicTabs} />
            <ComponentLayout
                title="Simple Tabs disabled"
                element={<BasicTabsDisabled />}
                component={BasicTabsDisabled}
            />
            <ComponentLayout
                title="Simple Tabs underline"
                element={<BasicTabsUnderline />}
                component={BasicTabsUnderline}
            />
        </AppLayout>
    );
};

export default ComponentsPage;
