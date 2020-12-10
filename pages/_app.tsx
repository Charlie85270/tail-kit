import { FC } from 'react';
import { AppProps } from 'next/app';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '../global.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
