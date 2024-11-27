"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Catalogues from "./catalogues/page";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="flex flex-col  mt-20">
      <main className="flex flex-col justify-center items-center">
        <Carousel
          className="w-full px-1"
          plugins={[
            Autoplay({
              delay: 2100,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="p-1 w-100">
                <Image
                  src="/carousel_demo_2.jpg"
                  alt="Alashkon Icon"
                  height={5000}
                  width={5000}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1 w-100">
                <Image
                  src="/carousel_demo_3.jpeg"
                  alt="Alashkon Icon"
                  height={5000}
                  width={5000}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1 w-100">
                <Image
                  src="/carousel_demo_1.jpg"
                  alt="Alashkon Icon"
                  height={5000}
                  width={5000}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* CATEGORIES */}
        <Catalogues />
      </main>
    </div>
  );
};
export default Home;
