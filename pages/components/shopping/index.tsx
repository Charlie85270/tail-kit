import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ShoppingDetailsCard from "../../../components/kit/components/commerce/shopping/ShoppingDetailsCard";
import ShoppingColorChoice from "../../../components/kit/components/commerce/shopping/ShoppingColorChoice";
import MultipleShoppingCard from "../../../components/kit/components/commerce/shopping/MultipleShoppingCard";
import ClassicShoppingCard from "../../../components/kit/components/commerce/shopping/ClassicShoppingCard";
import SimpleShoppingCard from "../../../components/kit/components/commerce/shopping/SimpleShoppingCard";
import ShippedCard from "../../../components/kit/components/commerce/shopping/ShippedCard";

const ShoppingPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Shopping" />
      <ComponentLayout
        title="Elegant"
        element={<SimpleShoppingCard />}
        component={SimpleShoppingCard}
      />
      <ComponentLayout
        title="Colorful"
        element={<ShoppingColorChoice />}
        component={ShoppingColorChoice}
      />
      <ComponentLayout
        title="Multiple"
        element={<MultipleShoppingCard />}
        component={MultipleShoppingCard}
      />
      <ComponentLayout
        title="Classic"
        element={<ClassicShoppingCard />}
        component={ClassicShoppingCard}
      />
      <ComponentLayout
        title="Shopping"
        element={<ShoppingDetailsCard />}
        component={ShoppingDetailsCard}
      />
      <ComponentLayout
        title="Shipped"
        element={<ShippedCard />}
        component={ShippedCard}
      />
    </AppLayout>
  );
};

export default ShoppingPage;
