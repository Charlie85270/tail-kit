import React from "react";
import FormSubscribe from "../../form/layout/FormSubscribe";

interface Props {
  withCredits?: boolean;
  withSocial?: boolean;
  withSearch?: boolean;
  links: FooterLinks[];
}

interface FooterLinks {
  label: string;
  link?: string;
}

const SimpleFooter = (props: Props) => {
  return (
    <footer className={`bg-white dark:bg-gray-800 w-full py-8`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          {props.links.map((link) => {
            return (
              <li className="my-2" key={link.label}>
                <a
                  className={`text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200`}
                  href={link.link || "#"}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {props.withSocial && (
          <div
            className={`pt-8 flex max-w-xs mx-auto items-center justify-between`}
          >
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            >
              <i className={`text-xl fab fa-facebook-f`}></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            >
              <i className={`text-xl fab fa-twitter`}></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            >
              <i className={`text-xl fab fa-github`}></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            >
              <i className={`text-xl fab fa-linkedin-in`}></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            >
              <i className={`text-xl fab fa-amazon`}></i>
            </a>
          </div>
        )}

        {props.withSearch && (
          <div
            className={`text-center pt-10 sm:pt-12 font-light flex items-center justify-center`}
          >
            <FormSubscribe label="Subscribe" placeholder="Email" />
          </div>
        )}
        {props.withCredits && (
          <div
            className={`text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center`}
          >
            Created by Charlie
          </div>
        )}
      </div>
    </footer>
  );
};
export default SimpleFooter;
