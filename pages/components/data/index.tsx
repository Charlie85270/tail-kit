import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import InfoNumberCard from "../../../components/kit/components/elements/data/InfoNumberCard";
import InformationIconCard from "../../../components/kit/components/elements/data/InformationIconCard";
import SimpleIconDescCard from "../../../components/kit/components/elements/data/SimpleIconDescCard";
import SimpleNotificationCard from "../../../components/kit/components/elements/data/SimpleNotificationCard";
import SimplePhotoDescCard from "../../../components/kit/components/elements/data/SimplePhotoDescCard";
import CovidInfo from "../../../components/kit/components/elements/data/CovidInfo";
import InfoNumberCard2 from "../../../components/kit/components/elements/data/InfoNumberCard2";
import TagsCard from "../../../components/kit/components/elements/data/TagsCard";
import TaskCard from "../../../components/kit/components/elements/data/TaskCard";
import MutlipleTask from "../../../components/kit/components/elements/data/MutlipleTask";

const DataPage = () => {
  return (
    <AppLayout
      title="Data display free Tailwind components"
      desc="Data, Cards and more components for tailwind css"
    >
      <SectionHeader title="Data display" />
      <ComponentLayout
        vertical={false}
        title="Sales card"
        element={<InfoNumberCard />}
        component={InfoNumberCard}
      />
      <ComponentLayout
        vertical={false}
        title="Tasks card"
        showSwitchMode={true}
        element={<MutlipleTask />}
        component={MutlipleTask}
      />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Details Task card"
        element={<TaskCard />}
        component={TaskCard}
      />

      <ComponentLayout
        vertical={false}
        title="Bitcoin card"
        element={<InfoNumberCard2 />}
        component={InfoNumberCard2}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="Covid data"
        element={<CovidInfo />}
        component={CovidInfo}
      />
      <ComponentLayout
        vertical={false}
        title="Information card"
        element={<InformationIconCard />}
        component={InformationIconCard}
      />
      <ComponentLayout
        vertical={false}
        title="Tags card"
        element={<TagsCard />}
        component={TagsCard}
      />
      <ComponentLayout
        vertical={false}
        title="Desc icon card"
        element={<SimpleIconDescCard />}
        component={SimpleIconDescCard}
      />
      <ComponentLayout
        vertical={false}
        title="Notif card"
        element={<SimpleNotificationCard />}
        component={SimpleNotificationCard}
      />
      <ComponentLayout
        vertical={false}
        title="Photo card"
        element={<SimplePhotoDescCard />}
        component={SimplePhotoDescCard}
      />
    </AppLayout>
  );
};

export default DataPage;
