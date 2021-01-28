import React from 'react';
import ShadowTeam from './ShadowTeam';

const ShadowTeams = () => {
    return (
        <div className="p-4">
            <p className="text-center text-3xl font-bold text-gray-800">Professional team</p>
            <p className="text-center mb-32 text-xl font-normal text-gray-500">Meat the best team in wolrd</p>
            <div className="flex items-center flex-col md:flex-row justify evenly">
                <ShadowTeam
                    img="/images/person/1.jpg"
                    name="Patrick Sebastien"
                    job="Developpeur"
                    desc="Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator."
                    size="monster"
                />
                <ShadowTeam
                    img="/images/person/2.jpeg"
                    name="Charlie"
                    job="Lead dev"
                    desc="Charlie, born December 18, 1993 in Challans, is an imitator and pintor."
                    size="monster"
                />
                <ShadowTeam
                    img="/images/person/4.jpg"
                    name="Thierry Halliday"
                    job="CTO"
                    desc="Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist."
                    size="monster"
                />
            </div>
        </div>
    );
};
export default ShadowTeams;
