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
        element={
          <Sidebar
            links={links}
            backgroundColor="bg-white"
            textColor="text-gray-300"
            selectedTextColor="text-gray-900"
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Dark"
        element={
          <Sidebar
            links={links}
            backgroundColor="bg-gray-800"
            textColor="text-gray-400"
            selectedTextColor="text-white"
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Dark with header"
        element={
          <Sidebar
            links={links}
            withHeader={true}
            backgroundColor="bg-gray-800"
            textColor="text-gray-400"
            selectedTextColor="text-white"
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Dark with border"
        element={
          <Sidebar
            links={links}
            withBorder={true}
            withHeader={true}
            backgroundColor="bg-gray-800"
            textColor="text-gray-400"
            selectedTextColor="text-white"
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Indigo"
        element={
          <Sidebar
            links={links}
            withHeader={true}
            backgroundSelectedColor="bg-gray-100"
            backgroundHoverColor="bg-gray-100"
            backgroundColor="bg-indigo-500"
            textColor="text-white"
            selectedTextColor="text-indigo-500"
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Dark with background"
        element={
          <Sidebar
            links={links}
            withHeader={true}
            backgroundSelectedColor="bg-gray-900"
            backgroundHoverColor="bg-gray-900"
            backgroundColor="bg-gray-800"
            textColor="text-gray-400"
            selectedTextColor="text-white"
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Light with background"
        element={
          <Sidebar
            links={links}
            withHeader={true}
            backgroundSelectedColor="bg-gray-100"
            backgroundHoverColor="bg-gray-100"
            backgroundColor="bg-white"
            textColor="text-gray-400"
            selectedTextColor="text-gray-800"
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Indigo with footer"
        element={
          <Sidebar
            links={links}
            withBottomLink={true}
            withHeader={true}
            backgroundSelectedColor="bg-gray-100"
            backgroundHoverColor="bg-gray-100"
            backgroundColor="bg-indigo-500"
            textColor="text-white"
            selectedTextColor="text-indigo-500"
          />
        }
        component={Sidebar}
      />
      <ComponentLayout
        title="Light icon"
        element={
          <LittleSidebar
            textColor="text-gray-500"
            selectedTextColor="text-gray-800"
            backgroundColor="bg-white"
            links={links}
          />
        }
        component={LittleSidebar}
      />
      <ComponentLayout
        title="Dark icon"
        element={
          <LittleSidebar
            textColor="text-gray-400"
            selectedTextColor="text-white"
            backgroundColor="bg-gray-800"
            links={links}
          />
        }
        component={LittleSidebar}
      />
      <ComponentLayout
        title="With header"
        element={
          <LittleSidebar
            textColor="text-gray-400"
            selectedTextColor="text-white"
            backgroundColor="bg-gray-800"
            links={links}
            withHeader={true}
          />
        }
        component={LittleSidebar}
      />
      <ComponentLayout
        title="With footer"
        element={
          <LittleSidebar
            textColor="text-gray-400"
            selectedTextColor="text-white"
            backgroundColor="bg-gray-800"
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
