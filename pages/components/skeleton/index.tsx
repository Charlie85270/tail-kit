import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import SimpleSkeleton from '../../../components/kit/components/elements/skeleton/SimpleSkeleton';
import PictureAndTextSkeleton from '../../../components/kit/components/elements/skeleton/PictureAndTextSkeleton';
import HorizontalSkeletonCard from '../../../components/kit/components/elements/skeleton/HorizontalSkeletonCard';

const ComponentsPage: FC = () => {
    return (
        <AppLayout
            title="Skeleton free Tailwind components"
            desc="Skeleton, banner, placeolder and more components for tailwind css"
        >
            <SectionHeader title="Skeletons" />
            <ComponentLayout vertical={true} title="Simple" element={<SimpleSkeleton />} component={SimpleSkeleton} />
            <ComponentLayout
                vertical={true}
                title="Card skeleton"
                element={<PictureAndTextSkeleton />}
                component={PictureAndTextSkeleton}
            />
            <ComponentLayout
                vertical={true}
                title="Horizontal Card skeleton"
                element={<HorizontalSkeletonCard />}
                component={HorizontalSkeletonCard}
            />
        </AppLayout>
    );
};

export default ComponentsPage;
