import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Button from "../../../components/kit/components/elements/buttons/Button";
import SimpleTextCta from "../../../components/kit/components/pagesection/cta/SimpleTextCta";
import SubscribeCta from "../../../components/kit/components/pagesection/cta/SubscribeCta";

const ComponentsPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Buttons" />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="Light"
        element={<SimpleTextCta />}
        component={SimpleTextCta}
      />

      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="with 2 actions"
        element={<SimpleTextCta twoButton={true} />}
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="Vertical"
        element={<SimpleTextCta isVertical={true} />}
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="With description"
        element={<SimpleTextCta withDesc={true} isVertical={true} />}
        component={SimpleTextCta}
      />
      <ComponentLayout
        showSwitchMode={true}
        vertical={true}
        title="On left"
        element={<SimpleTextCta isLeft={true} isVertical={true} />}
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="With image"
        element={
          <SimpleTextCta isLeft={true} withImage={true} isVertical={true} />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="Light with image"
        element={
          <SimpleTextCta isLeft={true} withImage={true} isVertical={true} />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="with sub and image"
        element={<SubscribeCta />}
        component={SubscribeCta}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
