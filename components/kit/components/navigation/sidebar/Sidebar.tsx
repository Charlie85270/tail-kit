import React from "react";

interface Props {
  textColor: string;
  withHeader?: boolean;
  selectedTextColor: string;
  backgroundColor: string;
  backgroundSelectedColor?: string;
  borderColor?: string;
  backgroundHoverColor?: string;
  withBorder?: boolean;
  links: Links[];
  withBottomLink?: boolean;
  withIcons?: boolean;
  withDivider?: boolean;
}
interface Links {
  label: string;
  selected?: boolean;
  icon?: string;
}

const Sidebar = (props: Props) => {
  return (
    <div className={`relative ${props.backgroundColor}`}>
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className={`w-72 h-screen`}>
          {props.withHeader && (
            <div className="flex items-center justify-start mx-6 mt-10">
              <img className="h-10" src="/icons/rocket.svg" />

              <span className={`${props.textColor} ml-4 text-2xl font-bold`}>
                {" "}
                FastUI
              </span>
            </div>
          )}

          <nav
            className={`mt-10 px-6 ${
              props.withDivider ? "divide-y divide-gray-200" : ""
            }`}
          >
            {props.links.map((link) => {
              return (
                <a
                  className={`${
                    props.withBorder && link.selected
                      ? `border-r-2 border-${props.borderColor}`
                      : ""
                  } ${
                    link.selected ? props.selectedTextColor : props.textColor
                  } hover:${props.selectedTextColor} hover:${
                    props.backgroundHoverColor
                  } ${
                    link.selected ? props.backgroundSelectedColor : ""
                  } flex items-center p-2 my-6 ${
                    props.withBorder ? "" : "rounded-lg"
                  }`}
                  href="#"
                >
                  {link.icon && <i className={`${link.icon} h-6 w-6 mr-2`} />}

                  <span className="mx-4 text-lg font-normal">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {props.withBottomLink && (
            <div className="absolute bottom-0 my-10">
              <a
                className={`${props.textColor} flex items-center py-2 px-8`}
                href="#"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10 7C9.63113 7 9.3076 7.19922 9.13318 7.50073C8.85664 7.97879 8.24491 8.14215 7.76685 7.86561C7.28879 7.58906 7.12543 6.97733 7.40197 6.49927C7.91918 5.60518 8.88833 5 10 5C11.6569 5 13 6.34315 13 8C13 9.30622 12.1652 10.4175 11 10.8293V11C11 11.5523 10.5523 12 10 12C9.44773 12 9.00001 11.5523 9.00001 11V10C9.00001 9.44772 9.44773 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="mx-4 font-medium">Support</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
