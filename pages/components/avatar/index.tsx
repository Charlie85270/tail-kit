import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Avatar from "../../../components/kit/components/elements/avatars/Avatar";
import MultipleAvatar from "../../../components/kit/components/elements/avatars/MultipleAvatar";

const AvatarPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Avatar" />
      <ComponentLayout
        title="Simple full rounded avatar"
        element={<Avatar />}
        component={Avatar}
      />
      <ComponentLayout
        title="small full rounded avatar"
        element={<Avatar size="small" />}
        component={Avatar}
      />
      <ComponentLayout
        title="Big full rounded avatar"
        element={<Avatar size="big" />}
        component={Avatar}
      />
      <ComponentLayout
        title="Round avatar"
        element={<Avatar type="rounded" />}
        component={Avatar}
      />
      <ComponentLayout
        title="Square avatar"
        element={<Avatar type="square" />}
        component={Avatar}
      />
      <ComponentLayout
        title="Avatar with badge"
        element={<Avatar withInfo={true} />}
        component={Avatar}
      />
      <ComponentLayout
        title="Multiple avatar"
        element={<MultipleAvatar />}
        component={MultipleAvatar}
      />
      <ComponentLayout
        title="Multiple small avatar"
        element={<MultipleAvatar size="small" />}
        component={MultipleAvatar}
      />
      <ComponentLayout
        title="Multiple big avatar"
        element={<MultipleAvatar size="big" />}
        component={MultipleAvatar}
      />
    </AppLayout>
  );
};

export default AvatarPage;
