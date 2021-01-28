import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import PricingCard from '../../../components/kit/components/commerce/pricing/PricingCard';
import PricingCard2 from '../../../components/kit/components/commerce/pricing/PricingCard2';
import PricingCard3 from '../../../components/kit/components/commerce/pricing/PricingCard3';
import PricingCard4 from '../../../components/kit/components/commerce/pricing/PricingCard4';
import PricingCard5 from '../../../components/kit/components/commerce/pricing/PricingCard5';
import PricingCard6 from '../../../components/kit/components/commerce/pricing/PricingCard6';
import PricingCard7 from '../../../components/kit/components/commerce/pricing/PricingCard7';
import PricingCard8 from '../../../components/kit/components/commerce/pricing/PricingCard8';
import PricingCard9 from '../../../components/kit/components/commerce/pricing/PricingCard9';

const ComponentsPage: FC = () => {
    return (
        <AppLayout
            title="Pricing cards free Tailwind components"
            desc="Pricing cards and more components for tailwind css"
        >
            <SectionHeader title="Pricing" />

            <ComponentLayout
                showSwitchMode={true}
                title="Pricing card 1"
                element={<PricingCard />}
                component={PricingCard}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="Pricing card 2"
                element={<PricingCard2 />}
                component={PricingCard2}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="Pricing card 3"
                element={<PricingCard3 />}
                component={PricingCard3}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="Pricing card 4"
                element={<PricingCard4 />}
                component={PricingCard4}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="Pricing card 5"
                element={<PricingCard5 />}
                component={PricingCard5}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="Pricing card 6"
                element={<PricingCard6 />}
                component={PricingCard6}
            />
            <ComponentLayout
                showSwitchMode={true}
                vertical={true}
                title="Pricing card 7"
                element={<PricingCard7 />}
                component={PricingCard7}
            />
            <ComponentLayout
                showSwitchMode={true}
                vertical={true}
                title="Pricing card 8"
                element={<PricingCard8 />}
                component={PricingCard8}
            />
            <ComponentLayout
                showSwitchMode={true}
                vertical={true}
                title="Pricing card 9"
                element={<PricingCard9 />}
                component={PricingCard9}
            />
        </AppLayout>
    );
};

export default ComponentsPage;
