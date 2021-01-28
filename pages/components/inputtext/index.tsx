import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import InputText from '../../../components/kit/components/form/inputtext/InputText';
import InputArea from '../../../components/kit/components/form/inputtext/InputArea';
import InputGroup from '../../../components/kit/components/form/inputtext/InputGroup';

const InputTextPage: FC = () => {
    return (
        <AppLayout title="Inputs text free Tailwind components" desc="Input and more components for tailwind css">
            <SectionHeader title="Input" />

            <ComponentLayout
                title="Simple"
                element={<InputText square={true} placeholder="Your email" id="simple-email" />}
                component={InputText}
            />
            <ComponentLayout
                title="Rounded"
                element={<InputText placeholder="Your email" id="rounded-email" />}
                component={InputText}
            />
            <ComponentLayout
                title="with label"
                element={<InputText label="Email" name="email" placeholder="Your name" id="name-with-label" />}
                component={InputText}
            />
            <ComponentLayout
                title="required"
                element={<InputText label="Email" required name="email" placeholder="Your email" id="required-email" />}
                component={InputText}
            />
            <ComponentLayout
                title="on error"
                element={
                    <InputText
                        label="Email"
                        error="Email is invalid"
                        required
                        name="email"
                        placeholder="Your email"
                        id="on-error-email"
                    />
                }
                component={InputText}
            />
            <ComponentLayout
                title="With indications"
                element={
                    <InputText
                        label="Password"
                        withForceIndications={true}
                        required
                        name="passwor"
                        placeholder="Password"
                        id="with-indications"
                    />
                }
                component={InputText}
            />
            <ComponentLayout
                title="Disabled"
                element={
                    <InputText
                        label="Email disabled"
                        disabled={true}
                        name="email"
                        placeholder="Your email"
                        id="disabled-email"
                    />
                }
                component={InputText}
            />
            <ComponentLayout
                title="with icon"
                element={
                    <InputText
                        icon={
                            <svg
                                width="15"
                                height="15"
                                fill="currentColor"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
                            </svg>
                        }
                        name="email"
                        placeholder="Your email"
                        id="email-with-icon"
                    />
                }
                component={InputText}
            />
            <ComponentLayout
                title="with helper"
                element={<InputText helper="http://" name="url" placeholder="www.google.com" id="with-email" />}
                component={InputText}
            />
            <ComponentLayout title="Group" element={<InputGroup />} component={InputText} />
            <ComponentLayout title="textarea" element={<InputArea />} component={InputArea} />
        </AppLayout>
    );
};

export default InputTextPage;
