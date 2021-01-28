import React from 'react';
import Avatar from '../../elements/avatars/Avatar';

const DoubleTeam = () => {
    return (
        <div className="md:flex gap-8">
            <div className="md:w-1/2 text-center mb-8 md:mb-0">
                <img className="w-48 h-48 rounded-full mx-auto -mb-24" src="/images/person/6.jpg" alt="Avatar Jacky" />
                <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
                    <h3 className="font-title text-gray-800 text-xl mb-3">Jacky Pout</h3>
                    <p className="font-body">FullStack Engineer</p>
                    <p className="font-body text-sm mb-4">He love caramel and he hate PHP </p>
                    <a className="font-body text-blue-500 hover:text-gray-800" href="#">
                        Jacky@poute.com
                    </a>
                </div>
            </div>

            <div className="md:w-1/2 text-center">
                <img
                    className="w-48 h-48 rounded-full mx-auto -mb-24"
                    src="/images/person/10.jpg"
                    alt="Avatar Damien Marley"
                />
                <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
                    <h3 className="font-title text-gray-800 text-xl mb-3">Damien Marley</h3>
                    <p className="font-body">CEO</p>
                    <p className="font-body text-sm mb-4">He's fun and listen everyday Bob Marley</p>
                    <a className="font-body text-blue-500 hover:text-gray-800" href="mailto:dino@siete.pm">
                        Damien@marley.com
                    </a>
                </div>
            </div>
        </div>
    );
};
export default DoubleTeam;
