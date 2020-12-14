import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Badge from "../../../components/kit/components/elements/badges/Badge";
import ClickableBadge from "../../../components/kit/components/elements/badges/ClickableBadge";
import LargeBadge from "../../../components/kit/components/elements/badges/LargeBadge";
import NotificationBadge from "../../../components/kit/components/elements/badges/NotificationBadge";
import BadgeList from "../../../components/kit/components/elements/badges/BadgeList";
import NotificationIconBadge from "../../../components/kit/components/elements/badges/NotificationIconBadge";
import LargeBadgeIcon from "../../../components/kit/components/elements/badges/LargeBadgeIcon";

const BadgesPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Badges" />
      <ComponentLayout
        title="Simple badge"
        element={<Badge />}
        component={Badge}
      />
      <ComponentLayout
        title="Large badge"
        element={<LargeBadge />}
        component={LargeBadge}
      />
      <ComponentLayout
        title="Large badge with icon"
        element={<LargeBadgeIcon />}
        component={LargeBadgeIcon}
      />
      <ComponentLayout
        title="Removable badge"
        element={<ClickableBadge />}
        component={ClickableBadge}
      />
      <ComponentLayout
        title="List of badges"
        element={<BadgeList />}
        component={BadgeList}
      />
      <ComponentLayout
        title="Notification badge"
        element={<NotificationBadge />}
        component={NotificationBadge}
      />
      <ComponentLayout
        title="Notification badge with icon"
        element={<NotificationIconBadge />}
        component={NotificationIconBadge}
      />
    </AppLayout>
  );
};

export default BadgesPage;
