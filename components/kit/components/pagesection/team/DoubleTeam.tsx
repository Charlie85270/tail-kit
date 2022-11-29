import React from 'react';
import Avatar from '../../elements/avatars/Avatar';

const DoubleTeam = () => {
    return (
        <div className="gap-8 md:flex">
            <div className="mb-8 text-center md:w-1/2 md:mb-0">
                <img className="w-48 h-48 mx-auto -mb-24 rounded-full" src="/images/person/6.jpg" alt="Avatar Jacky" />
                <div className="px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
                    <h3 className="mb-3 text-xl text-gray-800 font-title">Jacky Pout</h3>
                    <p className="font-body">FullStack Engineer</p>
                    <p className="mb-4 text-sm font-body">He love caramel and he hate PHP </p>
                    <a className="text-blue-500 font-body hover:text-gray-800" href="#">
                        Jacky@poute.com
                    </a>
                </div>
            </div>

            <div className="text-center md:w-1/2">
                <img
                    className="w-48 h-48 mx-auto -mb-24 rounded-full"
                    src="/images/person/10.jpg"
                    alt="Avatar Damien Marley"
                />
                <div className="px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
                    <h3 className="mb-3 text-xl text-gray-800 font-title">Damien Marley</h3>
                    <p className="font-body">CEO</p>
                    <p className="mb-4 text-sm font-body">He's fun and listen everyday Bob Marley</p>
                    <a className="text-blue-500 font-body hover:text-gray-800" href="mailto:dino@siete.pm">
                        Damien@marley.com
                    </a>
                </div>
            </div>
        </div>
    );
};
export default DoubleTeam;
