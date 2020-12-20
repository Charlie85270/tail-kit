import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import Features from "../../../components/kit/components/pagesection/feature/Features";
import FeaturesImage from "../../../components/kit/components/pagesection/feature/FeaturesImage";

const FeaturePage = () => {
  return (
    <AppLayout>
      <SectionHeader title="Features" />
      <ComponentLayout
        vertical={true}
        title="Features"
        element={<Features />}
        component={Features}
      />
      <ComponentLayout
        vertical={true}
        title="With images"
        element={<FeaturesImage />}
        component={FeaturesImage}
      />
    </AppLayout>
  );
};

export default FeaturePage;
