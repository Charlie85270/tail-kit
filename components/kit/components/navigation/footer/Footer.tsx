import React from "react";
import FormSubscribe from "../../form/layout/FormSubscribe";

interface Props {
  withCredits?: boolean;
  withSocialLink?: boolean;
  withSearch?: boolean;
  links: FooterLink[];
  showSubLinks?: boolean;
}
interface FooterLink {
  label: string;
  subLinks?: string[];
}

const Footer = (props: Props) => {
  return (
    <footer className={`bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8`}>
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
          {props.links.map((link) => {
            return (
              <li key={link.label} className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2
                    className={`text-gray-500 dark:text-gray-200 text-md uppercase mb-4`}
                  >
                    {link.label}
                  </h2>
                  {link.subLinks && props.showSubLinks && (
                    <ul>
                      {link.subLinks.map((sub) => {
                        return (
                          <li
                            className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                            key={sub}
                          >
                            <a href="#">{sub}</a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        {props.withSocialLink && (
          <div
            className={`pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between`}
          >
            <a href="#">
              <i
                className={`text-xl fab fa-facebook-f hover:text-gray-800 dark:hover:text-white transition-colors duration-200`}
              ></i>
            </a>
            <a href="#">
              <i
                className={`text-xl fab fa-twitter hover:text-gray-800 dark:hover:text-white transition-colors duration-200`}
              ></i>
            </a>
            <a href="#">
              <i
                className={`text-xl fab fa-github hover:text-gray-800 dark:hover:text-white transition-colors duration-200`}
              ></i>
            </a>
            <a href="#">
              <i
                className={`text-xl fab fa-linkedin-in hover:text-gray-800 dark:hover:text-white transition-colors duration-200`}
              ></i>
            </a>
            <a href="#">
              <i
                className={`text-xl fab fa-amazon hover:text-gray-800 dark:hover:text-white transition-colors duration-200`}
              ></i>
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
            className={`text-center pt-10 sm:pt-12 font-light flex items-center justify-center`}
          >
            Created by Charlie
          </div>
        )}
      </div>
    </footer>
  );
};
export default Footer;
