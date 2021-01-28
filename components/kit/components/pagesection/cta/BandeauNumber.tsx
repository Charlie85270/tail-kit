import React, { FC } from 'react';
import Button from '../../elements/buttons/Button';
const BandeauNumber: FC = () => {
    return (
        <section className="bg-indigo-800">
            <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
                <div>
                    <h5 className="text-5xl font-bold text-white">
                        <span className="inline text-white">2179</span>
                        <span className="text-indigo-200">+</span>
                    </h5>
                    <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Cups of coffee</p>
                </div>
                <div>
                    <h5 className="text-5xl font-bold text-white">
                        <span className="inline text-white">13</span>
                        <span className="text-indigo-200">+</span>
                    </h5>
                    <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Ongoing contracts</p>
                </div>
                <div>
                    <h5 className="text-5xl font-bold text-white">
                        <span className="inline text-white">31</span>
                        <span className="text-indigo-200">+</span>
                    </h5>
                    <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Finished projects</p>
                </div>
                <div>
                    <h5 className="text-5xl font-bold text-white">
                        <span className="inline text-white">3</span>
                        <span className="text-indigo-200">+</span>
                    </h5>
                    <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Years in business</p>
                </div>
            </div>
            <div className="w-52 mx-auto mt-4 p-4 flex">
                <Button color="white" label="Join" />
            </div>
        </section>
    );
};
export default BandeauNumber;
