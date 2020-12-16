import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import PricingCard from "../../../components/kit/components/commerce/pricing/PricingCard";
import PricingCard2 from "../../../components/kit/components/commerce/pricing/PricingCard2";
import PricingCard3 from "../../../components/kit/components/commerce/pricing/PricingCard3";

const ComponentsPage: FC = () => {
  return (
    <AppLayout>
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
    </AppLayout>
  );
};

export default ComponentsPage;
