import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SimpleTeam from '../../../components/kit/components/pagesection/team/SimpleTeam';
import SimpleTeams from '../../../components/kit/components/pagesection/team/SimpleTeams';
import ShadowTeam from '../../../components/kit/components/pagesection/team/ShadowTeam';
import ShadowTeams from '../../../components/kit/components/pagesection/team/ShadowTeams';
import AllTeam from '../../../components/kit/components/pagesection/team/AllTeam';
import DoubleTeam from '../../../components/kit/components/pagesection/team/DoubleTeam';

const TeamPage: FC = () => {
    return (
        <AppLayout title="Teams section free Tailwind components" desc="Teams and more components for tailwind css">
            <SectionHeader title="Team" />
            <ComponentLayout
                title="Simple"
                element={
                    <SimpleTeam
                        img="/images/person/1.jpg"
                        name="Patrick Sebastien"
                        job="Developpeur"
                        desc="Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator, humorist, actor, director, singer, songwriter, poet, writer"
                        size="monster"
                    />
                }
                component={SimpleTeam}
            />
            <ComponentLayout
                title="Composition"
                showSwitchMode={true}
                element={<SimpleTeams />}
                component={SimpleTeams}
            />
            <ComponentLayout
                title="With background"
                showSwitchMode={true}
                element={
                    <ShadowTeam
                        img="/images/person/2.jpeg"
                        name="Charlie"
                        job="Lead dev"
                        desc="Charlie, born December 18, 1993 in Challans, is an imitator."
                        size="monster"
                    />
                }
                component={ShadowTeam}
            />
            <ComponentLayout showSwitchMode={true} title="Multiple" element={<ShadowTeams />} component={ShadowTeams} />
            <ComponentLayout showSwitchMode={true} title="Big team" element={<AllTeam />} component={AllTeam} />
            <ComponentLayout title="Double team" element={<DoubleTeam />} component={DoubleTeam} />
        </AppLayout>
    );
};

export default TeamPage;
