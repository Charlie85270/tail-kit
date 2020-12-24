import { FC, useEffect } from "react";
import { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;
import "../global.css";
import ReactGA from "react-ga";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    ReactGA.initialize("G-1KT9X3Z5KR", { debug: true });
    ReactGA.pageview(window.location.pathname);
  }, []);
  return <Component {...pageProps} />;
};
export default App;
