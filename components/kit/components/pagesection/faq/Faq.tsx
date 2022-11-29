import React from 'react';

interface Props {
    questions?: Question[];
}

interface Question {
    question: string;
    response: string;
}

const Faq = (props: Props) => {
    return (
        <div className="max-w-screen-xl p-8 mx-auto">
            <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">FAQs</h2>

            <ul className="flex flex-wrap items-start gap-8">
                {props.questions.map((quest) => {
                    return (
                        <li className="w-2/5" key={quest.question}>
                            <p className="text-lg font-medium leading-6 text-gray-900">{quest.question}</p>
                            <p className="mt-2">
                                <p className="text-base leading-6 text-gray-500">{quest.response}</p>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Faq;
