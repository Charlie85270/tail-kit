import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Checkbox from "../../../components/kit/components/form/toggle/Checkbox";
import Toggle from "../../../components/kit/components/form/toggle/Toggle";
import Radio from "../../../components/kit/components/form/toggle/Radio";

const TogglePage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Toggle" />
      <ComponentLayout
        title="simple"
        configLink="https://tailwindcss.com/docs/background-image"
        element={<Checkbox />}
        component={Checkbox}
      />
      <ComponentLayout
        title="toggle"
        configLink="https://tailwindcss.com/docs/hover-focus-and-other-states#checked"
        element={<Toggle onChange={() => null} />}
        component={Toggle}
      />
      <ComponentLayout title="radio" element={<Radio />} component={Radio} />
    </AppLayout>
  );
};

export default TogglePage;
