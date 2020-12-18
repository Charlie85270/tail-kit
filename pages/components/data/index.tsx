import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import InfoNumberCard from "../../../components/kit/components/elements/data/InfoNumberCard";
import InformationIconCard from "../../../components/kit/components/elements/data/InformationIconCard";
import SimpleIconDescCard from "../../../components/kit/components/elements/data/SimpleIconDescCard";
import SimpleNotificationCard from "../../../components/kit/components/elements/data/SimpleNotificationCard";
import SimplePhotoDescCard from "../../../components/kit/components/elements/data/SimplePhotoDescCard";
import BandeauNumber from "../../../components/kit/components/elements/data/BandeauNumber";
import TimerEvent from "../../../components/kit/components/elements/data/TimerEvent";
import CovidInfo from "../../../components/kit/components/elements/data/CovidInfo";

const DataPage = () => {
  return (
    <AppLayout>
      <SectionHeader title="Alert" />
      <ComponentLayout
        vertical={false}
        title="Sales card"
        element={<InfoNumberCard />}
        component={InfoNumberCard}
      />
      <ComponentLayout
        vertical={false}
        title="Information card"
        element={<InformationIconCard />}
        component={InformationIconCard}
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

      <ComponentLayout
        vertical={true}
        title="Bandeau number"
        element={<BandeauNumber />}
        component={BandeauNumber}
      />
      <ComponentLayout
        showSwitchMode={true}
        vertical={true}
        title="Timer event"
        element={<TimerEvent />}
        component={TimerEvent}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="Covid data"
        element={<CovidInfo />}
        component={CovidInfo}
      />
    </AppLayout>
  );
};

export default DataPage;
