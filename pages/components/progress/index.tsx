import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import ProgressBar from '../../../components/kit/components/elements/progress/ProgressBar';

const ProgressPage = () => {
    return (
        <AppLayout
            title="Progress bar free Tailwind components"
            desc="Progress bar and more components for tailwind css"
        >
            <SectionHeader title="Progress bar" />
            <ComponentLayout
                vertical={true}
                title="Simple progress bar"
                element={<ProgressBar color="bg-green-500" />}
                component={ProgressBar}
            />
            <ComponentLayout
                vertical={true}
                title="Fat progress bar"
                element={<ProgressBar color="bg-green-500" isFat={true} />}
                component={ProgressBar}
            />
            <ComponentLayout
                vertical={true}
                title="With label"
                element={<ProgressBar color="bg-green-500" isFat={true} label="75%" />}
                component={ProgressBar}
            />
            <ComponentLayout
                vertical={true}
                title="Colored"
                element={
                    <div className="flex flex-col gap-4">
                        <ProgressBar color="bg-red-500" isFat={true} label="75%" />
                        <ProgressBar color="bg-yellow-500" isFat={true} label="75%" />
                        <ProgressBar color="bg-indigo-500" isFat={true} label="75%" />
                        <ProgressBar color="bg-pink-500" isFat={true} label="75%" />
                    </div>
                }
                component={ProgressBar}
            />
            <ComponentLayout
                vertical={true}
                title="With badge"
                element={
                    <ProgressBar color="bg-pink-300" textColor="text-white" isFat={true} withBadge={true} label="75%" />
                }
                component={ProgressBar}
            />
        </AppLayout>
    );
};

export default ProgressPage;
