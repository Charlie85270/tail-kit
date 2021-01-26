import React from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import Picture404 from "../../../components/kit/templates/errorPages/error404/Picture404";
import Background404 from "../../../components/kit/templates/errorPages/error404/Background404";
import Simple404 from "../../../components/kit/templates/errorPages/error404/Simple404";

const The404pages = () => {
  return (
    <AppLayout
      title="Free Tailwind 404 template pages for tailwind css"
      desc="Tailwind 404 template pages templates and components for tailwind css"
    >
      <SectionHeader backLink="/templates" title="404 templates pages" />

      <ComponentLayout
        vertical={true}
        title="Simple 404"
        element={<Simple404 />}
        component={Simple404}
      />
      <ComponentLayout
        vertical={true}
        title="Animated 404"
        element={<Background404 />}
        component={Background404}
      />
      <ComponentLayout
        vertical={true}
        title="Illustration 404"
        element={<Picture404 />}
        component={Picture404}
      />
    </AppLayout>
  );
};

export default The404pages;
