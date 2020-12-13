import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { FC, useState, useCallback, Component } from "react";
import EDITOR_THEME from "../../editorTheme";
import ReactDOMServer from "react-dom/server";
import { formatHtml } from "../../utils/Utils";

interface Props {
  element: JSX.Element;
  component: any;
  title: string;
}

enum STATUS {
  EDIT_CODE = "edit",
  DEFAULT = "default",
}

const ComponentLayout = (props: Props) => {
  const CP = props.component;
  const scope = { CP };

  /**
   * We must use useMemo here but there is an issue with renderToStaticMarkup
   * https://github.com/facebook/react/issues/16416
   */
  const code = useCallback(() => {
    return formatHtml(ReactDOMServer.renderToStaticMarkup(props.element));
  }, [props.element]);

  const [status, setStatus] = useState<STATUS>(STATUS.DEFAULT);
  return (
    <div className="bg-gray-100 shadow rounded-xl mb-4">
      <div className="flex items-center justify-between mb-8 bg-white p-4 border rounded-xl">
        <p className="text-2xl text-gray-800">{props.title}</p>
        <div className="flex items-center flex-row gap-4 justify-center">
          <button
            onClick={() => setStatus(STATUS.EDIT_CODE)}
            className="w-28  px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
          >
            <i className="fas fa-code mr-2"></i>code
          </button>

          <button className="w-28 px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-200">
            <i className="far fa-copy mr-2"></i> copy
          </button>
        </div>
      </div>

      <LiveProvider
        scope={scope}
        theme={EDITOR_THEME}
        disabled={status !== STATUS.EDIT_CODE}
        language="markup"
        code={code()}
      >
        <div className="flex flex-col md:flex-row gap-4 mx-4 justify-between items-start py-16">
          <div className="mx-auto">
            <LivePreview />
          </div>

          {status !== STATUS.DEFAULT && (
            <div className="relative w-3/4">
              <div>
                <button className="w-28 absolute z-30 right-16 top-2 px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-800 bg-gray-100 hover:bg-gray-200">
                  Copy
                </button>
                <button
                  onClick={() => setStatus(STATUS.DEFAULT)}
                  className="w-12 p-2 absolute top-2 right-2 z-30 border border-transparent text-base font-medium rounded-md bg-red-300 hover:bg-red-400 "
                >
                  <i className="text-gray-800 fas fa-times" />
                </button>
                <LiveEditor className="rounded-lg" />
              </div>
            </div>
          )}
        </div>
      </LiveProvider>
    </div>
  );
};

export default ComponentLayout;
