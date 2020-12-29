import React, { FC } from "react";
const InformationIconCard: FC = () => {
  return (
    <div className="shadow-lg rounded-2xl w-64 p-4 py-6 bg-white">
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-green-200 rounded-full relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 2304 1792"
            className="w-8 h-8 text-green-700 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z" />
          </svg>
        </div>

        <p className="text-gray-800 text-xl font-medium mb-4 mt-4">Justice</p>
        <p className="text-gray-400 text-center text-xs px-2">
          I therefore look forward to further developments in this area so that we can ease the path in bringing these
          reckless individuals to justice.
        </p>
      </div>
    </div>
  );
};
export default InformationIconCard;
