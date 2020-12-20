import React from "react";
import Avatar from "../../elements/avatars/Avatar";

const DoubleTeam = () => {
  return (
    <div className="md:flex gap-8">
      <div className="md:w-1/2 text-center mb-8 md:mb-0">
        <img
          className="w-48 h-48 rounded-full mx-auto -mb-24"
          src="/images/person/6.jpg"
          alt="Avatar de Jaime Morales"
        />
        <div className="bg-gray-900 px-8 pt-32 pb-10 text-green-500">
          <h3 className="font-title text-white text-xl mb-3">Jacky Pout</h3>
          <p className="font-body">FullStack Engineer</p>
          <p className="font-body text-sm mb-4">
            He love caramel and he hate PHP and salad
          </p>
          <a className="font-body text-blue-500 hover:text-white" href="#">
            Jacky@poute.com
          </a>
        </div>
      </div>

      <div className="md:w-1/2 text-center">
        <img
          className="w-48 h-48 rounded-full mx-auto -mb-24"
          src="/images/person/10.jpg"
          alt="Avatar de Dino el Westie"
        />
        <div className="bg-gray-900 px-8 pt-32 pb-10 text-green-500">
          <h3 className="font-title text-white text-xl mb-3">Damien Marley</h3>
          <p className="font-body">CEO</p>
          <p className="font-body text-sm mb-4">
            He's fun and listen everyday Bob Marley
          </p>
          <a
            className="font-body text-blue-500 hover:text-white"
            href="mailto:dino@siete.pm"
          >
            Damien@marley.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default DoubleTeam;
