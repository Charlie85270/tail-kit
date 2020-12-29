import React from "react";

const StoreButton = () => {
  return (
    <div className="flex justify-center">
      <div>
        <button
          type="button"
          className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center"
        >
          <div className="mr-3">
            <svg viewBox="0 0 384 512" width="30">
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
          </div>
          <div>
            <div className="text-xs">Download on the</div>
            <div className="text-xl font-semibold font-sans -mt-1">App Store</div>
          </div>
        </button>

        <button
          type="button"
          className="flex mt-3 w-48 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center"
        >
          <div className="mr-3">
            <svg viewBox="0 0 384 512" width="30">
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
          </div>
          <div>
            <div className="text-xs">Download on the</div>
            <div className="text-2xl font-semibold font-sans -mt-1">App Store</div>
          </div>
        </button>

        <button
          type="button"
          className="flex mt-3 w-60 h-14 bg-black text-white rounded-xl items-center justify-center"
        >
          <div className="mr-3">
            <svg viewBox="0 0 384 512" width="30">
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
          </div>
          <div>
            <div className="text-xs">Download on the</div>
            <div className="text-2xl font-semibold font-sans -mt-1">Mac App Store</div>
          </div>
        </button>

        <button
          type="button"
          className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center"
        >
          <div className="mr-3">
            <svg viewBox="30 336.7 120.9 129.2" width="30">
              <path
                fill="#FFD400"
                d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
              />
              <path
                fill="#FF3333"
                d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
              />
              <path
                fill="#48FF48"
                d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
              />
              <path
                fill="#3BCCFF"
                d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
              />
            </svg>
          </div>
          <div>
            <div className="text-xs">GET IT ON</div>
            <div className="text-xl font-semibold font-sans -mt-1">Google Play</div>
          </div>
        </button>
      </div>
    </div>
  );
};
export default StoreButton;
