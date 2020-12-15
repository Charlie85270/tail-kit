import React from "react";
import FormSubscribe from "../../form/layout/FormSubscribe";

interface Props {
  bgColor: string;
  textColor: string;
  subTextColor: string;
  textHoverColor: string;
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
    <footer className={`${props.bgColor} pt-4 pb-8 xl:pt-8`}>
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
          {props.links.map((link) => {
            return (
              <li key={link.label} className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className={`${props.textColor} text-md uppercase mb-4`}>
                    {link.label}
                  </h2>
                  {link.subLinks && props.showSubLinks && (
                    <ul>
                      {link.subLinks.map((sub) => {
                        return (
                          <li className="mb-4" key={sub}>
                            <a
                              className={`${props.subTextColor} hover:${props.textHoverColor} transition-colors duration-200`}
                              href="#"
                            >
                              {sub}
                            </a>
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
            className={`${props.subTextColor} pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between`}
          >
            <a href="#">
              <i
                className={`text-xl fab fa-facebook-f hover:${props.textHoverColor} transition-colors duration-200`}
              ></i>
            </a>
            <a href="#">
              <i
                className={`text-xl fab fa-twitter hover:${props.textHoverColor} transition-colors duration-200`}
              ></i>
            </a>
            <a href="#">
              <i
                className={`text-xl fab fa-github hover:${props.textHoverColor} transition-colors duration-200`}
              ></i>
            </a>
            <a href="#">
              <i
                className={`text-xl fab fa-linkedin-in hover:${props.textHoverColor} transition-colors duration-200`}
              ></i>
            </a>
            <a href="#">
              <i
                className={`text-xl fab fa-amazon hover:${props.textHoverColor} transition-colors duration-200`}
              ></i>
            </a>
          </div>
        )}

        {props.withSearch && (
          <div
            className={`${props.textColor} text-center pt-10 sm:pt-12 font-light flex items-center justify-center`}
          >
            <FormSubscribe label="Subscribe" placeholder="Email" />
          </div>
        )}
        {props.withCredits && (
          <div
            className={`${props.textColor} text-center pt-10 sm:pt-12 font-light flex items-center justify-center`}
          >
            Copyright © 2020 by Charlie Rabiller
            <i className="fas ml-2 fa-heart text-red-500"></i>
          </div>
        )}
      </div>
    </footer>
  );
};
export default Footer;
