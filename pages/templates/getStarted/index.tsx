import React from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import NaturalHome from "../../../components/kit/templates/homePage/simplePage/NaturalHome";
import Natural2Home from "../../../components/kit/templates/homePage/simplePage/Natural2Home";
import Natural3Home from "../../../components/kit/templates/homePage/simplePage/Natural3Home";

const HomePage = () => {
  return (
    <AppLayout
      title="Free Tailwind home page template for tailwind css"
      desc="Tailwind home page templates and components for tailwind css"
    >
      <SectionHeader
        backLink="/templates"
        title="Get started landing page templates"
      />

      <ComponentLayout
        vertical={true}
        title="Natural landing page"
        element={<NaturalHome />}
        component={NaturalHome}
      />
      <ComponentLayout
        vertical={true}
        title="Natural 2 landing page"
        element={<Natural2Home />}
        component={Natural2Home}
      />
      <ComponentLayout
        vertical={true}
        title="Save the planet"
        element={<Natural3Home />}
        component={Natural3Home}
      />
    </AppLayout>
  );
};

export default HomePage;
