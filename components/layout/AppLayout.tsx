import { FC, useEffect } from "react";
import Header from "../kit/components/navigation/header/Header";
import FooterLight from "../kit/components/navigation/footer/FooterLight";
import ReactGA from "react-ga";

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

export const menuEntry = [
  {
    label: "Elements",
    icon: "far fa-address-card",
    desc: "Buttons, Avatars, Badges, Alerts, Progress bar....",
    link: "/components#elements",
  },
  {
    label: "Forms",
    icon: "fab fa-wpforms",
    desc: "Input text, Select, Textarea, Login pages ...",
    link: "/components#forms",
  },
  {
    label: "Commerce",
    icon: "fas fa-store",
    desc: "Pricing cards, Shopping cards, Basket layouts...",
    link: "/components#commerce",
  },
  {
    label: "Navigation",
    icon: "far fa-window-restore",
    desc: "Headers, Footers, Sidebar ...",
    link: "/components#navigation",
  },
  {
    label: "Sections",
    icon: "far fa-file-code",
    desc: "Features, CTA, testimonial, Team sections ...",
    link: "/components#pagesection",
  },
  {
    label: "List",
    icon: "fas fa-list-ul",
    desc: "Bloc list, Table, Todo list...",
    link: "/components#list",
  },
];

const AppLayout: FC = ({ children }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
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
        <FooterLight links={footerLink} />
      </div>
    </div>
  );
};

export default AppLayout;
