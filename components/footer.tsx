import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-emerald-200 text-gray-700 pt-8">
      <div className="container flex flex-col mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-y-6 mb-6">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center sm:items-start sm:w-1/3 mx-4">
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
                className="sm:!h-[60px] sm:!w-[180px] h-[50px] w-[160px]"
              />
            </Link>
          </div>

          {/* Categories */}
          <div className="sm:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              CATEGORIES
            </h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1">
              {[
                { name: "Water Closet", link: "/water closet" },
                { name: "One Piece Closet", link: "/one piece closet" },
                { name: "One Piece Basin", link: "/one piece basin" },
                {
                  name: "One Piece Wall Hung Basin",
                  link: "/one piece wall hung basin",
                },
                { name: "Half Padestal Basin", link: "/table top" },
                { name: "Wall Hung Closet", link: "./wall hung closet" },
                { name: "Wall Hung Basin", link: "/wall hung basin" },
                { name: "PAN & URINAL", link: "/pan & urinal" },
                { name: "Table Top Basin", link: "/table top basin" },
                { name: "Basin With Padestal", link: "/basin with padestal" },
              ].map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.link}
                    className="text-gray-600 hover:text-teal-500 transition"
                  >
                    {category.name},
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="sm:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              CONTACT
            </h3>
            <p className="flex flex-col text-gray-600 mb-2">
              <a
                href="mailto:support@alashkon.com"
                className="text-teal-600 hover:text-teal-500 transition"
              >
                support@alashkon.com
              </a>
              <a
                href="mailto:alashkoninfras@gmail.com"
                className="text-teal-600 hover:text-teal-500 transition"
              >
                alashkoninfras@gmail.com
              </a>
            </p>
            <p className="text-gray-600">
              <a
                href="https://maps.google.com/?q=AT.+P.O.+Pochari,+Dhanbad,+Pin+828306,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-500 transition"
              >
                AT. P.O. Pochari, Dhanbad, Pin: 828306, India
              </a>
            </p>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-400 pt-6">
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="https://www.facebook.com/profile.php?id=61569552780450&mibextid=qi2Omg"
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
          <p className="text-gray-600 text-sm font-semibold text-center">
            © 2024 ALL RIGHTS RESERVED BY ALASHKON
          </p>
        </div>
      </div>

      {/* Developer Section */}
      <div className="bg-emerald-950 py-3 mt-6 text-center rounded-t-3xl">
        <p className="text-teal-100 text-sm">
          Developed By -{" "}
          <a
            href="https://wa.me/918340451897"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-200 hover:underline hover:text-teal-300 transition"
          >
            SURAJ KUMAR SAW
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
