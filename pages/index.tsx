import { FC } from "react";
import Header from "../components/site/header";
import SimplePhotoDescCard from "../components/kit/components/cards/SimplePhotoDescCard";
import TagsCard from "../components/kit/components/cards/TagsCard";
import SimpleProfilCard from "../components/kit/components/cards/SimpleProfilCard";
import SimpleLoadingButton from "../components/kit/components/buttons/SimpleLoadingButton";
import DeleteConfirmation from "../components/kit/components/confirmations/DeleteConfirmation";
import SimpleIconDescCard from "../components/kit/components/cards/SimpleIconDescCard";
import SimpleSelect from "../components/kit/components/form/select/SimpleSelect";
import SimpleNotificationCard from "../components/kit/components/cards/SimpleNotificationCard";
import IconButton from "../components/kit/components/buttons/IconButton";
import CoverAndButtonsProfilCard from "../components/kit/components/cards/CoverAndButtonsProfilCard";
import InfoNumberCard from "../components/kit/components/cards/InfoNumberCard";
import ShoppingDetailsCard from "../components/kit/components/cards/ShoppingDetailsCard";
import TextButton from "../components/kit/components/buttons/TextButton";
import TextAndIconButton from "../components/kit/components/buttons/TextAndIconButton";

const IndexPage: FC = () => {
  return (
    <div className="relative bg-white overflow-hidden h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32">
          <Header />

          <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex flex-col md:flex-row w-full items-start justify-start">
              <div className="sm:text-center z-10 lg:text-left w-full md:w-1/2">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Quickly and easily create stunning UI with
                  </span>
                  <span className="block text-indigo-600 xl:inline">
                    {" "}
                    fastUI
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Fast UI gives you access to over 100 CSS components based on
                  Tailwind css 2.0. FastUI is free and open source, by the
                  community, for the community.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://github.com/Charlie85270/fastUI"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                    >
                      <i className="fab fa-github mr-2" />
                      <span className="ml-2">Github</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="opacity-20 md:opacity-70 sm:text-center relative md:absolute perspective lg:text-left transform  w-full right-60  md:-right-12 -top-10  md:w-1/2">
                <div className="flex gap-4 gap-y-1">
                  <div className="col-1">
                    <div className="mb-4">
                      <div className="flex items-center justify-center w-full gap-4">
                        <IconButton icon="fas fa-step-backward" />
                        <IconButton icon="fas fa-pause" />
                        <IconButton />
                        <IconButton icon="fas fa-step-forward" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <TagsCard />
                    </div>
                    <div className="mb-4">
                      <SimplePhotoDescCard />
                    </div>
                    <div className="mb-4">
                      <SimpleLoadingButton />
                    </div>
                    <div className="mb-4">
                      <DeleteConfirmation />
                    </div>
                    <div className="mb-4">
                      <ShoppingDetailsCard />
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="mb-4">
                      <TextButton />
                    </div>
                    <div className="mb-4">
                      <CoverAndButtonsProfilCard />
                    </div>
                    <div className="mb-4">
                      <SimpleNotificationCard />
                    </div>
                    <div className="mb-4">
                      <SimpleIconDescCard />
                    </div>
                    <div className="mb-4">
                      <SimpleSelect />
                    </div>

                    <div className="mb-4">
                      <DeleteConfirmation />
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="mb-4">
                      <SimpleProfilCard />
                    </div>
                    <div className="mb-4">
                      <SimpleProfilCard />
                    </div>
                    <div className="mb-4">
                      <InfoNumberCard />
                    </div>
                    <div className="mb-4">
                      <SimpleProfilCard />
                    </div>
                    <div className="mb-4">
                      <TextAndIconButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
