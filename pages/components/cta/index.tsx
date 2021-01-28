import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import SimpleTextCta from '../../../components/kit/components/pagesection/cta/SimpleTextCta';
import SubscribeCta from '../../../components/kit/components/pagesection/cta/SubscribeCta';
import NotifyMeCta from '../../../components/kit/components/pagesection/cta/NotifyMeCta';
import MultipleImagesCta from '../../../components/kit/components/pagesection/cta/MultipleImagesCta';
import BandeauNumber from '../../../components/kit/components/pagesection/cta/BandeauNumber';
import BandeauInfo from '../../../components/kit/components/pagesection/cta/BandeauInfo';
import TimerEvent from '../../../components/kit/components/pagesection/cta/TimerEvent';
import WatchCta from '../../../components/kit/components/pagesection/cta/WatchCta';
import NextJSCta from '../../../components/kit/components/pagesection/cta/NextJSCta';

const ComponentsPage: FC = () => {
    const title = 'Want to be millionaire ?';
    const subtitle = "It's today or never.";
    const desc =
        'I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely';
    return (
        <AppLayout title="CTA free Tailwind components" desc="CTA, Banners and more components for tailwind css">
            <SectionHeader title="Buttons" />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Light"
                element={<SimpleTextCta title={title} subtitle={subtitle} />}
                component={SimpleTextCta}
            />

            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="with 2 actions"
                element={<SimpleTextCta twoButton={true} title={title} subtitle={subtitle} />}
                component={SimpleTextCta}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Vertical"
                element={<SimpleTextCta isVertical={true} title={title} subtitle={subtitle} />}
                component={SimpleTextCta}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With description"
                element={<SimpleTextCta description={desc} isVertical={true} title={title} subtitle={subtitle} />}
                component={SimpleTextCta}
            />
            <ComponentLayout
                showSwitchMode={true}
                vertical={true}
                title="On left"
                element={<SimpleTextCta isLeft={true} isVertical={true} title={title} subtitle={subtitle} />}
                component={SimpleTextCta}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="With image"
                element={
                    <SimpleTextCta
                        isLeft={true}
                        image="/images/car/1.jpg"
                        isVertical={true}
                        title={title}
                        subtitle={subtitle}
                    />
                }
                component={SimpleTextCta}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="with image and desc"
                element={
                    <SimpleTextCta
                        isLeft={true}
                        description={desc}
                        image="/images/object/1.png"
                        isVertical={true}
                        title={title}
                        subtitle={subtitle}
                    />
                }
                component={SimpleTextCta}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="with sub and image"
                element={<SubscribeCta />}
                component={SubscribeCta}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Notify cta"
                element={<NotifyMeCta />}
                component={NotifyMeCta}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Multiple images cta"
                element={
                    <MultipleImagesCta
                        title="Mother hearth host your travel"
                        description="The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient & awe inspiring."
                    />
                }
                component={MultipleImagesCta}
            />
            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Watch cta"
                element={<WatchCta />}
                component={MultipleImagesCta}
            />
            <ComponentLayout vertical={true} title="Next Cta" element={<NextJSCta />} component={NextJSCta} />
            <ComponentLayout
                showSwitchMode={true}
                vertical={true}
                title="Timer event"
                element={<TimerEvent />}
                component={TimerEvent}
            />
            <ComponentLayout
                vertical={true}
                title="Bandeau number"
                element={<BandeauNumber />}
                component={BandeauNumber}
            />
            <ComponentLayout
                vertical={true}
                title="Bandeau Info"
                showSwitchMode={true}
                element={<BandeauInfo />}
                component={BandeauInfo}
            />
        </AppLayout>
    );
};

export default ComponentsPage;
