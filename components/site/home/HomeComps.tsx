import { FC } from 'react';
import Button from '../../kit/components/elements/buttons/Button';
import TagsCard from '../../kit/components/elements/data/TagsCard';
import SimplePhotoDescCard from '../../kit/components/elements/data/SimplePhotoDescCard';
import MultipleShoppingCard from '../../kit/components/commerce/shopping/MultipleShoppingCard';
import PricingCard3 from '../../kit/components/commerce/pricing/PricingCard3';
import CoverAndButtonsProfilCard from '../../kit/components/pagesection/profile/CoverAndButtonsProfilCard';
import SimpleNotificationCard from '../../kit/components/elements/data/SimpleNotificationCard';
import CustomSelect from '../../kit/components/form/select/CustomSelect';
import PricingCard from '../../kit/components/commerce/pricing/PricingCard';
import InfoNumberCard from '../../kit/components/elements/data/InfoNumberCard';
import CookieAlert2 from '../../kit/components/elements/alert/CookieAlert2';
import PricingCard2 from '../../kit/components/commerce/pricing/PricingCard2';
import HeadProfil from '../../kit/components/pagesection/profile/HeadProfil';
import TaskCard from '../../kit/components/elements/data/TaskCard';
import PopularPerson from '../../kit/components/elements/data/PopularPerson';

const HomeComps: FC = () => {
    return (
        <div className="opacity-0 md:opacity-80 h-screen z-10 md:z-50">
            <div className="z-10 md:z-50 sm:text-center perspective fade-A absolute lg:text-left transform  w-full -right-10 -top-72  md:w-1/2">
                <div className="flex space-x-4 space-y-1">
                    <div className="col-1">
                        <div className="mb-4">
                            <TagsCard />
                        </div>
                        <div className="mb-4">
                            <SimplePhotoDescCard />
                        </div>

                        <div className="mb-4">
                            <PricingCard />
                        </div>
                        <div className="mb-4">
                            <MultipleShoppingCard showOne={true} />
                        </div>
                        <div className="mb-4">
                            <PricingCard3 />
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="mb-4 flex space-x-4">
                            <Button label="Annuler" color="red" />
                            <Button label="Confirmer" color="green" />
                        </div>
                        <div className="mb-4">
                            <CoverAndButtonsProfilCard />
                        </div>
                        <div className="mb-4">
                            <SimpleNotificationCard />
                        </div>

                        <div className="mb-4">
                            <CustomSelect />
                        </div>

                        <div className="mb-4">
                            <TaskCard />
                        </div>
                        <div className="mb-4">
                            <PopularPerson />
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="mb-4">
                            <PricingCard2 />
                        </div>

                        <div className="mb-4">
                            <InfoNumberCard />
                        </div>
                        <div className="mb-4">
                            <HeadProfil />
                        </div>

                        <div className="mb-4">
                            <CookieAlert2 />
                        </div>
                        <div className="mb-4">
                            <PricingCard2 />
                        </div>
                    </div>
                </div>
            </div>
            <div className="perspective absolute lg:text-left transform  top-1/2 -right-10 transform -translate-y-1/2 translate-x-1/4 md:w-2/3 fade-B">
                <div className="flex space-x-4 space-y-1">
                    <div className="col-1">
                        <div className="mb-4">
                            <picture>
                                <source srcSet="/images/sections/homePage.webp" type="image/webp" />
                                <source srcSet="/images/sections/homePage.png" />
                                <img
                                    className="sm:text-center rounded w-full shadow-xl"
                                    src="/images/sections/homePage.png"
                                    alt="home landing page"
                                />
                            </picture>
                        </div>
                        <div className="mb-4">
                            <picture>
                                <source srcSet="/images/sections/homePage4.webp" type="image/webp" />
                                <source srcSet="/images/sections/homePage4.png" />
                                <img
                                    className="sm:text-center rounded w-full shadow-xl"
                                    src="/images/sections/homePage4.png"
                                    alt="home landing page"
                                />
                            </picture>
                        </div>
                        <div className="mb-4">
                            <picture>
                                <source srcSet="/images/sections/homePage3.webp" type="image/webp" />
                                <source srcSet="/images/sections/homePage3.png" />
                                <img
                                    className="sm:text-center rounded w-full shadow-xl"
                                    src="/images/sections/homePage3.png"
                                    alt="home landing page"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="mb-4">
                            <picture>
                                <source srcSet="/images/sections/homePage.webp" type="image/webp" />
                                <source srcSet="/images/sections/homePage.png" />
                                <img
                                    className="sm:text-center rounded w-full shadow-xl"
                                    src="/images/sections/homePage.png"
                                    alt="home landing page"
                                />
                            </picture>
                        </div>
                        <div className="mb-4">
                            <picture>
                                <source srcSet="/images/sections/homePage2.webp" type="image/webp" />
                                <source srcSet="/images/sections/homePage2.png" />
                                <img
                                    className="sm:text-center rounded w-full shadow-xl"
                                    src="/images/sections/homePage2.png"
                                    alt="home landing page"
                                />
                            </picture>
                        </div>
                        <div className="mb-4">
                            <picture>
                                <source srcSet="/images/sections/homePage5.webp" type="image/webp" />
                                <source srcSet="/images/sections/homePage5.png" />
                                <img
                                    className="sm:text-center rounded w-full shadow-xl"
                                    src="/images/sections/homePage5.png"
                                    alt="home landing page"
                                />
                            </picture>
                        </div>
                        <div className="mb-4">
                            <picture>
                                <source srcSet="/images/sections/folio.webp" type="image/webp" />
                                <source srcSet="/images/sections/folio.png" />
                                <img
                                    className="sm:text-center rounded w-full shadow-xl"
                                    src="/images/sections/folio.png"
                                    alt="folio landing page"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComps;
