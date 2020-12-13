import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import PricingCard from "../../../components/kit/components/pricing/PricingCard";
import PricingCard2 from "../../../components/kit/components/pricing/PricingCard2";
import PricingCard3 from "../../../components/kit/components/pricing/PricingCard3";
import SectionHeader from "../../../components/site/header/SectionHeader";

const ComponentsPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Pricing" />

      <ComponentLayout
        title="Pricing card 1"
        element={<PricingCard />}
        component={PricingCard}
      />
      <ComponentLayout
        title="Pricing card 2"
        element={<PricingCard2 />}
        component={PricingCard2}
      />
      <ComponentLayout
        title="Pricing card 3"
        element={<PricingCard3 />}
        component={PricingCard3}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
