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
      desc: "pay with your stripe account",
    },
    {
      label: "Mastercard",
      icon: "fab fa-cc-mastercard",
      desc: "pay with your mastercard card",
    },
    {
      label: "Paypal",
      icon: "fab fa-cc-paypal",
      desc: "pay with your paypal account",
    },
  ];

  return (
    <AppLayout>
      <SectionHeader title="Drop Down" />
      <ComponentLayout
        title="Simple ddm"
        showSwitchMode={true}
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Ddm
            label="Pay with"
            withBackground={true}
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
        showSwitchMode={true}
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Ddm
            icon="fas fa-user-circle"
            withBackground={false}
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
        showSwitchMode={true}
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Ddm
            label="Pay with"
            withBackground={true}
            forceOpen={true}
            items={ddmItems.map((item) => {
              return { label: item.label, icon: item.icon };
            })}
          />
        }
        component={Button}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With icon on items with divider"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Ddm
            label="Pay with"
            forceOpen={true}
            withBackground={true}
            withDivider={true}
            items={ddmItems.map((item) => {
              return { label: item.label, icon: item.icon };
            })}
          />
        }
        component={Button}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With icon on items with desc"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <Ddm
            label="Pay with"
            withBackground={true}
            forceOpen={true}
            withDivider={true}
            items={ddmItems}
          />
        }
        component={Button}
      />
    </AppLayout>
  );
};

export default DdmPages;
