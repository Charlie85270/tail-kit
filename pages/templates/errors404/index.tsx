import React from 'react';
import Pictures404 from '../../../components/kit/templates/errorsPages/error404/Pictures404';
import Simple404 from '../../../components/kit/templates/errorsPages/error404/Simple404';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import Background404 from '../../../components/kit/templates/errorsPages/error404/Background404';

const The404pages = () => {
    return (
        <AppLayout
            title="Free Tailwind 404 template pages for tailwind css"
            desc="Tailwind 404 template pages templates and components for tailwind css"
        >
            <SectionHeader backLink="/templates" title="404 templates pages" />

            <ComponentLayout vertical={true} title="Simple 404" element={<Simple404 />} component={Simple404} />
            <ComponentLayout
                vertical={true}
                title="Animated 404"
                element={<Background404 />}
                component={Background404}
            />
            <ComponentLayout
                vertical={true}
                title="Illustration 404"
                element={<Pictures404 />}
                component={Pictures404}
            />
        </AppLayout>
    );
};

export default The404pages;
