"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiAlignLeft } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="flex bg-teal-500 h-20 w-full fixed top-0 z-10 px-4 md:px-6 shadow-lg">
      {/* Sidebar & Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Sidebar for Mobile */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden bg-teal-500 hover:bg-teal-700 text-teal-900 hover:text-teal-500 p-2 rounded-md"
              onClick={() => setIsSheetOpen(true)}
            >
              <FiAlignLeft className="text-3xl " />
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="bg-teal-100 p-6">
            <div className="mb-6">
              <Link href="/" onClick={handleCloseSheet}>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/alashkonLogo.png"
                    alt="Alashkon Icon"
                    height={90}
                    width={90}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            <nav className="flex flex-col space-y-4">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Catalogues", link: "/catalogues" },
                { name: "Say Hii!", link: "/say-hi" },
                { name: "Contact Us", link: "/contact" },
                { name: "Locate Us", link: "/locate" },
                { name: "Support", link: "/support" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-lg font-medium text-gray-700 hover:text-teal-600 hover:underline hover:decoration-double transition"
                  onClick={handleCloseSheet}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/alashkonLogo.png"
              alt="Alashkon Icon"
              height={70}
              width={70}
              className="object-contain"
            />
            <Image
              src="/alashkon_title.png"
              alt="Alashkon Title"
              height={60}
              width={180}
              className="md:!h-[60px] md:!w-[180px] h-[50px] w-[160px]"
            />
          </Link>
        </div>
      </div>

      {/* Navbar for Desktop */}
      <nav className="hidden md:flex ml-auto items-center space-x-6">
        {[
          { name: "Home", link: "/" },
          { name: "About Us", link: "/about" },
          { name: "Catalogues", link: "/catalogues" },
          { name: "Say Hii!", link: "/say-hi" },
          { name: "Contact Us", link: "/contact" },
          { name: "Locate Us", link: "/locate" },
          { name: "Support", link: "/support" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="relative group text-sm font-medium text-white hover:text-gray-200 transition"
          >
            {item.name}
            {/* Hover Underline Effect */}
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
