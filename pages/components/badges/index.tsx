import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import ClickableBadge from '../../../components/kit/components/elements/badges/ClickableBadge';
import NotificationBadge from '../../../components/kit/components/elements/badges/NotificationBadge';
import BadgeList from '../../../components/kit/components/elements/badges/BadgeList';
import NotificationIconBadge from '../../../components/kit/components/elements/badges/NotificationIconBadge';
import SectionHeader from '../../../components/site/header/SectionHeader';
import Badge from '../../../components/kit/components/elements/badges/Badge';
import ColoredTextAndBadge from '../../../components/kit/components/elements/badges/ColoredTextAndBadge';

const BadgesPage: FC = () => {
    return (
        <AppLayout title="Badges free Tailwind components" desc="Badges, Popins... components for tailwind css">
            <SectionHeader title="Badges" />

            <ComponentLayout
                title="Badge"
                element={<Badge label="Hello" color="bg-indigo-500" textColor="text-white" />}
                component={Badge}
            />
            <ComponentLayout
                title="Badge with remove button"
                element={<Badge label="Hello" color="bg-indigo-500" textColor="text-white" removeAction={() => null} />}
                component={Badge}
            />
            <ComponentLayout
                title="Badge with remove button and icon"
                element={
                    <Badge
                        label="Hello"
                        icon={true}
                        color="bg-indigo-500"
                        textColor="text-white"
                        removeAction={() => null}
                    />
                }
                component={Badge}
            />
            <ComponentLayout
                title="Badge stroke with border"
                element={
                    <Badge
                        label="Hello"
                        color="bg-red-200"
                        borderColor="border border-red-600"
                        textColor="text-red-600"
                    />
                }
                component={Badge}
            />

            <ComponentLayout
                title="Badge line"
                element={<Badge label="Hello" borderColor="border border-indigo-500" textColor="text-indigo-500" />}
                component={Badge}
            />
            <ComponentLayout
                title="Stroke with icon"
                element={<Badge icon={true} label="Facebook" color="bg-blue-200" textColor="text-blue-600" />}
                component={Badge}
            />
            <ComponentLayout
                title="Line with icon"
                element={
                    <Badge
                        icon={true}
                        label="Facebook"
                        borderColor="border border-indigo-500"
                        textColor="text-indigo-500"
                    />
                }
                component={Badge}
            />
            <ComponentLayout
                title="Line with button"
                element={
                    <Badge
                        icon={true}
                        label="Facebook"
                        removeAction={() => null}
                        borderColor="border border-indigo-500"
                        textColor="text-indigo-500"
                    />
                }
                component={Badge}
            />
            <ComponentLayout title="Full button" element={<ClickableBadge />} component={ClickableBadge} />
            <ComponentLayout title="List of badges" element={<BadgeList />} component={BadgeList} />
            <ComponentLayout
                title="Pink badge"
                element={
                    <ColoredTextAndBadge
                        badgeLabel="Pink"
                        label="Im a sexy badge and you can use me everyday at every hour."
                        backgroundBadgeColor="bg-pink-600"
                        textColor="text-pink-600"
                    />
                }
                component={Badge}
            />
            <ComponentLayout
                title="Black badge"
                element={
                    <ColoredTextAndBadge
                        badgeLabel="Black"
                        label="Im a sexy badge and you can use me everyday at every hour."
                        backgroundBadgeColor="bg-gray-700"
                        textColor="text-gray-700"
                    />
                }
                component={Badge}
            />

            <ComponentLayout
                title="Notification badge"
                element={<NotificationBadge number={2} />}
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
