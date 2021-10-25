import FooterLight from '../kit/components/navigation/footer/FooterLight';
import Meta from '../site/Meta';
import AppHeader from '../site/header/AppHeader';
import AdBanner from '../site/Pub/Banner';

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
            <div className="mx-auto h-full" style={{ minHeight: 85 + 'vh' }}>
                <div className="relative z-10 pb-8 bg-white overflow-hidden sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 h-full">
                    <div className="dark">
                        <AppHeader />
                    </div>

                    <main
                        className={`mx-auto ${withPub ? 'max-w-6xl' : 'max-w-7xl'} px-4 mt-8 sm:px-6  lg:px-8 h-full`}
                    >
                        {children}
                    </main>
                    {withPub && (
                        <div className="px-2 mt-8 w-80 right-0 top-0 pr-4 pt-32 xs:hidden 2xl:absolute">
                            <AdBanner isVertical />
                        </div>
                    )}
                </div>
            </div>
            <div className="dark">
                <FooterLight links={footerLink} />
            </div>
        </div>
    );
};

export default AppLayout;
