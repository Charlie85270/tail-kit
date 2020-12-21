import { FC } from "react";

import TextButton from "../components/kit/components/elements/buttons/Button";
import HomeLayout from "../components/layout/HomeLayout";
import Link from "next/link";
import CoverAndButtonsProfilCard from "../components/kit/components/pagesection/profile/CoverAndButtonsProfilCard";
import SimpleProfilCard from "../components/kit/components/pagesection/profile/SimpleProfil";
import Button from "../components/kit/components/elements/buttons/Button";
import MultipleShoppingCard from "../components/kit/components/commerce/shopping/MultipleShoppingCard";
import PricingCard from "../components/kit/components/commerce/pricing/PricingCard";
import ClassicShoppingCard from "../components/kit/components/commerce/shopping/ClassicShoppingCard";
import DeleteConfirmation from "../components/kit/components/elements/alert/ConfirmationCard";
import SimplePhotoDescCard from "../components/kit/components/elements/data/SimplePhotoDescCard";
import SimpleNotificationCard from "../components/kit/components/elements/data/SimpleNotificationCard";
import SimpleIconDescCard from "../components/kit/components/elements/data/SimpleIconDescCard";
import CustomSelect from "../components/kit/components/form/select/CustomSelect";
import InfoNumberCard from "../components/kit/components/elements/data/InfoNumberCard";
import TagsCard from "../components/kit/components/elements/data/TagsCard";

const IndexPage: FC = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col md:flex-row w-full items-start justify-between md:justify-start h-full md:h-1/2">
        <div className="sm:text-center z-20 md:z-30 lg:text-left w-full md:w-1/2 flex flex-col items-center md:items-start justify-start md:justify-center h-full">
          <h1 className="tracking-tight font-extrabold text-gray-900 text-5xl md:text-6xl">
            <span className="block xl:inline">
              Quickly and easily create stunning UI with
            </span>
            <span className="flex w-40 m-auto text-indigo-600 xl:inline">
              {" "}
              fastUI
            </span>
          </h1>
          <p className="mt-3  text-gray-500 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Fast UI gives you access to over 200 CSS components based on
            Tailwind css 2.0 and fontawesome. FastUI is free and open source.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start w-full">
            <div className="rounded-md shadow">
              <Link href="/started">
                <a className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2">
                  Get started
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="https://github.com/Charlie85270/fastUI"
                className="w-full flex items-center justify-center px-8 py-3  text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2"
              >
                <i className="fab fa-github mr-2" />
                <span className="ml-2">Github</span>
              </a>
            </div>
          </div>
        </div>
        <div className="opacity-10 z-10 md:z-50 md:opacity-70 sm:text-center  absolute perspective lg:text-left transform  w-full right-0  md:right-20 -top-56  md:w-1/2">
          <div className="flex gap-4 gap-y-1">
            <div className="col-1">
              <div className="mb-4">
                <div className="flex items-center justify-center w-full gap-4">
                  <Button icon="fas fa-step-backward" color="blue" />
                  <Button icon="fas fa-pause" color="blue" />
                  <Button icon="fas fa-upload" color="blue" />
                  <Button icon="fas fa-step-forward" color="blue" />
                </div>
              </div>

              <div className="mb-4">
                <TagsCard />
              </div>
              <div className="mb-4">
                <SimplePhotoDescCard />
              </div>

              <div className="mb-4">
                <DeleteConfirmation />
              </div>
              <div className="mb-4">
                <MultipleShoppingCard />
              </div>
            </div>
            <div className="col-1">
              <div className="mb-4 flex gap-4">
                <TextButton label="Annuler" color="red" />
                <TextButton label="Confirmer" color="green" />
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
                <CustomSelect />
              </div>

              <div className="mb-4">
                <PricingCard />
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
                <ClassicShoppingCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default IndexPage;
