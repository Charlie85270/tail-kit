import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import FeaturesImage from '../../../components/kit/components/pagesection/feature/FeaturesImage';
import FeaturesCards from '../../../components/kit/components/pagesection/feature/FeaturesCards';
import FeaturesAndDesc from '../../../components/kit/components/pagesection/feature/FeaturesAndDesc';
import FeaturesSquare from '../../../components/kit/components/pagesection/feature/FeaturesSquare';
import FeaturesImage2 from '../../../components/kit/components/pagesection/feature/FeaturesImage2';

const FeaturePage = () => {
    return (
        <AppLayout
            title="Features sections free Tailwind components"
            desc="Features sections more components for tailwind css"
        >
            <SectionHeader title="Features" />
            <ComponentLayout
                vertical={true}
                title="With cards"
                showSwitchMode={true}
                element={<FeaturesCards />}
                component={FeaturesCards}
            />

            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With images"
                element={<FeaturesImage />}
                component={FeaturesImage}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With Desc"
                element={<FeaturesAndDesc />}
                component={FeaturesAndDesc}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With border"
                element={<FeaturesSquare />}
                component={FeaturesSquare}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With 4 images"
                element={<FeaturesImage2 />}
                component={FeaturesImage2}
            />
        </AppLayout>
    );
};

export default FeaturePage;
