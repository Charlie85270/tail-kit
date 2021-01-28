import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import InformationCard from '../../../components/kit/components/elements/alert/InformationCard';
import ConfirmationCard from '../../../components/kit/components/elements/alert/ConfirmationCard';
import InformationModale from '../../../components/kit/components/elements/alert/InformationModale';
import SimpleTeam from '../../../components/kit/components/pagesection/team/SimpleTeam';
import SimpleTextCta from '../../../components/kit/components/pagesection/cta/SimpleTextCta';
import SimpleAlert from '../../../components/kit/components/elements/alert/SimpleAlert';
import ClosableLongAlert from '../../../components/kit/components/elements/alert/ClosableLongAlert';
import CookieAlert2 from '../../../components/kit/components/elements/alert/CookieAlert2';
import BandeauAlert from '../../../components/kit/components/elements/alert/BandeauAlert';
import BandeauLineAlert from '../../../components/kit/components/elements/alert/BandeauLineAlert';

const AlertPage: FC = () => {
    const title = 'Become millionaire ?';
    const subtitle = "It's today or never.";

    return (
        <AppLayout
            title="Alert free Tailwind components"
            desc="Alerts, Modales, Banners ... components for tailwind css"
        >
            <SectionHeader title="Alert" />
            <ComponentLayout
                vertical={false}
                title="Simple text alert"
                element={
                    <SimpleAlert title="Danger" text="Battery is low, your phone can't take a photo" type="alert" />
                }
                component={SimpleAlert}
            />
            <ComponentLayout
                vertical={false}
                title="Simple text succes"
                element={
                    <SimpleAlert title="Success" text="Congratulations, you are the best player." type="success" />
                }
                component={SimpleAlert}
            />
            <ComponentLayout
                vertical={false}
                title="Simple text danger"
                element={<SimpleAlert title="Be Warned" text="Something not ideal might be happening." type="danger" />}
                component={SimpleAlert}
            />
            <ComponentLayout
                vertical={true}
                title="Closable long alert"
                element={<ClosableLongAlert text="Something not ideal might be happening." />}
                component={ClosableLongAlert}
            />

            <ComponentLayout
                vertical={true}
                title="Cookie alert"
                showSwitchMode={true}
                element={
                    <BandeauAlert
                        title="We use cookies! Something not ideal might be happening."
                        shortTitle="This site use cookies!"
                        link="#"
                        linkLabel="Learn more"
                        closeAction={() => null}
                    />
                }
                component={BandeauAlert}
            />
            <ComponentLayout
                vertical={true}
                title="Line alert"
                element={
                    <BandeauLineAlert
                        title="We use cookies! Something not ideal might be happening."
                        closeAction={() => null}
                    />
                }
                component={BandeauLineAlert}
            />
            <ComponentLayout
                vertical={false}
                title="Cookie alert 2"
                showSwitchMode={true}
                element={<CookieAlert2 />}
                component={CookieAlert2}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="Information card"
                element={<InformationCard />}
                component={InformationCard}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="Confirmation card"
                element={<ConfirmationCard />}
                component={ConfirmationCard}
            />
            <ComponentLayout
                vertical={true}
                title="Modale"
                element={
                    <InformationModale withFooter={false} onClose={() => null} withCloseBtn={false}>
                        <SimpleTextCta isVertical={true} title={title} subtitle={subtitle} />
                    </InformationModale>
                }
                component={InformationModale}
            />
            <ComponentLayout
                vertical={true}
                title="Modale with close btn"
                jsLink="http://google.com"
                element={
                    <InformationModale withFooter={false} onClose={() => null} withCloseBtn={true}>
                        <SimpleTeam name="Charlie" img="/images/person/5.jpg" job="Lead dev" desc="" />
                    </InformationModale>
                }
                component={InformationModale}
            />
            <ComponentLayout
                vertical={true}
                title="Modale with footer actions"
                element={
                    <InformationModale withFooter={true} onClose={() => null} withCloseBtn={false}>
                        <SimpleTeam name="Charlie" img="/images/person/5.jpg" job="Lead dev" desc="" />
                    </InformationModale>
                }
                component={InformationModale}
            />
        </AppLayout>
    );
};

export default AlertPage;
