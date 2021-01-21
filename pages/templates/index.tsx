import React, { FC } from "react";
import AppLayout from "../../components/layout/AppLayout";
import HomePage from "../../components/kit/templates/homePage";

const ComponentsPage: FC = () => {
  return (
    <AppLayout
      title="Tailwind UI KIT – Free and open source templates for React, VueJS and Angular."
      desc="Rree and open source components and templates for tailwind css, with live code edition to build beautiful UI"
    >
      <HomePage />
    </AppLayout>
  );
};

export default ComponentsPage;
