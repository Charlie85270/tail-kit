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
const ddmItems = [
  {
    label: "Settings",
  },
  {
    label: "Account",
  },
  {
    label: "Logout",
  },
];

const HeaderPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Header" />
      <ComponentLayout
        vertical={true}
        title="Light"
        jsLink="https://github.com/Charlie85270/fastUI/blob/main/components/kit/components/elements/ddm/DropDownMenu.tsx"
        element={
          <Header
            forceMenuOpenInMobile={true}
            forceDDMOpenInMobile={true}
            links={links}
            hideGitHubLink={true}
            hideHelp={true}
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="Light with shadow"
        jsLink="https://github.com/Charlie85270/fastUI/blob/main/components/kit/components/elements/ddm/DropDownMenu.tsx"
        element={
          <Header
            links={links}
            forceMenuOpenInMobile={true}
            forceDDMOpenInMobile={true}
            withShadow={true}
            hideGitHubLink={true}
            hideHelp={true}
          />
        }
        component={Header}
      />

      <ComponentLayout
        vertical={true}
        title="Align right"
        jsLink="https://github.com/Charlie85270/fastUI/blob/main/components/kit/components/elements/ddm/DropDownMenu.tsx"
        element={
          <Header
            links={links}
            forceMenuOpenInMobile={true}
            forceDDMOpenInMobile={true}
            withShadow={true}
            hideGitHubLink={true}
            hideHelp={true}
            alignRight={true}
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="With profile ddm"
        containerClasses="pb-32"
        jsLink="https://github.com/Charlie85270/fastUI/blob/main/components/kit/components/elements/ddm/DropDownMenu.tsx"
        element={
          <Header
            links={links}
            forceMenuOpenInMobile={true}
            forceDDMOpenInMobile={true}
            withShadow={true}
            hideHelp={true}
            hideGitHubLink={true}
            ddmItems={ddmItems}
            alignRight={false}
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="With icon on right"
        containerClasses="pb-32"
        jsLink="https://github.com/Charlie85270/fastUI/blob/main/components/kit/components/elements/ddm/DropDownMenu.tsx"
        element={
          <Header
            links={links}
            forceMenuOpenInMobile={true}
            forceDDMOpenInMobile={true}
            withShadow={true}
            hideHelp={true}
            hideGitHubLink={false}
            ddmItems={ddmItems}
            alignRight={false}
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="Fat"
        containerClasses="pb-32"
        jsLink="https://github.com/Charlie85270/fastUI/blob/main/components/kit/components/elements/ddm/DropDownMenu.tsx"
        element={
          <Header
            links={links}
            forceMenuOpenInMobile={true}
            forceDDMOpenInMobile={true}
            hideGitHubLink={true}
            withShadow={true}
            hideHelp={true}
            ddmItems={ddmItems}
            alignRight={false}
            isFat={true}
          />
        }
        component={Header}
      />
      <ComponentLayout
        vertical={true}
        title="With search bar"
        containerClasses="pb-32"
        jsLink="https://github.com/Charlie85270/fastUI/blob/main/components/kit/components/elements/ddm/DropDownMenu.tsx"
        element={
          <Header
            links={links}
            withSearchBar={true}
            forceMenuOpenInMobile={true}
            forceDDMOpenInMobile={true}
            withShadow={true}
            hideHelp={true}
            hideGitHubLink={true}
            alignRight={false}
            isFat={true}
          />
        }
        component={Header}
      />
    </AppLayout>
  );
};

export default HeaderPage;
