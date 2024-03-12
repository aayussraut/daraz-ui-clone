import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  PiDressThin,
  PiShirtFoldedThin,
  PiWatchThin,
  PiDevicesThin,
  PiTelevisionThin,
  PiHeadphonesLight,
  PiBasketLight,
  PiHandSoapThin,
  PiCarProfileThin,
  PiVolleyballThin,
  PiPersonSimpleBikeThin,
} from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import CategoryButton from "@/components/category/category-button";

const CategoryCard = () => {
  return (
    <Card className="w-60 min-h-fit px-1 py-1 shadow-md">
      <CardContent className="p-0">
        <CategoryButton icon={PiDressThin} label="Women's Fashion" />
        <CategoryButton icon={PiHandSoapThin} label="Health & Beauty" />
        <CategoryButton icon={PiShirtFoldedThin} label="Men's Fashion" />
        <CategoryButton icon={PiWatchThin} label="Watches & Accessories" />
        <CategoryButton icon={PiDevicesThin} label="Electronic Devices" />
        <CategoryButton icon={PiTelevisionThin} label="TV & Home Applicanes" />
        <CategoryButton
          icon={PiHeadphonesLight}
          label="Electronic Accessories"
        />
        <CategoryButton icon={PiBasketLight} label="Groceries & Pets" />
        <CategoryButton icon={LiaBedSolid} label="Home & Lifestyle" />
        <CategoryButton icon={PiCarProfileThin} label="Babies & Toys" />
        <CategoryButton icon={PiVolleyballThin} label="Sport & Outdoor" />
        <CategoryButton
          icon={PiPersonSimpleBikeThin}
          label="Motors, Tools & DIY"
        />
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
