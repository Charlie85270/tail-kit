import React from 'react';
import SimpleTestimonial from './SimpleTestimonial';

const MultipleTestimonial = () => {
    return (
        <div className="flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
            <SimpleTestimonial withShadow={true} />

            <SimpleTestimonial withShadow={true} />

            <SimpleTestimonial withShadow={true} />
        </div>
    );
};

export default MultipleTestimonial;
