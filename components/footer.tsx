import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-emerald-200 text-gray-700 pt-8">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start mb-6">
          {/* Logo and Company Name */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center sm:text-left">
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

          {/* Categories (Catalogues) */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              CATEGORIES
            </h3>
            <ul className="space-x-2 inline-flex flex-wrap">
              <li>
                <Link
                  href="/one piece"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  One Piece,
                </Link>
              </li>
              <li>
                <Link
                  href="/half pedestal basin"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Half Pedestal Basin,
                </Link>
              </li>
              <li>
                <Link
                  href="/wall hung"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Wall Hung,
                </Link>
              </li>
              <li>
                <Link
                  href="/orissa pan urinal"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Orissa Pan & Urinal,
                </Link>
              </li>
              <li>
                <Link
                  href="/table top"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Table Top,
                </Link>
              </li>
              <li>
                <Link
                  href="/wall hung basin"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Wall Hung Basin,
                </Link>
              </li>
              <li>
                <Link
                  href="/water closet"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Water Closet,
                </Link>
              </li>
              <li>
                <Link
                  href="/one piece basin"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  One Piece Basin,
                </Link>
              </li>
              <li>
                <Link
                  href="/basin with pedestal"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Basin with Pedestal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="w-full sm:w-1/3 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              CONTACT
            </h3>
            <p className="text-gray-600">
              <a
                href="mailto:contact@alashkon.com"
                className="text-teal-600 hover:text-teal-500 transition"
              >
                alashkoninfras@gmail.com
              </a>
            </p>
            <p className="text-gray-600">
              <a
                href="https://maps.google.com/?q=1234,+Dummy+Street,+Some+City"
                className="text-teal-600 hover:text-teal-500 transition"
              >
                AT. P.O. Pochari, Dhanbad, Pin Code: 828306, India
              </a>
            </p>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-400 pt-6">
          {/* Social Icons (Left of Copyright) */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link
              href="https://www.facebook.com/profile.php?id=61569552780450&mibextid=qi2Omg&rdid=I6PFl8T5T0pSPHVF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19oW2ogEaP%2F%3Fmibextid%3Dqi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 transition font-semibold hover:underline"
              aria-label="Facebook"
            >
              FACEBOOK
            </Link>
            <Link
              href="https://www.instagram.com/alashkon/?igsh=aXFzbDVvcW0zeTFm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 transition font-semibold hover:underline"
              aria-label="Instagram"
            >
              INSTAGRAM
            </Link>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-600 text-sm text-center font-semibold text-sm">
            © 2024 ALL RIGHTS RESERVED BY ALASHKON
          </p>
        </div>
      </div>

      {/* Developer Section */}
      <div className="bg-emerald-950 py-3 mt-6 text-center">
        <p className="text-gray-200 text-sm">
          Developed By -{" "}
          <a
            href="https://wa.me/917808340140"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-teal-100 hover:underline hover:text-teal-300 transition"
          >
            Suraj Kr. Saw
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
