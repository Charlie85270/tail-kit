import { FC } from "react";
import SimplePhotoDescCard from "../components/kit/components/cards/SimplePhotoDescCard";
import TagsCard from "../components/kit/components/cards/TagsCard";
import SimpleLoadingButton from "../components/kit/components/buttons/SimpleLoadingButton";
import DeleteConfirmation from "../components/kit/components/confirmations/DeleteConfirmation";
import SimpleIconDescCard from "../components/kit/components/cards/SimpleIconDescCard";
import SimpleSelect from "../components/kit/components/form/select/SimpleSelect";
import SimpleNotificationCard from "../components/kit/components/cards/SimpleNotificationCard";
import IconButton from "../components/kit/components/buttons/IconButton";
import InfoNumberCard from "../components/kit/components/cards/InfoNumberCard";
import ShoppingDetailsCard from "../components/kit/components/shopping/ShoppingDetailsCard";
import TextButton from "../components/kit/components/buttons/TextButton";
import TextAndIconButton from "../components/kit/components/buttons/TextAndIconButton";
import HomeLayout from "../components/layout/HomeLayout";
import Link from "next/link";
import CoverAndButtonsProfilCard from "../components/kit/components/profile/CoverAndButtonsProfilCard";
import SimpleProfilCard from "../components/kit/components/profile/SimpleProfilVerti";

const IndexPage: FC = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col md:flex-row w-full items-start justify-between md:justify-start h-full md:h-1/2">
        <div className="sm:text-center z-20 md:z-30 lg:text-left w-full md:w-1/2 flex flex-col items-center md:items-start justify-start md:justify-center h-full">
          <h1 className="tracking-tight font-extrabold text-gray-900 text-5xl md:text-6xl">
            <span className="block xl:inline">
              Quickly and easily create stunning UI with
            </span>
            <span className="block text-indigo-600 xl:inline"> fastUI</span>
          </h1>
          <p className="mt-3  text-gray-500 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Fast UI gives you access to over 100 CSS components based on
            Tailwind css 2.0. FastUI is free and open source, by the community,
            for the community.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start w-full">
            <div className="rounded-md shadow">
              <Link href="/components">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </Link>
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
        <div className="opacity-10 z-10 md:z-50 md:opacity-70 sm:text-center  absolute perspective lg:text-left transform  w-full right-60  md:-right-12 -top-10  md:w-1/2">
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
    </HomeLayout>
  );
};

export default IndexPage;
