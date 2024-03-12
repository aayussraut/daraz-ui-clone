import CategoryCard from "@/components/category/category-card";
import Image from "next/image";
import { CarouselWidget } from "./_components/carousel-widget";

export default function Home() {
  return (
    <main className="flex">
      <div className="flex gap-5">
        <CategoryCard />
        <CarouselWidget />
      </div>
    </main>
  );
}
