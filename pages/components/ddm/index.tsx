import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Button from "../../../components/kit/components/elements/buttons/Button";
import Ddm from "../../../components/kit/components/elements/ddm/ddm";

const DdmPages: FC = () => {
  const ddmItems = [
    {
      label: "Stripe",
      icon: "fab fa-cc-stripe",
    },
    {
      label: "Mastercard",
      icon: "fab fa-cc-mastercard",
    },
    {
      label: "Paypal",
      icon: "fab fa-cc-paypal",
    },
  ];

  return (
    <AppLayout>
      <SectionHeader title="Drop Down" />
      <ComponentLayout
        title="Simple ddm"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Ddm
            label="Envoyer"
            forceOpen={true}
            items={ddmItems.map((item) => {
              return { label: item.label };
            })}
          />
        }
        component={Button}
      />

      <ComponentLayout
        title="With icon"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Ddm
            icon="fas fa-ellipsis-v"
            forceOpen={true}
            items={ddmItems.map((item) => {
              return { label: item.label };
            })}
          />
        }
        component={Button}
      />
      <ComponentLayout
        title="With icon on items"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={<Ddm label="Payer par" forceOpen={true} items={ddmItems} />}
        component={Button}
      />
    </AppLayout>
  );
};

export default DdmPages;
