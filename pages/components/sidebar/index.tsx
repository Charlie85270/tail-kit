import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Sidebar from "../../../components/kit/components/navigation/sidebar/Sidebar";
import LittleSidebar from "../../../components/kit/components/navigation/sidebar/LittleSidebar";

const SideBar: FC = () => {
  const links = [
    {
      label: "Element",
      icon: "far fa-address-card",
    },
    {
      label: "Form",
      icon: "fab fa-wpforms",
      selected: true,
    },
    {
      label: "Commerce",
      icon: "fab fa-btc",
    },
    {
      label: "Navigation",
      icon: "fas fa-route",
    },
  ];

  return (
    <AppLayout>
      <SectionHeader title="Sidebar" />
      <ComponentLayout
        title="Light"
        showSwitchMode={true}
        element={<Sidebar links={links} />}
        component={Sidebar}
      />

      <ComponentLayout
        showSwitchMode={true}
        title="With header"
        element={<Sidebar links={links} withHeader={true} />}
        component={Sidebar}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With border"
        element={<Sidebar links={links} withBorder={true} withHeader={true} />}
        component={Sidebar}
      />

      <ComponentLayout
        showSwitchMode={true}
        title="With footer"
        element={
          <Sidebar links={links} withBottomLink={true} withHeader={true} />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Just icon"
        showSwitchMode={true}
        element={<LittleSidebar links={links} />}
        component={LittleSidebar}
      />

      <ComponentLayout
        title="With header"
        showSwitchMode={true}
        element={<LittleSidebar links={links} withHeader={true} />}
        component={LittleSidebar}
      />
      <ComponentLayout
        title="With footer"
        showSwitchMode={true}
        element={
          <LittleSidebar
            links={links}
            withHeader={true}
            withBottomLink={true}
          />
        }
        component={LittleSidebar}
      />
    </AppLayout>
  );
};

export default SideBar;
