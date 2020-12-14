import React, { useState, FC } from "react";
import Link from "next/link";

const menuEntry = [
  {
    title: "Elements",
    icon: "far fa-address-card",
    desc: "Buttons, avatars, badges ....",
    link: "/components#elements",
  },
  {
    title: "Forms",
    icon: "fab fa-wpforms",
    desc: "Input text, select, textarea, signin layout ...",
    link: "/components#forms",
  },
  {
    title: "Commerce",
    icon: "fas fa-store",
    desc: "Pricing card, shooping item, basket layout...",
    link: "/components#commerce",
  },
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  return (
    <div className="relative bg-white z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6  md:space-x-10">
          <div className="flex justify-start items-center gap-12">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSectionOpen(!isSectionOpen)}
                  className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-xl"
                >
                  <span>Components</span>

                  <svg
                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isSectionOpen && (
                  <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {menuEntry.map((entry) => {
                          return (
                            <Link href={entry.link}>
                              <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                <i
                                  className={`${entry.icon} flex-shrink-0 h-6 w-6 text-indigo-600`}
                                />

                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {entry.title}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {entry.desc}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <a href="https://github.com/Charlie85270/fastUI" className="">
            <i className="fab fa-github mr-2 w-10 h-10 text-gray-500" />
          </a>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 z-20 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav>
                  {menuEntry.map((entry) => {
                    <Link href={entry.link}>
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                        <i
                          className={`${entry.icon} far fa-address-card flex-shrink-0 h-6 w-6 text-indigo-600`}
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {entry.title}
                        </span>
                      </a>
                    </Link>;
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
