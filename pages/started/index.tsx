import React, { FC } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { LiveProvider, LiveEditor } from "react-live";
import EDITOR_THEME from "../../editorTheme";
import Link from "next/link";

const confCode = `module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    // These options are passed through directly to PurgeCSS
    options: {
      safelist: [/bg-/, /focus:ring/, /text-/],
    },
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
      title="Configuration to use Tailwind-kit for tailwind components"
      desc="Over 200 freen and open source build components for tailwind css"
    >
      <div className="pb-10 border-b border-gray-200 mb-10" id="installation">
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            Installation
          </h1>
        </div>

        <p className="mt-1 text-lg text-gray-500">
          Tailwind-kit is based on{" "}
          <a
            href="https://tailwindcss.com/"
            className="text-gray-700 underline hover:text-gray-800"
          >
            Tailwind CSS framework{" "}
          </a>
          and{" "}
          <a
            href="https://fontawesome.com/"
            className="text-gray-700 underline hover:text-gray-800"
          >
            FontAwesome
          </a>
          .
        </p>
        <p className="mt-1 text-lg text-gray-500">
          You need to install both library to take full advantage of FastUI.
        </p>
        <div className="mt-4">
          <p className="mt-1 text-lg text-gray-500">
            Link to install tailwind CSS :{" "}
            <a
              href="https://tailwindcss.com/docs"
              className="underline text-xl text-gray-700"
            >
              Documentation
            </a>
          </p>
          <p className="mt-1 text-lg text-gray-500">
            Link to install FontAwesome :{" "}
            <a
              href="https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers"
              className="underline text-xl text-gray-700"
            >
              Documentation
            </a>
          </p>

          <p className="pt-4 text-xl text-gray-700">
            <i className="fas fa-check mr-4 text-green-500" />
            Once these libraries are installed, you can started !
            <Link href="/components">
              <a className="w-28 mb-4 w-44 px-4 py-2 ml-4 text-base font-medium rounded-md text-white bg-gray-700 hover:bg-black">
                Let's go !
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div
        className="pb-10 border-b border-gray-200 mb-10 text-lg text-gray-500"
        id="configuration"
      >
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            Configuration
          </h1>
        </div>

        <p className="mt-1 mb-4">
          Some Tailwind-kit components need to override basic Tailwind
          configuration to work.
        </p>
        <p>
          All components who needs configuration are indicated with this sign:
          <a
            className="ml-4 text-black border border-gray-800 bg-yellow-300 hover:bg-yellow-400 rounded-lg p-2"
            href="#"
          >
            <i className="fas fa-exclamation-circle mr-2"></i>Need configuration
          </a>
        </p>

        <div className="mt-4">
          <p className="mt-1 text-lg text-gray-500">
            For more infirmation about tailwind configuration :{" "}
            <a
              href="https://tailwindcss.com/docs/configuration"
              className="underline text-xl text-gray-700"
            >
              Documentation
            </a>
          </p>

          <p className="pt-4 text-xl text-gray-700 mb-4">
            Below you will find the necessary configuration for all Tailwind-kit
            components (tailwind.config.js file):
          </p>
          <LiveProvider
            theme={EDITOR_THEME}
            disabled={true}
            language="javascript"
            code={confCode}
          >
            <LiveEditor className="rounded-lg" />
          </LiveProvider>
        </div>
      </div>
    </AppLayout>
  );
};

export default StartedPage;
