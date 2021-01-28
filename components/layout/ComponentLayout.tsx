import * as gtag from '../../lib/gtag';

import { LiveEditor, LivePreview, LiveProvider } from 'react-live';
import { useCallback, useRef, useState } from 'react';

import EDITOR_THEME from '../../editorTheme';
import Link from 'next/link';
import ReactDOMServer from 'react-dom/server';
import Toggle from '../kit/components/form/toggle/Toggle';
import { formatHtml } from '../../utils/Utils';

interface Props {
    element: JSX.Element;
    component: any;
    title: string;
    jsLink?: string;
    needConfiguration?: boolean;
    showSwitchMode?: boolean;
    vertical?: boolean;
    containerClasses?: string;
    fullscreen?: boolean;
}

enum STATUS {
    EDIT_CODE = 'edit',
    DEFAULT = 'default',
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

    const [isDarkMode, setDarkMode] = useState(false);
    const [hasCopied, setHasCopied] = useState(false);
    const previewRef = useRef<HTMLDivElement>();

    const changeMode = (isDark) => {
        setDarkMode(isDark);
        if (isDark) {
            previewRef.current.classList.add('dark');
        } else {
            previewRef.current.classList.remove('dark');
        }
    };

    const copyCode = () => {
        const el = document.createElement('textarea');
        el.value = code();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setHasCopied(true);
        gtag.event({
            category: 'action',
            value: props.title,
            label: 'Copy code',
            action: 'Copy',
        });
    };

    const COPY_BTN = () => {
        return (
            <button
                onClick={copyCode}
                className={`w-28 px-4 py-2 flex items-center text-base font-medium rounded-md ${
                    hasCopied
                        ? 'text-white bg-green-500 hover:bg-green-700'
                        : 'text-gray-800 bg-white hover:bg-gray-200'
                }`}
            >
                <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z" />
                </svg>
                {hasCopied ? 'Copied' : 'Copy'}
            </button>
        );
    };

    const [status, setStatus] = useState<STATUS>(STATUS.DEFAULT);
    return (
        <div
            className={`bg-gray-100 shadow rounded-xl mb-4 ${props.containerClasses ? props.containerClasses : ''}`}
            key={props.title}
        >
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 border rounded-xl">
                <p className="text-xl font-light text-gray-600 mb-2 md:mb-0">{props.title}</p>
                <div className="flex items-center flex-row flex-wrap gap-4 justify-center">
                    {props.showSwitchMode && <Toggle label="Dark mode" onChange={(mode) => changeMode(mode)} />}

                    {props.jsLink && (
                        <a
                            className="flex items-center text-black border border-gray-800 bg-yellow-300 hover:bg-yellow-400 rounded-lg p-2"
                            href={props.jsLink}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className=" w-6 h-6 mr-2"
                                viewBox="0 0 1792 1792"
                            >
                                <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
                            </svg>
                            Need JS
                        </a>
                    )}
                    {props.needConfiguration && (
                        <Link href="/started#configuration">
                            <a className="flex items-center text-black border border-gray-800 bg-yellow-300 hover:bg-yellow-400 rounded-lg p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className=" w-6 h-6 mr-2"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
                                </svg>
                                Need configuration
                            </a>
                        </Link>
                    )}
                    <div className="w-32">
                        <button
                            onClick={() => setStatus(STATUS.EDIT_CODE)}
                            className="w-28 flex items-center justify-between px-4 py-2 border border-gray-800  text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100"
                        >
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 2048 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M681 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" />
                            </svg>
                            code
                        </button>
                    </div>

                    {COPY_BTN()}
                </div>
            </div>

            <LiveProvider
                scope={scope}
                theme={EDITOR_THEME}
                disabled={status !== STATUS.EDIT_CODE}
                language="markup"
                code={code()}
            >
                <div
                    className={`${
                        props.vertical ? 'flex-col justify-center' : 'flex-col md:flex-row justify-between '
                    } flex gap-4 items-start ${props.fullscreen ? '' : 'mx-4 py-12'}`}
                >
                    <div ref={previewRef} className={`${props.vertical ? 'w-full ' : ''}mx-auto`}>
                        <LivePreview />
                    </div>

                    {status !== STATUS.DEFAULT && (
                        <div className={`${props.vertical ? '' : 'md:w-3/4'} relative w-full`}>
                            <div>
                                <div className="absolute top-2 right-24 z-10">{COPY_BTN()}</div>

                                <button
                                    onClick={() => setStatus(STATUS.DEFAULT)}
                                    className="w-12 p-2 absolute top-2 right-2 z-30 text-base font-medium rounded-md bg-red-300 hover:bg-red-400 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="6"
                                        height="6"
                                        className="h-6 w-6 mx-auto text-gray-800 "
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                    >
                                        <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                                    </svg>
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
