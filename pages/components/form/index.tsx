import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import FormSubscribe from "../../../components/kit/components/form/layout/FormSubscribe";
import CreateAccount from "../../../components/kit/components/form/layout/CreateAccount";
import SignIn from "../../../components/kit/components/form/layout/SignIn";
import ContactForm from "../../../components/kit/components/form/layout/ContactForm";
import LoginWithBackground from "../../../components/kit/components/form/layout/LoginWithBackground";
import UserInfoForm from "../../../components/kit/components/form/layout/UserInfoForm";
import DesignLogin from "../../../components/kit/components/form/layout/DesignLogin";

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
      <ComponentLayout
        showSwitchMode={true}
        title="Contact form"
        element={<ContactForm />}
        component={ContactForm}
      />
      <ComponentLayout
        vertical={true}
        title="Login with background"
        element={<LoginWithBackground />}
        component={LoginWithBackground}
      />
      <ComponentLayout
        vertical={true}
        title="Login design"
        element={<DesignLogin />}
        component={DesignLogin}
      />
      <ComponentLayout
        vertical={true}
        title="User information form"
        element={<UserInfoForm />}
        component={UserInfoForm}
      />
    </AppLayout>
  );
};

export default TogglePage;
