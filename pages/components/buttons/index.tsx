import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import Button from "../../../components/kit/components/elements/buttons/Button";
import ButtonWithIndications from "../../../components/kit/components/elements/buttons/ButtonWithIndications";
import MultipleButton from "../../../components/kit/components/elements/buttons/MultipleButton";
import PagerButton from "../../../components/kit/components/elements/buttons/PagerButton";
import RoundedButton from "../../../components/kit/components/elements/buttons/RoundedButton";
import StoreButton from "../../../components/kit/components/elements/buttons/StoreButton";

const ComponentsPage: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="Buttons" />
      <ComponentLayout
        title="button"
        element={<Button label="Valider" color="indigo" />}
        component={Button}
      />
      <ComponentLayout
        title="button with icon"
        element={<Button label="Upload" icon="fas fa-upload" color="red" />}
        component={Button}
      />
      <ComponentLayout
        title="icon button"
        element={<Button icon="fas fa-upload" color="blue" />}
        component={Button}
      />
      <ComponentLayout
        title="Animate button"
        element={
          <Button
            icon="fas fa-spinner"
            animated={true}
            color="blue"
            label="loading"
          />
        }
        component={Button}
      />
      <ComponentLayout
        title="Disabled button"
        element={
          <Button disabled label="Upload" icon="fas fa-upload" color="red" />
        }
        component={Button}
      />
      <ComponentLayout
        title="Button with information"
        element={<ButtonWithIndications label="Star" indication="654" />}
        component={ButtonWithIndications}
      />
      <ComponentLayout
        title="Multiple buttons"
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
        element={
          <Button
            label="Sign in with Facebook"
            icon="fab fa-facebook-f"
            color="blue"
          />
        }
        component={Button}
      />
      <ComponentLayout
        title="Google button"
        element={
          <Button
            label="Sign in with Google"
            icon="fab fa-google"
            color="red"
          />
        }
        component={Button}
      />
      <ComponentLayout
        title="Github button"
        element={
          <Button
            label="Sign in with Github"
            icon="fab fa-github"
            color="gray"
          />
        }
        component={Button}
      />
      <ComponentLayout
        title="Sotre button"
        element={<StoreButton />}
        component={StoreButton}
      />
      <ComponentLayout
        title="Rounded button"
        element={<RoundedButton label="Play" />}
        component={Button}
      />
      <ComponentLayout
        title="Rounded button with icon"
        element={<RoundedButton label="Play" icon="far fa-play-circle" />}
        component={Button}
      />
      <ComponentLayout
        title="Rounded icon"
        element={<RoundedButton icon="far fa-play-circle" />}
        component={Button}
      />
    </AppLayout>
  );
};

export default ComponentsPage;
