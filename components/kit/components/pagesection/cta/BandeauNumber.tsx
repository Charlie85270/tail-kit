import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';
const BandeauNumber: FC = () => {
    return (
        <section className="bg-indigo-800">
            <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
                <div>
                    <h5 className="text-5xl font-bold text-white">
                        <span className="inline text-white">2179</span>
                        <span className="text-indigo-200">+</span>
                    </h5>
                    <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Cups of coffee</p>
                </div>
                <div>
                    <h5 className="text-5xl font-bold text-white">
                        <span className="inline text-white">13</span>
                        <span className="text-indigo-200">+</span>
                    </h5>
                    <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Ongoing contracts</p>
                </div>
                <div>
                    <h5 className="text-5xl font-bold text-white">
                        <span className="inline text-white">31</span>
                        <span className="text-indigo-200">+</span>
                    </h5>
                    <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Finished projects</p>
                </div>
                <div>
                    <h5 className="text-5xl font-bold text-white">
                        <span className="inline text-white">3</span>
                        <span className="text-indigo-200">+</span>
                    </h5>
                    <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Years in business</p>
                </div>
            </div>
            <div className="flex p-4 mx-auto mt-4 w-52">
                <Button color="white" label="Join" />
            </div>
        </section>
    );
};
export default BandeauNumber;
