import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import '../global.css';
import { useRouter } from 'next/dist/client/router';
import * as gtag from '../lib/gtag';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return <Component {...pageProps} />;
};
export default App;
