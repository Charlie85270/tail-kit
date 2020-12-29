import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import SimpleTextCta from "../../../components/kit/components/pagesection/cta/SimpleTextCta";
import SubscribeCta from "../../../components/kit/components/pagesection/cta/SubscribeCta";
import NotifyMeCta from "../../../components/kit/components/pagesection/cta/NotifyMeCta";
import MultipleImagesCta from "../../../components/kit/components/pagesection/cta/MultipleImagesCta";

const ComponentsPage: FC = () => {
  const title = "Want to be millionaire ?";
  const subtitle = "It's today or never.";
  const desc =
    "I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely";
  return (
    <AppLayout title="CTA free Tailwind components" desc="CTA, Banners and more components for tailwind css">
      <SectionHeader title="Buttons" />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="Light"
        element={<SimpleTextCta title={title} subtitle={subtitle} />}
        component={SimpleTextCta}
      />

      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="with 2 actions"
        element={<SimpleTextCta twoButton={true} title={title} subtitle={subtitle} />}
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="Vertical"
        element={<SimpleTextCta isVertical={true} title={title} subtitle={subtitle} />}
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="With description"
        element={<SimpleTextCta description={desc} isVertical={true} title={title} subtitle={subtitle} />}
        component={SimpleTextCta}
      />
      <ComponentLayout
        showSwitchMode={true}
        vertical={true}
        title="On left"
        element={<SimpleTextCta isLeft={true} isVertical={true} title={title} subtitle={subtitle} />}
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="With image"
        element={
          <SimpleTextCta isLeft={true} image="/images/car/1.jpg" isVertical={true} title={title} subtitle={subtitle} />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="with image and desc"
        element={
          <SimpleTextCta
            isLeft={true}
            description={desc}
            image="/images/object/1.png"
            isVertical={true}
            title={title}
            subtitle={subtitle}
          />
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
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="Notify cta"
        element={<NotifyMeCta />}
        component={NotifyMeCta}
      />
      <ComponentLayout
        vertical={true}
        showSwitchMode={true}
        title="Multiple images cta"
        element={
          <MultipleImagesCta
            title="Mother hearth host your travel"
            description="The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient & awe inspiring."
          />
        }
        component={MultipleImagesCta}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
