import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ShoppingDetailsCard from '../../../components/kit/components/commerce/shopping/ShoppingDetailsCard';
import ShoppingColorChoice from '../../../components/kit/components/commerce/shopping/ShoppingColorChoice';
import MultipleShoppingCard from '../../../components/kit/components/commerce/shopping/MultipleShoppingCard';
import ClassicShoppingCard from '../../../components/kit/components/commerce/shopping/ClassicShoppingCard';
import SimpleShoppingCard from '../../../components/kit/components/commerce/shopping/SimpleShoppingCard';
import ShippedCard from '../../../components/kit/components/commerce/shopping/ShippedCard';
import ProductWithEval from '../../../components/kit/components/commerce/shopping/ProductWithEval';

const ShoppingPage: FC = () => {
    return (
        <AppLayout title="Shopping cards free Tailwind components" desc="Shopping cards components for tailwind css">
            <SectionHeader title="Shopping" />

            <ComponentLayout title="Simple" element={<SimpleShoppingCard />} component={SimpleShoppingCard} />

            <ComponentLayout title="Colorful" element={<ShoppingColorChoice />} component={ShoppingColorChoice} />
            <ComponentLayout title="Multiple" element={<MultipleShoppingCard />} component={MultipleShoppingCard} />
            <ComponentLayout title="With eval" element={<ProductWithEval />} component={ProductWithEval} />
            <ComponentLayout
                title="Classic"
                showSwitchMode={true}
                element={<ClassicShoppingCard />}
                component={ClassicShoppingCard}
            />
            <ComponentLayout title="Shopping" element={<ShoppingDetailsCard />} component={ShoppingDetailsCard} />
            <ComponentLayout showSwitchMode={true} title="Shipped" element={<ShippedCard />} component={ShippedCard} />
        </AppLayout>
    );
};

export default ShoppingPage;
