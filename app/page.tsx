"use client";
import Image from "next/image";
import Link from "next/link";
import { FiAlignLeft } from "react-icons/fi";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex bg-green-200 h-20 w-full shrink-0 items-center px-4 md:px-6">
        <div className="/*SIDEBAR & LOGO*/ flex items-center justify-between w-full md:w-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="/*md:hidden*/">
                <div className=" text-3xl">
                  <FiAlignLeft />
                </div>
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="#" className="mr-6 hidden lg:flex">
                <div className="">
                  <Image
                    src="/alashkonLogo.png"
                    alt="Alashkon Icon"
                    height={80}
                    width={80}
                    className="object-contain"
                  />
                </div>
                <span className="sr-only">Acme Inc</span>
              </Link>
              <div className="grid gap-2 py-6">
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Catalogues
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Say Hii!
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Locate Us
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Support
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex">
            <Image
              src="/alashkonLogo.png"
              alt="Alashkon Icon"
              height={80}
              width={80}
              className="object-contain"
            />
            <Image
              src="/alashkon_title.png"
              alt="Alashkon Title"
              height={70}
              width={200}
            />
          </div>
        </div>

        <nav className="flex justify-center items-center ml-auto ">
          <div className="/*NAVITEMS*/ md:flex hidden md:block gap-6">
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              About Us
            </Link>
            <div className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
              Catalogues
            </div>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Say Hii!
            </Link>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Locate Us
            </Link>

            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            >
              Support
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex flex-col justify-center items-center ">
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
        <section className="w-full text-gray-400 bg-gray-900 body-font">
          <h1 className="text-4xl font-bold text-center justify-center tracking-widest py-5 underline text-white">
            CATALOGUES
          </h1>
          <div className="container flex flex-wrap  px-5 py-8 mx-auto ">
            <div className="p-4 md:w-1/3 ">
              <Link href="./one piece" className=" bg-red-900">
                <div className=" hover:border-2 hover:border-gray-400 hover:tracking-widest /*border-2 border-gray-800*/ rounded-b-3xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font text-gray-600 mb-1">
                      CATEGORY
                    </h2>
                    <Image
                      className="w-50 h-70 rounded-md object-cover object-center"
                      src="https://senticabathware.com/includes/assets/images/collection/ONE%20PIECE/CODE-1111%20ULTRA.jpg"
                      width={1000}
                      height={1000}
                      alt="blog"
                    />
                    <h1 className="md:pt-2 title-font text-lg font-black text-white overline text-right">
                      ONE PIECE
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 ">
              <Link href="./half padestal basin" className="bg-red-900">
                <div className=" hover:border-2 hover:border-gray-400 hover:tracking-widest /*border-2 border-gray-800*/ rounded-b-3xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font text-gray-600 mb-1">
                      CATEGORY
                    </h2>
                    <Image
                      className="w-full rounded-md object-cover object-center"
                      src="https://senticabathware.com/includes/assets/images/collection/HALF%20PADESTAL%20BASIN/CODE-171%20SALVO.jpg"
                      width={1000}
                      height={1000}
                      alt="blog"
                    />
                    <h1 className="md:pt-2 title-font text-lg font-black text-white overline text-right">
                      HALF PADESTAL BASIN
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 ">
              <Link href="./wall hung" className="bg-red-900">
                <div className=" hover:border-2 hover:border-gray-400 hover:tracking-widest /*border-2 border-gray-800*/ rounded-b-3xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font text-gray-600 mb-1">
                      CATEGORY
                    </h2>
                    <Image
                      className="w-full rounded-md object-cover object-center"
                      src="https://senticabathware.com/includes/assets/images/collection/WALL%20HUNG/CODE-513%20ZORA.jpg"
                      width={1000}
                      height={1000}
                      alt="blog"
                    />
                    <h1 className="md:pt-2 title-font text-lg font-black text-white overline text-right">
                      WALL HUNG
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 ">
              <Link href="orissa pan & urinal" className="bg-red-900">
                <div className=" hover:border-2 hover:border-gray-400 hover:tracking-widest /*border-2 border-gray-800*/ rounded-b-3xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font text-gray-600 mb-1">
                      CATEGORY
                    </h2>
                    <Image
                      className="w-full rounded-md object-cover object-center"
                      src="https://senticabathware.com/includes/assets/images/collection/ORISSA%20PAN%20&%20URINAL/CODE-154.jpg"
                      width={1000}
                      height={1000}
                      alt="blog"
                    />
                    <h1 className="md:pt-2 title-font text-lg font-black text-white overline text-right">
                      ORISSA PAN & URINAL
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 ">
              <Link href="table top" className="bg-red-900">
                <div className=" hover:border-2 hover:border-gray-400 hover:tracking-widest /*border-2 border-gray-800*/ rounded-b-3xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font text-gray-600 mb-1">
                      CATEGORY
                    </h2>
                    <Image
                      className="w-full rounded-md object-cover object-center"
                      src="https://senticabathware.com/includes/assets/images/collection/TABLE%20TOP/CODE-102.jpg"
                      width={1000}
                      height={1000}
                      alt="blog"
                    />
                    <h1 className="md:pt-2 title-font text-lg font-black text-white overline text-right">
                      TABLE TOP
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 ">
              <Link href="wall hung basin" className="bg-red-900">
                <div className=" hover:border-2 hover:border-gray-400 hover:tracking-widest /*border-2 border-gray-800*/ rounded-b-3xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font text-gray-600 mb-1">
                      CATEGORY
                    </h2>
                    <Image
                      className="w-full rounded-md object-cover object-center"
                      src="https://senticabathware.com/includes/assets/images/collection/WALL%20HUNG%20BASIN/CODE-5005.jpg"
                      width={1000}
                      height={1000}
                      alt="blog"
                    />
                    <h1 className="md:pt-2 title-font text-lg font-black text-white overline text-right">
                      WALL HUNG BASIN
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 ">
              <Link href="water closet" className="bg-red-900">
                <div className=" hover:border-2 hover:border-gray-400 hover:tracking-widest /*border-2 border-gray-800*/ rounded-b-3xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font text-gray-600 mb-1">
                      CATEGORY
                    </h2>
                    <Image
                      className="w-full rounded-md object-cover object-center"
                      src="https://senticabathware.com/includes/assets/images/collection/WATER%20CLOSET/CODE-201.jpg"
                      width={1000}
                      height={1000}
                      alt="blog"
                    />
                    <h1 className="md:pt-2 title-font text-lg font-black text-white overline text-right">
                      WATER CLOSET
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 ">
              <Link href="one piece basin" className="bg-red-900">
                <div className="hover:border-2 hover:border-gray-400 hover:tracking-widest /*border-2 border-gray-800*/ rounded-b-3xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font text-gray-600 mb-1">
                      CATEGORY
                    </h2>
                    <Image
                      className="w-full rounded-md object-cover object-center"
                      src="https://senticabathware.com/includes/assets/images/collection/ONE%20PIECE%20BASIN/CODE-3001%20NESA.jpg"
                      width={1000}
                      height={1000}
                      alt="blog"
                    />
                    <h1 className="md:pt-2 title-font text-lg font-black text-white overline text-right">
                      ONE PIECE BASIN
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 ">
              <Link href="basin with padetal" className="bg-red-900">
                <div className=" hover:border-2 hover:border-gray-400 hover:tracking-widest /*border-2 border-gray-800*/ rounded-b-3xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font text-gray-600 mb-1">
                      CATEGORY
                    </h2>
                    <Image
                      className="w-full rounded-md object-cover object-center"
                      src="https://senticabathware.com/includes/assets/images/collection/BASIN%20WITH%20PADETAL/CODE-128%20LINIA.jpg"
                      width={1000}
                      height={1000}
                      alt="blog"
                    />
                    <h1 className="md:pt-2 title-font text-lg font-black text-white overline text-right">
                      BASIN WITH PADETAL
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
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
