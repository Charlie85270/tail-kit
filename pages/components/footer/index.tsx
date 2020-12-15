import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Footer from "../../../components/kit/components/navigation/footer/Footer";
import SimpleFooter from "../../../components/kit/components/navigation/footer/SimpleFooter";

const FooterPage: FC = () => {
  const links = [
    {
      label: "Components",
      icon: "far fa-address-card",
      subLinks: ["Elements", "Forms", "Commerces", "Navigation"],
    },
    {
      label: "Contacts",
      icon: "fab fa-wpforms",
      subLinks: ["Github", "Facebook", "Twitter", "LinkedIn"],
    },
    {
      label: "Customization",
      icon: "fas fa-store",
      subLinks: ["Settings", "Themes", "Plugins", "LinkedIn"],
    },
  ];
  const simpleLinks = ["Components", "Contacts", "Customization", "Jobs"];

  return (
    <AppLayout>
      <SectionHeader title="Footer" />
      <ComponentLayout
        vertical={true}
        title="Light"
        element={
          <SimpleFooter
            links={simpleLinks}
            withSocial={false}
            textHoverColor="text-gray-800"
            bgColor="bg-white"
            textColor="text-gray-500"
          />
        }
        component={Footer}
      />
      <ComponentLayout
        vertical={true}
        title="Dark"
        element={
          <SimpleFooter
            links={simpleLinks}
            withSocial={false}
            textHoverColor="text-gray-200"
            bgColor="bg-gray-800"
            textColor="text-white"
          />
        }
        component={Footer}
      />
      <ComponentLayout
        vertical={true}
        title="Dark with socials"
        element={
          <SimpleFooter
            links={simpleLinks}
            withSocial={true}
            textHoverColor="text-gray-200"
            bgColor="bg-gray-800"
            textColor="text-white"
          />
        }
        component={Footer}
      />
      <ComponentLayout
        vertical={true}
        title="Dark with socials and credits"
        element={
          <SimpleFooter
            links={simpleLinks}
            withSocial={true}
            withCredits={true}
            textHoverColor="text-gray-200"
            bgColor="bg-gray-800"
            textColor="text-white"
          />
        }
        component={Footer}
      />
      <ComponentLayout
        vertical={true}
        title="Light with socials and credits"
        element={
          <SimpleFooter
            links={simpleLinks}
            withSocial={true}
            withCredits={true}
            textHoverColor="text-gray-800"
            bgColor="bg-white"
            textColor="text-gray-500"
          />
        }
        component={Footer}
      />

      <ComponentLayout
        vertical={true}
        title="Dark full"
        element={
          <SimpleFooter
            links={simpleLinks}
            withSocial={true}
            withSearch={true}
            withSiteIcon={true}
            withCredits={true}
            textHoverColor="text-gray-200"
            bgColor="bg-gray-800"
            textColor="text-white"
          />
        }
        component={Footer}
      />
      <ComponentLayout
        vertical={true}
        title="Multiple"
        element={
          <Footer
            links={links}
            subTextColor="text-gray-500"
            textHoverColor="text-gray-800"
            bgColor="bg-white"
            showSubLinks={true}
            textColor="text-gray-400"
          />
        }
        component={Footer}
      />

      <ComponentLayout
        vertical={true}
        title="Dark"
        element={
          <Footer
            links={links}
            subTextColor="text-gray-300"
            textHoverColor="text-white"
            bgColor="bg-gray-800"
            showSubLinks={true}
            textColor="text-white"
          />
        }
        component={Footer}
      />
      <ComponentLayout
        vertical={true}
        title="With socials"
        element={
          <Footer
            links={links}
            withSocialLink={true}
            subTextColor="text-gray-400"
            textHoverColor="text-gray-800"
            bgColor="bg-white"
            showSubLinks={true}
            textColor="text-gray-800"
          />
        }
        component={Footer}
      />
      <ComponentLayout
        vertical={true}
        title="With socials and credits"
        element={
          <Footer
            links={links}
            withSocialLink={true}
            withCredits={true}
            subTextColor="text-gray-400"
            textHoverColor="text-gray-800"
            bgColor="bg-white"
            showSubLinks={true}
            textColor="text-gray-800"
          />
        }
        component={Footer}
      />
      <ComponentLayout
        vertical={true}
        title="Multiple full"
        element={
          <Footer
            links={links}
            withSocialLink={true}
            withCredits={true}
            withSearch={true}
            subTextColor="text-gray-400"
            textHoverColor="text-gray-800"
            bgColor="bg-white"
            showSubLinks={true}
            textColor="text-gray-800"
          />
        }
        component={Footer}
      />
    </AppLayout>
  );
};

export default FooterPage;
