import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import InputText from "../../../components/kit/components/form/inputtext/InputText";
import InputArea from "../../../components/kit/components/form/inputtext/InputArea";

const InputTextPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Input" />

      <ComponentLayout
        title="Simple"
        element={<InputText square={true} placeholder="Your email" />}
        component={InputText}
      />
      <ComponentLayout
        title="Rounded"
        element={<InputText placeholder="Your email" />}
        component={InputText}
      />
      <ComponentLayout
        title="with label"
        element={
          <InputText label="Email" name="email" placeholder="Your name" />
        }
        component={InputText}
      />
      <ComponentLayout
        title="required"
        element={
          <InputText
            label="Email"
            required
            name="email"
            placeholder="Your email"
          />
        }
        component={InputText}
      />
      <ComponentLayout
        title="on error"
        element={
          <InputText
            label="Email"
            error="Email is invalid"
            required
            name="email"
            placeholder="Your email"
          />
        }
        component={InputText}
      />
      <ComponentLayout
        title="Disabled"
        element={
          <InputText
            label="Email disabled"
            disabled={true}
            name="email"
            placeholder="Your email"
          />
        }
        component={InputText}
      />
      <ComponentLayout
        title="with icon"
        element={
          <InputText
            icon="far fa-envelope"
            name="email"
            placeholder="Your email"
          />
        }
        component={InputText}
      />
      <ComponentLayout
        title="with helper"
        element={
          <InputText helper="http://" name="url" placeholder="www.google.com" />
        }
        component={InputText}
      />
      <ComponentLayout
        title="textarea"
        element={<InputArea />}
        component={InputArea}
      />
    </AppLayout>
  );
};

export default InputTextPage;
