import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Button from "../../../components/kit/components/elements/buttons/Button";
import SimpleTextCta from "../../../components/kit/components/pagesection/cta/SimpleTextCta";
import SimpleTestimonial from "../../../components/kit/components/pagesection/testimonial/SimpleTestimonial";
import BigTestimonial from "../../../components/kit/components/pagesection/testimonial/BigTestimonial";
import MultipleTestimonial from "../../../components/kit/components/pagesection/testimonial/MultipleTestimonial";

const ComponentsPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Testimonials" />
      <ComponentLayout
        title="Small light"
        element={
          <SimpleTestimonial
            withShadow={true}
            backgroundColor="bg-white"
            textColor="text-gray-800"
            nameColor="text-gray-800"
            descColor="text-gray-500"
          />
        }
        component={Button}
      />
      <ComponentLayout
        title="Small dark"
        element={
          <SimpleTestimonial
            withShadow={true}
            backgroundColor="bg-gray-800"
            textColor="text-white"
            nameColor="text-white"
            descColor="text-gray-50"
          />
        }
        component={Button}
      />
      <ComponentLayout
        title="Big light"
        vertical={true}
        element={
          <BigTestimonial
            backgroundColor="bg-white"
            textColor="text-gray-800"
            nameColor="text-gray-800"
            descColor="text-gray-800"
          />
        }
        component={Button}
      />
      <ComponentLayout
        title="Big dark"
        vertical={true}
        element={
          <BigTestimonial
            backgroundColor="bg-gray-800"
            textColor="text-white"
            nameColor="text-white"
            descColor="text-white"
          />
        }
        component={Button}
      />
      <ComponentLayout
        title="Multiple light"
        vertical={true}
        element={<MultipleTestimonial />}
        component={Button}
      />
      <ComponentLayout
        title="Multiple dark"
        vertical={true}
        element={<MultipleTestimonial isDark={true} />}
        component={Button}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
