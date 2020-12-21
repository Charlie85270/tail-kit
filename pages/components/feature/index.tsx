import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import Features from "../../../components/kit/components/pagesection/feature/Features";
import FeaturesImage from "../../../components/kit/components/pagesection/feature/FeaturesImage";
import FeaturesCards from "../../../components/kit/components/pagesection/feature/FeaturesCards";
import FeaturesAndDesc from "../../../components/kit/components/pagesection/feature/FeaturesAndDesc";
import FeaturesSquare from "../../../components/kit/components/pagesection/feature/FeaturesSquare";

const FeaturePage = () => {
  return (
    <AppLayout>
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
        title="Features"
        showSwitchMode={true}
        element={<Features />}
        component={Features}
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
    </AppLayout>
  );
};

export default FeaturePage;
