import { FC } from "react";

import HomeLayout from "../components/layout/HomeLayout";
import Link from "next/link";
import HomeComps from "../components/site/home/HomeComps";

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
              Tailwind-kit
            </span>
          </h1>
          <h2 className="mt-3  text-gray-500 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Fast UI gives you access to over{" "}
            <span className="text-gray-700 font-bold">200</span> CSS responsive
            components, based on Tailwind css 2.0 and fontawesome. All it's free
            and open source.
          </h2>
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
        <HomeComps />
      </div>
    </HomeLayout>
  );
};

export default IndexPage;
