import { FC, useEffect } from "react";
import { AppProps } from "next/app";
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
