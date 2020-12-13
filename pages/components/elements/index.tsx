import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import TextButton from "../../../components/kit/components/buttons/TextButton";
import TextAndIconButton from "../../../components/kit/components/buttons/TextAndIconButton";
import IconButton from "../../../components/kit/components/buttons/IconButton";
import SimpleLoadingButton from "../../../components/kit/components/buttons/SimpleLoadingButton";
import MultipleButton from "../../../components/kit/components/buttons/MultipleButton";
import DisabledButton from "../../../components/kit/components/buttons/DisabledButton";
import FacebookButton from "../../../components/kit/components/buttons/FacebookButton";
import TwitterButton from "../../../components/kit/components/buttons/TwitterButton";
import GoogleButton from "../../../components/kit/components/buttons/GoogleButton";
import PagerButton from "../../../components/kit/components/buttons/PagerButton";

const ComponentsPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Element" />
      <ComponentLayout
        title="Simple button"
        element={<TextButton />}
        component={TextButton}
      />
      <ComponentLayout
        title="Simple button with icon"
        element={<TextAndIconButton />}
        component={TextAndIconButton}
      />
      <ComponentLayout
        title="Simple icon button"
        element={<IconButton />}
        component={IconButton}
      />
      <ComponentLayout
        title="Animate button"
        element={<SimpleLoadingButton />}
        component={SimpleLoadingButton}
      />
      <ComponentLayout
        title="Disabled button"
        element={<DisabledButton />}
        component={DisabledButton}
      />
      <ComponentLayout
        title="Multiple button"
        element={<MultipleButton />}
        component={MultipleButton}
      />
      <ComponentLayout
        title="Pager button"
        element={<PagerButton />}
        component={PagerButton}
      />
      <ComponentLayout
        title="Facebook button"
        element={<FacebookButton />}
        component={FacebookButton}
      />
      <ComponentLayout
        title="Twitter button"
        element={<TwitterButton />}
        component={TwitterButton}
      />
      <ComponentLayout
        title="Google button"
        element={<GoogleButton />}
        component={GoogleButton}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
