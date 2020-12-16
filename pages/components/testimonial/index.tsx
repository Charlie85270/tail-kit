import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Button from "../../../components/kit/components/elements/buttons/Button";
import SimpleTestimonial from "../../../components/kit/components/pagesection/testimonial/SimpleTestimonial";
import BigTestimonial from "../../../components/kit/components/pagesection/testimonial/BigTestimonial";
import MultipleTestimonial from "../../../components/kit/components/pagesection/testimonial/MultipleTestimonial";
import BigTestimonialFlex from "../../../components/kit/components/pagesection/testimonial/BigTestimonialFlex";

const ComponentsPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Testimonials" />
      <ComponentLayout
        showSwitchMode={true}
        title="Small"
        element={<SimpleTestimonial withShadow={true} />}
        component={Button}
      />

      <ComponentLayout
        title="Big"
        showSwitchMode={true}
        vertical={true}
        element={<BigTestimonial />}
        component={Button}
      />
      <ComponentLayout
        title="Big with image on left"
        showSwitchMode={true}
        vertical={true}
        element={<BigTestimonialFlex />}
        component={BigTestimonialFlex}
      />

      <ComponentLayout
        showSwitchMode={true}
        title="Multiple"
        vertical={true}
        element={<MultipleTestimonial />}
        component={Button}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
