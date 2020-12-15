import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Header from "../../../components/kit/components/navigation/header/Header";

const links = [
  {
    label: "Home",
  },
  {
    label: "Gallery",
    isSelected: true,
  },
  {
    label: "Content",
  },
  {
    label: "Contact",
  },
];

const HeaderPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Header" />
      <ComponentLayout
        vertical={true}
        title="Light"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Header
            links={links}
            hideIconRight={true}
            hideProfile={true}
            bgColor="bg-white"
            textColor="text-gray-400"
            textSelectedColor="text-gray-800"
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="Light with shadow"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Header
            links={links}
            withShadow={true}
            hideIconRight={true}
            hideProfile={true}
            bgColor="bg-white"
            textColor="text-gray-400"
            textSelectedColor="text-gray-800"
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="Dark"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Header
            links={links}
            hideIconRight={true}
            hideProfile={true}
            bgColor="bg-black"
            textColor="text-gray-300"
            textSelectedColor="text-white"
          />
        }
        component={Header}
      />

      <ComponentLayout
        vertical={true}
        title="Align right"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Header
            links={links}
            withShadow={true}
            hideIconRight={true}
            hideProfile={true}
            alignRight={true}
            bgColor="bg-white"
            textColor="text-gray-400"
            textSelectedColor="text-gray-800"
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="With profile ddm"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Header
            links={links}
            withShadow={true}
            hideIconRight={true}
            hideProfile={false}
            alignRight={false}
            bgColor="bg-white"
            textColor="text-gray-400"
            textSelectedColor="text-gray-800"
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="With icon on right"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Header
            links={links}
            withShadow={true}
            hideIconRight={false}
            hideProfile={false}
            alignRight={false}
            bgColor="bg-white"
            textColor="text-gray-400"
            textSelectedColor="text-gray-800"
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="Fat"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Header
            links={links}
            hideIconRight={true}
            withShadow={true}
            hideProfile={true}
            alignRight={false}
            bgColor="bg-white"
            isFat={true}
            textColor="text-gray-400"
            textSelectedColor="text-gray-800"
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="With search bar"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Header
            links={links}
            withSearchBar={true}
            withShadow={true}
            hideIconRight={true}
            hideProfile={true}
            alignRight={false}
            bgColor="bg-white"
            isFat={true}
            textColor="text-gray-400"
            textSelectedColor="text-gray-800"
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="Dark fat with search bar"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Header
            links={links}
            withSearchBar={true}
            withShadow={true}
            hideIconRight={true}
            hideProfile={true}
            alignRight={false}
            bgColor="bg-gray-800"
            isFat={true}
            textColor="text-gray-400"
            textSelectedColor="text-white"
          />
        }
        component={Header}
      />
    </AppLayout>
  );
};

export default HeaderPage;
