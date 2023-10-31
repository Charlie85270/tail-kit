import Link from 'next/link';
import FooterLight from '../kit/components/navigation/footer/FooterLight';
import Meta from '../site/Meta';
import AppHeader from '../site/header/AppHeader';

const footerLink = [
    {
        label: 'Configuration',
        link: '/started',
    },
    {
        label: 'Github',
        link: 'https://github.com/Charlie85270/tail-kit',
    },
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/crabiller/',
    },
];

export const menuEntry = [
    {
        label: 'Elements',
        desc: 'Buttons, Avatars, Badges, Alerts, Progress bar....',
        link: '/components#elements',
    },
    {
        label: 'Forms',
        desc: 'Input text, Select, Textarea, Login pages, Signin templates ...',
        link: '/components#forms',
    },
    {
        label: 'Commerce',
        desc: 'Pricing cards, Shopping cards, Basket layouts...',
        link: '/components#commerce',
    },
    {
        label: 'Navigation',
        desc: 'Headers, Footers, Sidebar ...',
        link: '/components#navigation',
    },
    {
        label: 'Sections',
        desc: 'Features, CTA, testimonial, Team sections ...',
        link: '/components#pagesection',
    },
    {
        label: 'List',
        desc: 'List, Tables, Todo list, Description List, Actions list...',
        link: '/components#list',
    },
];

export const menuTemplates = [
    {
        label: 'Dashboard',
        desc: 'Dashboard templates page, Admin templates....',
        link: '/templates#dashboard',
    },
    {
        label: 'Landing page',
        desc: 'Template like sport site, product home page, Ecommerce',
        link: '/templates#home',
    },
    {
        label: 'Errors page',
        desc: '404 templates page, Internal error templates....',
        link: '/templates#errors',
    },
];

interface Props {
    title: string;
    desc: string;
    withPub?: boolean;
    children: React.ReactNode;
}

const AppLayout = ({ title, desc, children, withPub }: Props) => {
    return (
        <div className="relative bg-white ">
            <Meta pageTitle={title} description={desc} />
            <div className="h-full mx-auto" style={{ minHeight: 85 + 'vh' }}>
                <div className="relative z-10 h-full pb-8 overflow-hidden bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <div className="dark">
                        <AppHeader />
                    </div>

                    <main
                        className={`mx-auto ${withPub ? 'max-w-6xl' : 'max-w-7xl'} px-4 mt-8 sm:px-6  lg:px-8 h-full`}
                    >
                        <div className="relative hidden md:flex flex-col items-center justify-between w-full mb-5 rounded shadow-lg h-44 overflow-hidden md:flex-row">
                            <img src="/banner.jpg" className="absolute w-full h-full rounded-lg z-1" />
                            <div className="flex items-center justify-between px-6 pt-4 my-2 md:pt-0 w-54 md:w-72">
                                <div className="z-10 flex justify-between w-72 item-center">
                                    <video
                                        autoPlay={true}
                                        loop={true}
                                        className="inline-flex transform scale-130 absolute items-center justify-center text-base font-bold text-white px-1 py-1 bg-gray-900 border-transparent relative z-10 leading-7 transition-all duration-200 rounded-xl  origin-left rotate-2"
                                    >
                                        <source src="/pub.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="flex flex-col  w-full  items-center pr-4">
                                <p className="z-10 mb-8 flex items-center  font-mono font-bold text-sm text-center text-white md:text-xl">
                                    Visually create and edit Tailwind CSS UIs 10x faster using AI.
                                </p>

                                <a
                                    href="https://www.devwares.com/windframe/?ref=charlie"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="z-10 flex cursor-pointer items-center h-10 px-4 py-2 mb-4 text-base font-medium text-black bg-white border rounded md:mb-0 w-28 hover:bg-gray-100"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="mr-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="2"
                                            d="M23,1 C23,1 16.471872,0.541707069 14,3 C13.9767216,3.03685748 10,7 10,7 L5,8 L2,10 L10,14 L14,22 L16,19 L17,14 C17,14 20.9631426,10.0232786 21,10 C23.4582929,7.5281282 23,1 23,1 Z M17,8 C16.4475,8 16,7.5525 16,7 C16,6.4475 16.4475,6 17,6 C17.5525,6 18,6.4475 18,7 C18,7.5525 17.5525,8 17,8 Z M7,17 C6,16 4,16 3,17 C2,18 2,22 2,22 C2,22 6,22 7,21 C8,20 8,18 7,17 Z"
                                        ></path>
                                    </svg>
                                    Create
                                </a>
                            </div>
                        </div>
                        {children}
                    </main>
                </div>
            </div>
            <div className="dark">
                <FooterLight links={footerLink} />
            </div>
        </div>
    );
};

export default AppLayout;
