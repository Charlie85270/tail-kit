import React from 'react';
import FormSubscribe from '../../form/layout/FormSubscribe';

const SubscribeCta = () => {
    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
                <h2 className={`text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl`}>
                    We've got more coming...
                </h2>
                <p className={`mt-2 max-w-xl text-base text-gray-400`}>
                    Want to hear from us when we add new components? Sign up for our newsletter and we'll email you
                    every time we release a new batch of components.
                </p>
                <form>
                    <div className="sm:flex jusitfy-start mt-6">
                        <FormSubscribe label="Subscribe" placeholder="Email" />
                    </div>
                </form>

                <div className="hidden lg:block absolute inset-y-0 lg:left-2/3 xl:left-1/2 right-0">
                    <picture>
                        <source srcSet="/images/object/5.webp" type="image/webp" />
                        <source srcSet="/images/object/5.png" />
                        <img
                            className="w-1/2 object-cover maw-w-44 mx-auto"
                            src="/images/object/5.png"
                            alt="shopping item"
                        />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default SubscribeCta;
