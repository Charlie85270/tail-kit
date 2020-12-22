import { FC } from "react";

import SimpleFooter from "../kit/components/navigation/footer/SimpleFooter";
import Header from "../kit/components/navigation/header/Header";
const footerLink = [
  {
    label: "Configuration",
    link: "/started",
  },
  {
    label: "Github",
    link: "https://github.com/Charlie85270/fastUI",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/crabiller/",
  },
];

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
  {
    label: "Sections",
    link: "/components#pagesection",
  },
];

const AppLayout: FC = ({ children }) => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto h-full">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
          <div className="dark">
            <Header
              links={menuEntry}
              withShadow={true}
              hideGitHubLink={false}
              alignRight={false}
              isFat={true}
            />
          </div>

          <main className="mx-auto max-w-7xl px-4 mt-8 sm:px-6  lg:px-8 h-full">
            {children}
          </main>
        </div>
      </div>
      <div className="dark">
        <SimpleFooter links={footerLink} withSocial={true} withCredits={true} />
      </div>
    </div>
  );
};

export default AppLayout;
