import { FC } from "react";

import SimpleFooter from "../kit/components/navigation/footer/SimpleFooter";
import Header from "../kit/components/navigation/header/Header";
const simpleLinks = ["Components", "Contacts", "Customization", "Jobs"];

const menuEntry = [
  {
    label: "Elements",
    link: "/components#elements",
  },
  {
    label: "Forms",
    link: "/components#forms",
  },
  {
    label: "Commerce",
    link: "/components#commerce",
  },
  {
    label: "Navigation",
    link: "/components#navigation",
  },
];

const AppLayout: FC = ({ children }) => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto h-full">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
          <Header
            links={menuEntry}
            withShadow={true}
            hideIconRight={false}
            hideProfile={true}
            alignRight={false}
            bgColor="bg-gray-800"
            isFat={true}
            textColor="text-gray-400"
            textSelectedColor="text-white"
          />
          <main className="mx-auto max-w-7xl px-4 mt-8 sm:px-6  lg:px-8 h-full">
            {children}
          </main>
        </div>
      </div>
      <SimpleFooter
        links={simpleLinks}
        withSocial={true}
        withSiteIcon={true}
        withCredits={true}
        textHoverColor="text-gray-200"
        bgColor="bg-gray-800"
        textColor="text-white"
      />
    </div>
  );
};

export default AppLayout;
