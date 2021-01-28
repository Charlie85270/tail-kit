import React from 'react';
import SimpleProfile from '../profile/SimpleProfil';

interface Props {
    size?: 'small' | 'normal' | 'big' | 'monster';
    name: string;
    img: string;
    job: string;
    desc: string;
}

const AllTeam = () => {
    return (
        <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
            <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">The big team</p>
            <p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-300">
                Meat the best team in wolrd
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <SimpleProfile
                    size="big"
                    name="Hean Hiut"
                    img="/images/person/4.jpg"
                    job="Designer"
                    noBackground={true}
                />
                <SimpleProfile
                    size="big"
                    name="Igor Novak"
                    img="/images/person/5.jpg"
                    job="Designer"
                    noBackground={true}
                />
                <SimpleProfile
                    size="big"
                    name="Jig sa Hiut"
                    img="/images/person/6.jpg"
                    job="Boucher"
                    noBackground={true}
                />
                <SimpleProfile
                    size="big"
                    name="Norman Tuck"
                    img="/images/person/7.jpg"
                    job="Architect"
                    noBackground={true}
                />
                <SimpleProfile size="big" name="Masrt kik" img="/images/person/8.jpg" job="Chef" noBackground={true} />
                <SimpleProfile size="big" name="Louis Bol" img="/images/person/9.jpg" job="Sdf" noBackground={true} />
                <SimpleProfile
                    size="big"
                    name="Izno god"
                    img="/images/person/10.jpg"
                    job="American"
                    noBackground={true}
                />
                <SimpleProfile
                    size="big"
                    name="Serena Quille"
                    img="/images/person/1.jpg"
                    job="Designer"
                    noBackground={true}
                />
                <SimpleProfile
                    size="big"
                    name="Edouard Sert"
                    img="/images/person/6.jpg"
                    job="Developer"
                    noBackground={true}
                />
                <SimpleProfile
                    size="big"
                    name="Parki Son"
                    img="/images/person/8.jpg"
                    job="Designer"
                    noBackground={true}
                />
                <SimpleProfile size="big" name="Marine Lo" img="/images/person/9.jpg" job="SEO" noBackground={true} />
                <SimpleProfile
                    size="big"
                    name="Mickal Poul"
                    img="/images/person/4.jpg"
                    job="Freelance"
                    noBackground={true}
                />
                <SimpleProfile
                    size="big"
                    name="Isac Tou"
                    img="/images/person/5.jpg"
                    job="Freelance"
                    noBackground={true}
                />
                <SimpleProfile
                    size="big"
                    name="Jean Eu"
                    img="/images/person/6.jpg"
                    job="Designer"
                    noBackground={true}
                />
                <SimpleProfile size="big" name="Yves P" img="/images/person/9.jpg" job="Humor" noBackground={true} />
                <SimpleProfile
                    size="big"
                    name="Marco Tol"
                    img="/images/person/1.jpg"
                    job="Designer"
                    noBackground={true}
                />
                <SimpleProfile size="big" name="Huge Ar" img="/images/person/6.jpg" job="CEA" noBackground={true} />
                <SimpleProfile size="big" name="Big Bro" img="/images/person/8.jpg" job="CTO" noBackground={true} />
            </div>
        </div>
    );
};
export default AllTeam;
