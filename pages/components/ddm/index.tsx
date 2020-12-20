import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Button from "../../../components/kit/components/elements/buttons/Button";
import LargeDdm from "../../../components/kit/components/elements/ddm/LargeDropDownMenu";
import Ddm from "../../../components/kit/components/elements/ddm/DropDownMenu";

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
        containerClasses="pb-40"
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
        containerClasses="pb-40"
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
        containerClasses="pb-40"
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
        containerClasses="pb-40"
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
        containerClasses="pb-40"
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
      <ComponentLayout
        showSwitchMode={true}
        containerClasses="pb-60"
        title="Large ddm"
        jsLink="https://github.com/Charlie85270/fastUI"
        element={
          <LargeDdm
            withBackground={true}
            label="Pay with"
            forceOpen={true}
            items={ddmItems}
          />
        }
        component={LargeDdm}
      />
    </AppLayout>
  );
};

export default DdmPages;
