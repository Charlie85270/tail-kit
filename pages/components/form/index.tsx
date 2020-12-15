import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import FormSubscribe from "../../../components/kit/components/form/layout/FormSubscribe";
import SignInWithFb from "../../../components/kit/components/form/layout/SignInWithFb";
import SignIn from "../../../components/kit/components/form/layout/SignIn";
import SignInWithFbAndGoogle from "../../../components/kit/components/form/layout/SignInWithFbAndGoogle";
import CreateAccount from "../../../components/kit/components/form/layout/CreateAccount";

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
        element={<CreateAccount />}
        component={CreateAccount}
      />
      <ComponentLayout title="Login" element={<SignIn />} component={SignIn} />
      <ComponentLayout
        title="With facebook"
        element={<SignInWithFb />}
        component={SignInWithFb}
      />
      <ComponentLayout
        title="With facebook"
        element={<SignInWithFbAndGoogle />}
        component={SignInWithFbAndGoogle}
      />
    </AppLayout>
  );
};

export default TogglePage;
