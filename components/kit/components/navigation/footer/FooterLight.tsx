import React from "react";
import Link from "next/link";

interface Props {
  links: FooterLink[];
  showSubLinks?: boolean;
}
interface FooterLink {
  label: string;
  link?: string;
}

const FooterLight = (props: Props) => {
  return (
    <footer className="px-3 py-8 bg-white dark:bg-gray-800 text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200">
      <div className="flex flex-col">
        <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
          <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
            {props.links.map((link) => {
              return (
                <a
                  aria-current="page"
                  href={link.link || "#"}
                  className="hover:text-gray-700 dark:hover:text-white"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
          <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
            <a
              className="hover:text-primary-gray-20"
              href="https://github.com/Charlie85270/fastUI"
            >
              <span className="sr-only">View on GitHub</span>
              <i className="fab fa-github mr-2 w-10 h-10 text-gray-400 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white" />
            </a>
            <Link href="/started">
              <a className="ml-4 hover:text-primary-gray-20" href="#">
                <span className="sr-only">Settings</span>
                <i className="fas fa-cogs mr-2 w-10 h-10 text-gray-400 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white" />
              </a>
            </Link>
          </div>
          <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full "></div>
          <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
            <span className="">© 2020</span>
            <span className="mt-7 md:mt-1">
              Created by{" "}
              <a
                className="underline hover:text-primary-gray-20"
                href="https://www.linkedin.com/in/crabiller/"
              >
                Charlie
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterLight;
