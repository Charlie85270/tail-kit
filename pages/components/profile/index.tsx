import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import CoverAndButtonsProfilCard from '../../../components/kit/components/pagesection/profile/CoverAndButtonsProfilCard';
import AddProfilInfo from '../../../components/kit/components/pagesection/profile/AddProfilInfo';
import CoverAndInfoProfil from '../../../components/kit/components/pagesection/profile/CoverAndInfoProfil';
import FullPhotoCard from '../../../components/kit/components/pagesection/profile/FullPhotoCard';
import SimpleProfile from '../../../components/kit/components/pagesection/profile/SimpleProfil';
import HeadProfil from '../../../components/kit/components/pagesection/profile/HeadProfil';

const ComponentsPage: FC = () => {
    return (
        <AppLayout
            title="Profile cards free Tailwind components"
            desc="Profile cards and more components for tailwind css"
        >
            <SectionHeader title="Profile / Team" />
            <ComponentLayout
                showSwitchMode={true}
                title="Simple horizontal"
                element={<SimpleProfile horizontal={true} />}
                component={SimpleProfile}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="Simple vertical"
                element={<SimpleProfile />}
                component={SimpleProfile}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With action"
                element={<SimpleProfile horizontal={true} withAction={true} />}
                component={SimpleProfile}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With cover"
                element={<CoverAndButtonsProfilCard />}
                component={CoverAndButtonsProfilCard}
            />
            <ComponentLayout showSwitchMode={true} title="Head" element={<HeadProfil />} component={HeadProfil} />
            <ComponentLayout showSwitchMode={true} title="Add" element={<AddProfilInfo />} component={AddProfilInfo} />

            <ComponentLayout
                showSwitchMode={true}
                title="With cover and info"
                element={<CoverAndInfoProfil />}
                component={CoverAndInfoProfil}
            />

            <ComponentLayout title="Photo Full" element={<FullPhotoCard />} component={FullPhotoCard} />
        </AppLayout>
    );
};

export default ComponentsPage;
