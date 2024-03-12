import { IconProps } from "@radix-ui/react-icons/dist/types";
import { CaretDownIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";

interface NavbarButtonProps {
  icon?: React.ElementType<IconProps>;
  label?: string;
}

const NavbarButton = ({ icon: Icon, label }: NavbarButtonProps) => {
  return (
    <Button
      variant="ghost"
      className={`flex ${
        label == "EN" ? "gap-1 text-sm" : "gap-2 text-xs"
      } text-white hover:bg-black/15 hover:text-white  font-semibold p-2 justify-center items-center`}
    >
      {Icon && <Icon className="font-semibold" />}
      <p className="">{label}</p>
      {label === "EN" && <CaretDownIcon />}
    </Button>
  );
};

export default NavbarButton;
