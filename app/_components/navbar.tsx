import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  MagnifyingGlassIcon,
  PersonIcon,
  GlobeIcon,
  CaretDownIcon,
} from "@radix-ui/react-icons";
import NavbarButton from "@/components/navbar/navbar-button";

export const Navbar = () => {
  return (
    <nav className="bg-daraz-orange flex flex-col justify-center items-center w-full h-[90px] shadow-sm fixed top-0 z-50 gap-2s">
      <div className="flex justify-between text-white text-xs w-[1188px] min-w-[1188px]">
        <div className="flex gap-5 pt-2">
          <Link href="" className="">
            Become a Seller
          </Link>
          <Link href="" className="">
            Payments & Recharge
          </Link>
          <Link href="" className="">
            Help & Support
          </Link>
          <Link href="" className="">
            Darax Logistics Partner
          </Link>
        </div>
        <div className="flex gap-2 items-center bg-black/30 p-1 rounded-b-md">
          <Image src="/daraz.png" width={20} height={20} alt="daraz-icon" />
          <p>Save more on App</p>
        </div>
      </div>
      <div className="flex items-center gap-3 pb-4">
        <Image src="/daraz-icon.png" alt="daraz-icon" height={48} width={120} />
        <div className="flex relative w-[746px]">
          <Input
            type="text"
            placeholder="Search in Daraz"
            className="bg-white border rounded-xl"
          />
          <Button className="absolute top-1 right-3 rounded-md bg-[#FFE1D2] hover:bg-[#FFE1D2] h-7 w-12">
            <MagnifyingGlassIcon className=" text-daraz-orange" />
          </Button>
        </div>

        <NavbarButton icon={PersonIcon} label={"LogIn"} />
        <span className="text-xs text-white font-semibold">|</span>
        <NavbarButton label={"Sign Up"} />
        <NavbarButton icon={GlobeIcon} label={"EN"} />
        <NavbarButton label={"Cart"} />
      </div>
    </nav>
  );
};
