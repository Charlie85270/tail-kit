import React, { useEffect } from 'react';

const SquarePub = () => {
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
            data-ad-client="ca-pub-9198515375847190"
            data-ad-slot="5242587151"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default SquarePub;
