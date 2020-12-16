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
        title="Light"
        element={
          <SimpleTextCta
            backgroundColor="bg-white"
            textColor="text-black"
            text2Color="text-indigo-600"
            btnColor="indigo"
          />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        title="Dark"
        element={
          <SimpleTextCta
            textColor="text-white"
            text2Color="text-indigo-600"
            backgroundColor="bg-gray-800"
            btnColor="indigo"
          />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        title="Dark with 2 actions"
        element={
          <SimpleTextCta
            textColor="text-white"
            text2Color="text-indigo-600"
            backgroundColor="bg-gray-800"
            btnColor="indigo"
            btnColor2="gray"
          />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        title="Vertical"
        element={
          <SimpleTextCta
            textColor="text-white"
            text2Color="text-indigo-600"
            backgroundColor="bg-gray-800"
            btnColor="indigo"
            isVertical={true}
          />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        title="With description"
        element={
          <SimpleTextCta
            withDesc={true}
            textColor="text-white"
            text2Color="text-indigo-600"
            backgroundColor="bg-gray-800"
            descColor="text-gray-300"
            btnColor="indigo"
            isVertical={true}
          />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        title="On left"
        element={
          <SimpleTextCta
            isLeft={true}
            textColor="text-white"
            text2Color="text-indigo-600"
            backgroundColor="bg-gray-800"
            descColor="text-gray-300"
            btnColor="indigo"
            isVertical={true}
          />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        title="With image"
        element={
          <SimpleTextCta
            isLeft={true}
            withImage={true}
            textColor="text-white"
            text2Color="text-indigo-600"
            backgroundColor="bg-gray-800"
            descColor="text-gray-300"
            btnColor="indigo"
            isVertical={true}
          />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        title="Light with image"
        element={
          <SimpleTextCta
            isLeft={true}
            withImage={true}
            backgroundColor="bg-white"
            textColor="text-black"
            text2Color="text-indigo-600"
            btnColor="indigo"
            descColor="text-gray-300"
            isVertical={true}
          />
        }
        component={SimpleTextCta}
      />
      <ComponentLayout
        vertical={true}
        title="Light with sub"
        element={
          <SubscribeCta
            backgroundColor="bg-white"
            textColor="text-black"
            text2Color="text-gray-400"
          />
        }
        component={SubscribeCta}
      />
      <ComponentLayout
        vertical={true}
        title="Dark with sub"
        element={
          <SubscribeCta
            backgroundColor="bg-gray-800"
            textColor="text-white"
            text2Color="text-gray-400"
          />
        }
        component={SubscribeCta}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
