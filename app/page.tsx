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
    <div className="flex flex-col">
      <main className="flex flex-col justify-center items-center">
        <Carousel
          className="w-full px-4 pt-2 relative rounded-lg overflow-hidden"
          plugins={[
            Autoplay({
              delay: 2500, // Adjusted autoplay delay for better pacing
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full h-96 md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/carousel_demo_2.jpg"
                  alt="Alashkon Icon"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex justify-center items-center">
                  <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-bold text-center px-4">
                    Premium Bathroom Fixtures
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full h-96 md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/carousel_demo_3.jpeg"
                  alt="Alashkon Icon"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex justify-center items-center">
                  <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-bold text-center px-4">
                    Sleek, Modern Designs
                  </h2>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-full h-96 md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/carousel_demo_1.jpg"
                  alt="Alashkon Icon"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg flex justify-center items-center">
                  <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-bold text-center px-4">
                    Elegant Sanitary Solutions
                  </h2>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700" />
        </Carousel>

        {/* CATEGORIES */}
        <Catalogues />
      </main>
    </div>
  );
};
export default Home;
