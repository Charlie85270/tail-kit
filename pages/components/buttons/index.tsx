import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import Button from '../../../components/kit/components/elements/buttons/Button';
import ButtonWithIndications from '../../../components/kit/components/elements/buttons/ButtonWithIndications';
import MultipleButton from '../../../components/kit/components/elements/buttons/MultipleButton';
import PagerButton from '../../../components/kit/components/elements/buttons/PagerButton';
import RoundedButton from '../../../components/kit/components/elements/buttons/RoundedButton';
import StoreButton from '../../../components/kit/components/elements/buttons/StoreButton';
import SquareButton from '../../../components/kit/components/elements/buttons/SquareButton';

const ComponentsPage: FC = () => {
    return (
        <AppLayout
            title="Buttons free Tailwind components"
            desc="Buttons, Social buttons and more components for tailwind css"
        >
            <SectionHeader title="Buttons" />
            <ComponentLayout title="Button" element={<Button label="Valider" color="indigo" />} component={Button} />
            <ComponentLayout
                title="Button with icon"
                element={
                    <Button
                        label="Upload"
                        icon={
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="mr-2"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z" />
                            </svg>
                        }
                        color="red"
                    />
                }
                component={Button}
            />
            <ComponentLayout
                title="Icon button"
                element={
                    <Button
                        icon={
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z" />
                            </svg>
                        }
                        color="blue"
                    />
                }
                component={Button}
            />
            <ComponentLayout
                title="Animated button"
                element={
                    <Button
                        icon={
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="mr-2 animate-spin"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z" />
                            </svg>
                        }
                        color="blue"
                        label="loading"
                    />
                }
                component={Button}
            />
            <ComponentLayout
                title="Disabled button"
                element={<Button disabled label="Upload" color="red" />}
                component={Button}
            />
            <ComponentLayout
                title="Rounded Button"
                element={<Button rounded={true} label="Follow" color="pink" />}
                component={Button}
            />
            <ComponentLayout
                title="Rounded Button and icon"
                element={
                    <Button
                        rounded={true}
                        icon={
                            <svg
                                width="20"
                                height="20"
                                className="mr-2"
                                fill="currentColor"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z" />
                            </svg>
                        }
                        label="Follow"
                        color="green"
                    />
                }
                component={Button}
            />
            <ComponentLayout
                title="Rounded fat Button"
                element={<Button isFat={true} rounded={true} label="Follow me" color="blue" />}
                component={Button}
            />
            <ComponentLayout
                title="Button with information"
                element={<ButtonWithIndications label="Star" indication="654" />}
                component={ButtonWithIndications}
            />
            <ComponentLayout title="Multiple buttons" element={<MultipleButton />} component={MultipleButton} />
            <ComponentLayout title="Pager button" element={<PagerButton />} component={PagerButton} />
            <ComponentLayout
                title="Facebook button"
                element={
                    <Button
                        label="Sign in with Facebook"
                        icon={
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="mr-2"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
                            </svg>
                        }
                        color="blue"
                    />
                }
                component={Button}
            />
            <ComponentLayout
                title="Google button"
                element={
                    <Button
                        label="Sign in with Google"
                        icon={
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="mr-2"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z" />
                            </svg>
                        }
                        color="red"
                    />
                }
                component={Button}
            />
            <ComponentLayout
                title="GitHub button"
                element={
                    <Button
                        label="Sign in with GitHub"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="mr-2"
                                viewBox="0 0 1792 1792"
                            >
                                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
                            </svg>
                        }
                        color="gray"
                    />
                }
                component={Button}
            />
            <ComponentLayout title="Store button" element={<StoreButton />} component={StoreButton} />

            <ComponentLayout
                title="Rounded button with effect"
                element={<RoundedButton label="Play" />}
                component={RoundedButton}
            />
            <ComponentLayout
                title="Rounded button with icon"
                element={<RoundedButton label="Play" icon={true} />}
                component={RoundedButton}
            />
            <ComponentLayout title="Rounded icon" element={<RoundedButton icon={true} />} component={RoundedButton} />
            <ComponentLayout
                title="Square button"
                element={<SquareButton color="green" label="Square is me" />}
                component={SquareButton}
            />
            <ComponentLayout
                title="Square fat button"
                element={<SquareButton color="pink" isFat={true} label="Fat is me" />}
                component={SquareButton}
            />
            <ComponentLayout
                title="Square with icon"
                element={
                    <SquareButton
                        color="red"
                        icon={
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 2304 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z" />
                            </svg>
                        }
                        label="Justice"
                    />
                }
                component={SquareButton}
            />
            <ComponentLayout
                title="With variant background"
                element={<SquareButton color="variant" label="Free space" />}
                component={SquareButton}
            />
        </AppLayout>
    );
};

export default ComponentsPage;
