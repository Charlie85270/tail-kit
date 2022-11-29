import React from 'react';
import SimpleTeam from './SimpleTeam';

const SimpleTeams = () => {
    return (
        <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
            <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">Professional team</p>
            <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-200">
                Meat the best team in wolrd
            </p>
            <div className="flex flex-col items-center md:flex-row justify evenly">
                <SimpleTeam
                    img="/images/person/1.jpg"
                    name="Patrick Sebastien"
                    job="Developpeur"
                    desc="Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator."
                    size="monster"
                />
                <SimpleTeam
                    img="/images/person/4.jpg"
                    name="Jean Castux"
                    job="Founder"
                    desc="Jean Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy."
                    size="monster"
                />
                <SimpleTeam
                    img="/images/person/3.jpg"
                    name="Thierry Halliday"
                    job="CTO"
                    desc="Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist."
                    size="monster"
                />
            </div>
        </div>
    );
};
export default SimpleTeams;
