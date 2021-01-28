import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import Checkbox from '../../../components/kit/components/form/toggle/Checkbox';
import MultipleToggle from '../../../components/kit/components/form/toggle/MultipleToggle';
import Radio from '../../../components/kit/components/form/toggle/Radio';

const TogglePage: FC = () => {
    return (
        <AppLayout
            title="Toggle elements section free Tailwind components"
            desc="Toggle elements and more components for tailwind css"
        >
            <SectionHeader title="Toggle" />
            <ComponentLayout title="simple" needConfiguration={true} element={<Checkbox />} component={Checkbox} />
            <ComponentLayout
                title="toggle"
                needConfiguration={true}
                element={<MultipleToggle onChange={() => null} />}
                component={MultipleToggle}
            />
            <ComponentLayout title="radio" element={<Radio />} component={Radio} />
        </AppLayout>
    );
};

export default TogglePage;
