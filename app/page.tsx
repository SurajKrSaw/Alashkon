"use client";
import Image from "next/image";
import Link from "next/link";
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
    <div className="flex flex-col h-screen mt-20">
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

      <footer className="bg-green-300 row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Alashkon
        </a>
      </footer>
    </div>
  );
};
export default Home;
