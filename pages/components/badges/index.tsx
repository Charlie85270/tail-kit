import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Badge from "../../../components/kit/components/elements/badges/Badge";
import ClickableBadge from "../../../components/kit/components/elements/badges/ClickableBadge";
import NotificationBadge from "../../../components/kit/components/elements/badges/NotificationBadge";
import BadgeList from "../../../components/kit/components/elements/badges/BadgeList";
import NotificationIconBadge from "../../../components/kit/components/elements/badges/NotificationIconBadge";

const BadgesPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Badges" />

      <ComponentLayout
        title="Badge stroke"
        element={
          <Badge label="Hello" color="bg-red-200" textColor="text-red-600" />
        }
        component={Badge}
      />
      <ComponentLayout
        title="Badge line"
        element={
          <Badge
            label="Hello"
            borderColor="border border-indigo-500"
            textColor="text-indigo-500"
          />
        }
        component={Badge}
      />
      <ComponentLayout
        title="Stroke with icon"
        element={
          <Badge
            icon="fab fa-facebook-f"
            label="Facebook"
            color="bg-blue-200"
            textColor="text-blue-600"
          />
        }
        component={Badge}
      />
      <ComponentLayout
        title="Line with icon"
        element={
          <Badge
            icon="fab fa-facebook-f"
            label="Facebook"
            borderColor="border border-indigo-500"
            textColor="text-indigo-500"
          />
        }
        component={Badge}
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
