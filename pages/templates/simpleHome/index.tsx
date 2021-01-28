import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import TailkitHome from '../../../components/kit/templates/homePages/simplePage/TailkitHome';
import WatchLandingPage from '../../../components/kit/templates/homePages/simplePage/Watch';
import NaturalHome from '../../../components/kit/templates/homePages/simplePage/NaturalHome';
import Natural2Home from '../../../components/kit/templates/homePages/simplePage/Natural2Home';
import NextJs from '../../../components/kit/templates/homePages/simplePage/NextJSHome';

const HomePage = () => {
    return (
        <AppLayout
            title="Free Tailwind home page template for tailwind css"
            desc="Tailwind home page templates and components for tailwind css"
        >
            <SectionHeader backLink="/templates" title="Simple landing page templates" />
            <ComponentLayout
                vertical={true}
                title="Tail-kit landing page"
                element={<TailkitHome />}
                component={TailkitHome}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Watch landing page"
                element={<WatchLandingPage />}
                component={WatchLandingPage}
            />
            <ComponentLayout vertical={true} title="NextJS landing page" element={<NextJs />} component={NextJs} />
        </AppLayout>
    );
};

export default HomePage;
