import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import CoverAndButtonsProfilCard from "../../../components/kit/components/profile/CoverAndButtonsProfilCard";
import FullPhotoCard from "../../../components/kit/components/profile/FullPhotoCard";
import ShoppingDetailsCard from "../../../components/kit/components/shopping/ShoppingDetailsCard";
import Avatar from "../../../components/kit/components/profile/Avatar";
import SimpleProfilVerti from "../../../components/kit/components/profile/SimpleProfilVerti";
import SimpleProfilHori from "../../../components/kit/components/profile/SimpleProfilHori";
import AddProfilInfo from "../../../components/kit/components/profile/AddProfilInfo";
import CoverAndInfoProfil from "../../../components/kit/components/profile/CoverAndInfoProfil";
import GroupInfo from "../../../components/kit/components/profile/GroupInfo";
import MultipleAvatar from "../../../components/kit/components/profile/MultipleAvatar";
import SectionHeader from "../../../components/site/header/SectionHeader";

const ComponentsPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Profile" />
      <ComponentLayout title="Avatar" element={<Avatar />} component={Avatar} />
      <ComponentLayout
        title="Multiple avatar"
        element={<MultipleAvatar />}
        component={MultipleAvatar}
      />
      <ComponentLayout
        title="Simple profile vertical"
        element={<SimpleProfilVerti />}
        component={SimpleProfilVerti}
      />
      <ComponentLayout
        title="Simple profile horizontal"
        element={<SimpleProfilHori />}
        component={SimpleProfilHori}
      />
      <ComponentLayout
        title="Profile add"
        element={<AddProfilInfo />}
        component={AddProfilInfo}
      />
      <ComponentLayout
        title="With cover"
        element={<CoverAndButtonsProfilCard />}
        component={CoverAndButtonsProfilCard}
      />
      <ComponentLayout
        title="With cover and details"
        element={<CoverAndInfoProfil />}
        component={CoverAndInfoProfil}
      />
      <ComponentLayout
        title="Group details"
        element={<GroupInfo />}
        component={GroupInfo}
      />
      <ComponentLayout
        title="Full picture card"
        element={<FullPhotoCard />}
        component={FullPhotoCard}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
