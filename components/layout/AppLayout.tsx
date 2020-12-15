import { FC } from "react";
import Header from "../site/header/header";

const AppLayout: FC = ({ children }) => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
          <Header hideGithub={false} />

          <main className="mx-auto px-4 mt-8 sm:px-6  lg:px-8 h-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
