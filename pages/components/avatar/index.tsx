import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Avatar from "../../../components/kit/components/elements/avatars/Avatar";
import MultipleAvatar from "../../../components/kit/components/elements/avatars/MultipleAvatar";
import AvatarWithInfo from "../../../components/kit/components/elements/avatars/AvatarWithInfo";

const AvatarPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Avatar" />
      <ComponentLayout
        title="Simple avatar"
        element={<Avatar />}
        component={Avatar}
      />
      <ComponentLayout
        title="Avatar with badge"
        element={<AvatarWithInfo />}
        component={AvatarWithInfo}
      />
      <ComponentLayout
        title="Multiple avatar"
        element={<MultipleAvatar />}
        component={MultipleAvatar}
      />
    </AppLayout>
  );
};

export default AvatarPage;
