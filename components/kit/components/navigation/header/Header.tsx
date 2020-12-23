import React, { useState } from "react";
import FormSubscribe from "../../form/layout/FormSubscribe";
import Ddm from "../../elements/ddm/DropDownMenu";
import Link from "next/link";

interface Props {
  forceMenuOpenInMobile?: boolean;
  forceDDMOpenInMobile?: boolean;
  links: HeaderLink[];
  ddmItems?: DDMItem[];
  withShadow?: boolean;
  hideGitHubLink?: boolean;
  alignRight?: boolean;
  hideHelp?: boolean;
  withSearchBar?: boolean;
  isFat?: boolean;
}
interface HeaderLink {
  label: string;
  link?: string;
  isSelected?: boolean;
  desc?: string;
  icon?: string;
}
interface DDMItem {
  icon?: string;
  label: string;
  desc?: string;
  link?: string;
}

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav
        className={`bg-white dark:bg-gray-800 ${
          props.withShadow ? " shadow" : ""
        }${props.isFat ? " py-4" : ""} `}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className={`${
                props.alignRight ? "w-full justify-between" : ""
              } flex items-center`}
            >
              <a className="flex-shrink-0" href="/">
                <img
                  className="h-8 w-8"
                  src="/icons/rocket.svg"
                  alt="Workflow"
                />
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {props.links.map((link) => {
                    return (
                      <Link href={link.link || "#"}>
                        <a
                          key={link.label}
                          className={`${
                            link.isSelected
                              ? "text-gray-800 dark:text-white"
                              : "text-gray-300"
                          }  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md ${
                            props.isFat ? "text-md" : "text-sm"
                          } font-medium`}
                        >
                          {link.label}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="block">
              {props.withSearchBar && (
                <div className="-mr-2 flex">
                  <FormSubscribe label="Search" placeholder="components" />
                </div>
              )}
              <div className="ml-4 flex items-center md:ml-6">
                {!props.hideHelp && (
                  <Link href="/started">
                    <a className="">
                      <i className="fas fa-cogs mr-2 w-8 h-8 text-gray-400 hover:text-gray-200" />
                    </a>
                  </Link>
                )}
                {!props.hideGitHubLink && (
                  <a
                    href="https://github.com/Charlie85270/fastUI"
                    className="p-1 rounded-full text-gray-400 focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View github</span>
                    <i className="fab fa-github h-8 w-8" />
                  </a>
                )}
                {props.ddmItems && (
                  <div className="ml-3 relative">
                    <Ddm
                      icon="fas fa-user-circle"
                      withBackground={false}
                      forceOpen={props.forceDDMOpenInMobile}
                      items={props.ddmItems.map((item) => {
                        return { label: item.label };
                      })}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`text-gray-800 hover:text-gray-400 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
              >
                {isMenuOpen ? (
                  <i className="fas fa-times block h-8 w-8"></i>
                ) : (
                  <i className="fas fa-bars block h-8 w-8"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        {(isMenuOpen || props.forceMenuOpenInMobile) && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {props.links.map((link) => {
                return (
                  <Link key={link.label} href={link.link || "#"}>
                    <a
                      className={`${
                        link.isSelected
                          ? "text-gray-800 dark:text-white"
                          : "text-gray-300 hover:text-gray-800 dark:hover:text-white"
                      } block px-3 py-2 rounded-md text-base font-medium`}
                    >
                      {link.label}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Header;
