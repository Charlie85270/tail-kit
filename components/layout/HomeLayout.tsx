import { FC } from 'react';
import AppHeader from '../site/header/AppHeader';
import Meta from '../site/Meta';

const HomeLayout: FC = ({ children }) => {
    return (
        <>
            <Meta
                pageTitle="Tailwind UI KIT – 250 components and templates for React, VueJS and Angular."
                description="Over 200 free and open source components and templates for tailwind css to build beautiful UI. All are fully coded and work with React, Angular and VueJS."
            />

            <div className="relative bg-white overflow-hidden h-screen">
                <div className="max-w-7xl mx-auto h-full">
                    <div className="relative pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
                        <AppHeader hideLinks={true} />
                        <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 h-full">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeLayout;
