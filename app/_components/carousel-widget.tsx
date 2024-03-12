"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const images = [
  { url: "/daraz-free-delivery.jpg" },
  { url: "/daraz-flash-sale.jpg" },
  { url: "/daraz-free-delivery.jpg" },
  { url: "/daraz-new-arrival.jpg" },
];

export const CarouselWidget = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image.url}
              width={938}
              height={344}
              alt="test"
              className="rounded-xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
