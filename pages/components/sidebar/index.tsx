import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Sidebar from "../../../components/kit/components/navigation/sidebar/Sidebar";
import LittleSidebar from "../../../components/kit/components/navigation/sidebar/LittleSidebar";

const SideBar: FC = () => {
  const headerImg = "/icons/rocket.svg";
  const headerText = "Tailwind-kit";
  const links = [
    {
      label: "Element",
    },
    {
      label: "Form",

      selected: true,
    },
    {
      label: "Commerce",
    },
    {
      label: "Navigation",
    },
  ];
  const linksWithIcons = [
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
  const linksWithIconsAndNotifications = [
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
      notifications: 7,
    },
    {
      label: "Navigation",
      icon: "fas fa-route",
    },
  ];
  const bottomLink = {
    label: "Support",
    icon: "fas fa-question",
  };

  return (
    <AppLayout
      title="Sidebar free Tailwind components"
      desc="Sidebar and more components for tailwind css"
    >
      <SectionHeader title="Sidebar" />
      <ComponentLayout
        title="Light"
        showSwitchMode={true}
        element={<Sidebar links={links} />}
        component={Sidebar}
      />
      <ComponentLayout
        title="With icons"
        showSwitchMode={true}
        element={<Sidebar links={linksWithIcons} />}
        component={Sidebar}
      />

      <ComponentLayout
        showSwitchMode={true}
        title="With header"
        element={
          <Sidebar
            links={linksWithIcons}
            headerImg={headerImg}
            headerText={headerText}
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With border"
        element={
          <Sidebar
            links={linksWithIcons}
            withBorder={true}
            headerImg={headerImg}
            headerText={headerText}
          />
        }
        component={Sidebar}
      />

      <ComponentLayout
        showSwitchMode={true}
        title="With footer"
        element={
          <Sidebar
            links={linksWithIcons}
            bottomLink={bottomLink}
            headerImg={headerImg}
            headerText={headerText}
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With notifications"
        element={
          <Sidebar
            links={linksWithIconsAndNotifications}
            bottomLink={bottomLink}
            headerImg={headerImg}
            headerText={headerText}
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Just icon"
        showSwitchMode={true}
        element={<LittleSidebar links={linksWithIcons} />}
        component={LittleSidebar}
      />

      <ComponentLayout
        title="With header"
        showSwitchMode={true}
        element={<LittleSidebar links={linksWithIcons} withHeader={true} />}
        component={LittleSidebar}
      />
      <ComponentLayout
        title="With footer"
        showSwitchMode={true}
        element={
          <LittleSidebar
            links={linksWithIcons}
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
