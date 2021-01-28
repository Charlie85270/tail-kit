import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import Footer from '../../../components/kit/components/navigation/footer/Footer';
import SimpleFooter from '../../../components/kit/components/navigation/footer/SimpleFooter';
import FooterLight from '../../../components/kit/components/navigation/footer/FooterLight';

const FooterPage: FC = () => {
    const links = [
        {
            label: 'Components',
            subLinks: ['Elements', 'Forms', 'Commerces', 'Navigation'],
        },
        {
            label: 'Contacts',
            subLinks: ['Github', 'Facebook', 'Twitter', 'LinkedIn'],
        },
        {
            label: 'Customization',
            subLinks: ['Settings', 'Themes', 'Plugins', 'LinkedIn'],
        },
    ];

    const simpleLinks = [
        {
            label: 'FAQ',
        },
        {
            label: 'Configuration',
        },
        {
            label: 'Github',
        },
        {
            label: 'LinkedIn',
        },
    ];

    return (
        <AppLayout
            title="Footers sections free Tailwind components"
            desc="Footers sections more components for tailwind css"
        >
            <SectionHeader title="Footer" />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Simple"
                element={<SimpleFooter links={simpleLinks} withSocial={false} />}
                component={Footer}
            />

            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With socials"
                element={<SimpleFooter links={simpleLinks} withSocial={true} />}
                component={Footer}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With socials and credits"
                element={<SimpleFooter links={simpleLinks} withSocial={true} withCredits={true} />}
                component={Footer}
            />

            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="full"
                element={<SimpleFooter links={simpleLinks} withSocial={true} withSearch={true} withCredits={true} />}
                component={Footer}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Multiple"
                element={<Footer links={links} showSubLinks={true} />}
                component={Footer}
            />

            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With socials"
                element={<Footer links={links} withSocialLink={true} showSubLinks={true} />}
                component={Footer}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With socials and credits"
                element={<Footer links={links} withSocialLink={true} withCredits={true} showSubLinks={true} />}
                component={Footer}
            />
            <ComponentLayout
                vertical={true}
                title="Multiple full"
                showSwitchMode={true}
                element={
                    <Footer
                        links={links}
                        withSocialLink={true}
                        withCredits={true}
                        withSearch={true}
                        showSubLinks={true}
                    />
                }
                component={Footer}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Light"
                element={<FooterLight links={links} />}
                component={Footer}
            />
        </AppLayout>
    );
};

export default FooterPage;
