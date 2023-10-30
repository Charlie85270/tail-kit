import React, { FC } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import { LiveProvider, LiveEditor } from 'react-live';
import EDITOR_THEME from '../../editorTheme';
import Link from 'next/link';

const confCode = `module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
`;

const StartedPage: FC = () => {
    return (
        <AppLayout
            withPub
            title="Configuration to use Tail-Kit for tailwind components"
            desc="Over 200 freen and open source build components for tailwind css"
        >
            <h1 className="mb-4 text-lg italic text-gray-700">
                Tail-kit is a fully coded components KIT for Tailwind css 3.0. All components are free and open source
                and can be used in React, Angular or VueJS applications.
            </h1>
            <div className="pb-10 mb-10 border-b border-gray-200" id="installation">
                <div className="flex items-center">
                    <p className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">Installation</p>
                </div>

                <p className="mt-1 text-lg text-gray-500">
                    Tail-Kit is based on{' '}
                    <a href="https://tailwindcss.com/" className="text-gray-700 underline hover:text-gray-800">
                        Tailwind CSS framework{' '}
                    </a>
                    .
                </p>
                <p className="mt-1 text-lg text-gray-500">
                    You need to install the library to take the full advantage of tail-kit.
                </p>
                <div className="mt-4">
                    <p className="mt-1 text-lg text-gray-500">
                        Link to install Tailwind CSS :{' '}
                        <a href="https://tailwindcss.com/docs" className="text-xl text-gray-700 underline">
                            Documentation
                        </a>
                    </p>

                    <p className="flex items-center pt-4 mb-6 text-xl text-gray-700">
                        <svg
                            className="w-6 h-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            stroke="currentColor"
                            fill="#10b981"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                        </svg>
                        Once Tailwind CSS is installed, you can get started!
                    </p>
                    <div className="md:flex md:items-center md:space-x-4">
                        <Link href="/components">
                            <a className="block w-auto px-4 py-3 mb-4 text-base font-medium text-center text-white bg-gray-800 rounded-md hover:bg-gray-700">
                                &#129513; See components
                            </a>
                        </Link>
                        <Link href="/templates">
                            <a className="block w-auto px-4 py-3 mb-4 text-base font-medium text-center text-white bg-gray-800 rounded-md hover:bg-gray-700">
                                &#127912; See templates
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pb-10 mb-10 text-lg text-gray-500 border-b border-gray-200" id="configuration">
                <div className="flex items-center">
                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">Configuration</h1>
                </div>

                <p className="mt-1 mb-4">
                    Some Tail-Kit components need to override basic Tailwind configuration to work.
                </p>
                <p className="items-center block md:flex">
                    All components that need configuration are indicated with this sign:
                    <a
                        className="flex items-center justify-between p-2 ml-4 text-black bg-yellow-300 border border-gray-800 rounded-lg w-52 hover:bg-yellow-400"
                        href="#"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="mr-2"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
                        </svg>
                        Need configuration
                    </a>
                </p>

                <div className="mt-4">
                    <p className="mt-1 text-lg text-gray-500">
                        For more information about Tailwind configuration:{' '}
                        <a
                            href="https://tailwindcss.com/docs/configuration"
                            className="text-xl text-gray-700 underline"
                        >
                            Documentation
                        </a>
                    </p>

                    <p className="pt-4 mb-4 text-xl text-gray-700">
                        The necessary configuration for all Tail-Kit components (tailwind.config.js file) are available
                        below:
                    </p>
                    <LiveProvider theme={EDITOR_THEME} disabled={true} language="javascript" code={confCode}>
                        <LiveEditor className="rounded-lg" />
                    </LiveProvider>
                </div>
            </div>
        </AppLayout>
    );
};

export default StartedPage;
