import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import Faq from '../../../components/kit/components/pagesection/faq/Faq';
import FaqHori from '../../../components/kit/components/pagesection/faq/FaqHori';

const FaqPage = () => {
    const questions = [
        {
            question: 'What is a home energy rating?',
            response:
                'A home energy rating is an estimated calculation into a homes potential energy usage, which will determine the amount of heating and cooling required to make  its occupants comfortable. It produces a star rating dependant on the amount of heating and cooling loads which will be required, from 0 to 10 stars.',
        },
        {
            question: 'Why do I need a 6 Star energy rating?',
            response:
                'In most Australian states the government requires that all new homes and apartments (along with certain types of building extensions) built since 2010 be energy rated and achieve a minimum of 6 Stars.',
        },
        {
            question: 'What is the general cost of an energy rating?',
            response:
                'Simple energy rating prices vary greatly on the size and type of building, generally an energy rating will cost somewhere between $130 to $700+.',
        },
        {
            question: 'What information do I need to supply for an energy rating to be completed??',
            response:
                'The information required to complete a full and comprehensive energy report are the following final working drawings: Site Plan, Floor Plan, Elevations, Sections, Lighting layout and window schedule (including sizes of the existing windows).',
        },
        {
            question: 'Does building an extension need an energy rating?',
            response:
                "Depended on the size of the extension you are building there is a chance that it too will need to be energy rated. It's always best to check first before going ahead with construction.",
        },
        {
            question: 'What is the general cost of an energy rating?',
            response:
                "Depended on the size of the extension you are building there is a chance that it too will need to be energy rated. It's always best to check first before going ahead with construction.",
        },
    ];

    return (
        <AppLayout title="FAQ free Tailwind components" desc="FAQ, layouts and more components for tailwind css">
            <SectionHeader title="FAQ" />
            <ComponentLayout
                vertical={false}
                title="Simple FAQ"
                element={<Faq questions={questions} />}
                component={Faq}
            />
            <ComponentLayout vertical={false} title="Horizontal FAQ" element={<FaqHori />} component={FaqHori} />
        </AppLayout>
    );
};

export default FaqPage;
