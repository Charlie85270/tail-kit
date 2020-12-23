import React, { FC } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Elements from "../../components/kit/components/elements";
import Forms from "../../components/kit/components/form";
import Commerce from "../../components/kit/components/commerce";
import Navigation from "../../components/kit/components/navigation";
import Pagesection from "../../components/kit/components/pagesection";
import ListPage from "../../components/kit/components/list";

const ComponentsPage: FC = () => {
  return (
    <AppLayout
      title="200 free beautiful tailwind css components"
      desc="Over 200 freen and open source build components for tailwind css"
    >
      <Elements />
      <Forms />
      <Commerce />
      <Navigation />
      <Pagesection />
      <ListPage />
    </AppLayout>
  );
};

export default ComponentsPage;
