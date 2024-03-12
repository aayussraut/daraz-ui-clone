import { Button } from "../ui/button";

import { IoIosArrowForward } from "react-icons/io";
import { IconType } from "react-icons";

interface CategoryButtonProps {
  icon?: IconType;
  label?: string;
}

const CategoryButton = ({ icon: Icon, label }: CategoryButtonProps) => {
  return (
    <Button
      variant="ghost"
      className="flex justify-between items-center h-fit p-1 w-full text-gray-600 group hover:text-daraz-orange"
    >
      <div className="flex justify-center items-center gap-2">
        {Icon && <Icon size={16} />}
        <span className="text-[13px] font-normal">{label}</span>
      </div>
      <IoIosArrowForward size={18} className="hidden group-hover:block" />
    </Button>
  );
};

export default CategoryButton;
