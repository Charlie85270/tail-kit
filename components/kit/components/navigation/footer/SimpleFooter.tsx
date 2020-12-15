import React from "react";
import FormSubscribe from "../../form/layout/FormSubscribe";

interface Props {
  bgColor: string;
  textColor: string;
  textHoverColor: string;
  withCredits?: boolean;
  withSocialLink?: boolean;
  withSiteIcon?: boolean;
  withSocial?: boolean;
  withSearch?: boolean;
  links: string[];
}

const SimpleFooter = (props: Props) => {
  return (
    <footer className={`${props.bgColor} w-full py-8`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          {props.links.map((sub) => {
            return (
              <li className="my-2" key={sub}>
                <a
                  className={`${props.textColor} hover:${props.textHoverColor} transition-colors duration-200`}
                  href="#"
                >
                  {sub}
                </a>
              </li>
            );
          })}
        </ul>

        {props.withSocial && (
          <div
            className={`${props.textColor} pt-8 flex max-w-xs mx-auto items-center justify-between`}
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
            <FormSubscribe />
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
export default SimpleFooter;
