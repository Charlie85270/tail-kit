import { FC } from "react";
import Header from "../site/header/header";

const HomeLayout: FC = ({ children }) => {
  return (
    <div className="relative bg-white overflow-hidden h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
          <Header hideHelp={true} hideGithub={true} />

          <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 h-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
