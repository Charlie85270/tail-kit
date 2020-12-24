import { FC } from "react";
import Button from "../../kit/components/elements/buttons/Button";
import TagsCard from "../../kit/components/elements/data/TagsCard";
import SimplePhotoDescCard from "../../kit/components/elements/data/SimplePhotoDescCard";
import MultipleShoppingCard from "../../kit/components/commerce/shopping/MultipleShoppingCard";
import PricingCard3 from "../../kit/components/commerce/pricing/PricingCard3";
import CoverAndButtonsProfilCard from "../../kit/components/pagesection/profile/CoverAndButtonsProfilCard";
import SimpleNotificationCard from "../../kit/components/elements/data/SimpleNotificationCard";
import SimpleIconDescCard from "../../kit/components/elements/data/SimpleIconDescCard";
import CustomSelect from "../../kit/components/form/select/CustomSelect";
import PricingCard from "../../kit/components/commerce/pricing/PricingCard";
import InfoNumberCard from "../../kit/components/elements/data/InfoNumberCard";
import CookieAlert2 from "../../kit/components/elements/alert/CookieAlert2";
import PricingCard2 from "../../kit/components/commerce/pricing/PricingCard2";
import ConfirmationCard from "../../kit/components/elements/alert/ConfirmationCard";
import PricingCard8 from "../../kit/components/commerce/pricing/PricingCard8";
import ShoppingColorChoice from "../../kit/components/commerce/shopping/ShoppingColorChoice";
import HeadProfil from "../../kit/components/pagesection/profile/HeadProfil";

const HomeComps: FC = () => {
  return (
    <div className="opacity-10 z-10 md:z-50 md:opacity-70 sm:text-center  absolute perspective lg:text-left transform  w-full right-0  md:right-20 -top-72  md:w-1/2">
      <div className="flex gap-4 gap-y-1">
        <div className="col-1">
          <div className="mb-4">
            <TagsCard />
          </div>
          <div className="mb-4">
            <SimplePhotoDescCard />
          </div>

          <div className="mb-4">
            <ConfirmationCard />
          </div>
          <div className="mb-4">
            <MultipleShoppingCard showOne={true} />
          </div>
          <div className="mb-4">
            <PricingCard3 />
          </div>
        </div>
        <div className="col-1">
          <div className="mb-4 flex gap-4">
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
            <SimpleIconDescCard />
          </div>
          <div className="mb-4">
            <CustomSelect />
          </div>

          <div className="mb-4">
            <PricingCard />
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
  );
};

export default HomeComps;
