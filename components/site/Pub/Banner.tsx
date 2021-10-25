import React, { useEffect } from 'react';

interface Props {
    isVertical?: boolean;
}

const AdBanner = ({ isVertical }: Props) => {
    useEffect(() => {
        try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-format="fluid"
            data-ad-layout-key="-6t+ed+2i-1n-4w"
            data-ad-client="ca-pub-9198515375847190"
            data-ad-slot={isVertical ? '7214868435' : '5049524770'}
        ></ins>
    );
};

export default AdBanner;
