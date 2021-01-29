import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import Sidebar from '../../../components/kit/components/navigation/sidebar/Sidebar';
import LittleSidebar from '../../../components/kit/components/navigation/sidebar/LittleSidebar';
import SidebarWithCateg from '../../../components/kit/components/navigation/sidebar/SidebarWithCateg';
import SideBar2 from '../../../components/kit/components/navigation/sidebar/SideBar2';

const SideBar: FC = () => {
    const headerImg = '/icons/rocket.svg';
    const headerText = 'Tail-Kit';
    const links = [
        {
            label: 'Element',
        },
        {
            label: 'Form',

            selected: true,
        },
        {
            label: 'Commerce',
        },
        {
            label: 'Navigation',
        },
    ];
    const linksWithIcons = [
        {
            label: 'Element',
            icon: (
                <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z" />
                </svg>
            ),
        },
        {
            label: 'Form',
            icon: (
                <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z" />
                </svg>
            ),
            selected: true,
        },
        {
            label: 'Commerce',
            notifications: 7,
            icon: (
                <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z" />
                </svg>
            ),
        },
        {
            label: 'Navigation',
            icon: (
                <svg
                    width="20"
                    height="20"
                    className="m-auto"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
                </svg>
            ),
        },
    ];

    const bottomLink = {
        label: 'Support',
        icon: (
            <svg
                width="20"
                fill="currentColor"
                height="20"
                className="h-5 w-5"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z" />
            </svg>
        ),
    };

    return (
        <AppLayout title="Sidebar free Tailwind components" desc="Sidebar and more components for tailwind css">
            <SectionHeader title="Sidebar" />
            <ComponentLayout
                title="Light"
                showSwitchMode={true}
                element={<Sidebar links={links} />}
                component={Sidebar}
            />
            <ComponentLayout
                title="With icons"
                showSwitchMode={true}
                element={<Sidebar links={linksWithIcons} />}
                component={Sidebar}
            />

            <ComponentLayout
                showSwitchMode={true}
                title="With header"
                element={<Sidebar links={linksWithIcons} headerImg={headerImg} headerText={headerText} />}
                component={Sidebar}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With border"
                element={
                    <Sidebar links={linksWithIcons} withBorder={true} headerImg={headerImg} headerText={headerText} />
                }
                component={Sidebar}
            />

            <ComponentLayout
                showSwitchMode={true}
                title="With footer"
                element={
                    <Sidebar
                        links={linksWithIcons}
                        bottomLink={bottomLink}
                        headerImg={headerImg}
                        headerText={headerText}
                    />
                }
                component={Sidebar}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With notifications"
                element={
                    <Sidebar
                        links={linksWithIcons}
                        bottomLink={bottomLink}
                        headerImg={headerImg}
                        headerText={headerText}
                    />
                }
                component={Sidebar}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With Divider"
                element={<SidebarWithCateg />}
                component={SidebarWithCateg}
            />
            <ComponentLayout showSwitchMode={true} title="With gradient" element={<SideBar2 />} component={SideBar2} />
            <ComponentLayout
                title="Just icon"
                showSwitchMode={true}
                element={<LittleSidebar links={linksWithIcons} />}
                component={LittleSidebar}
            />

            <ComponentLayout
                title="With header"
                showSwitchMode={true}
                element={<LittleSidebar links={linksWithIcons} withHeader={true} />}
                component={LittleSidebar}
            />
            <ComponentLayout
                title="With footer"
                showSwitchMode={true}
                element={<LittleSidebar links={linksWithIcons} withHeader={true} withBottomLink={true} />}
                component={LittleSidebar}
            />
        </AppLayout>
    );
};

export default SideBar;
