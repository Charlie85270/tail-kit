import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import FormSubscribe from "../../../components/kit/components/form/layout/FormSubscribe";
import CreateAccount from "../../../components/kit/components/form/layout/CreateAccount";
import SignIn from "../../../components/kit/components/form/layout/SignIn";

const TogglePage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Form layout" />
      <ComponentLayout
        title="Subscribe"
        element={<FormSubscribe label="Subscribe" placeholder="Email" />}
        component={FormSubscribe}
      />
      <ComponentLayout
        title="Create account"
        showSwitchMode={true}
        element={<CreateAccount />}
        component={CreateAccount}
      />
      <ComponentLayout
        title="Login"
        showSwitchMode={true}
        element={<SignIn />}
        component={SignIn}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With Facebook"
        element={<SignIn withFacebook={true} />}
        component={SignIn}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With Facebook and Google"
        element={<SignIn withGoogle={true} withFacebook={true} />}
        component={SignIn}
      />
    </AppLayout>
  );
};

export default TogglePage;
