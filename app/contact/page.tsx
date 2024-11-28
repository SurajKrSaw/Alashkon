import Link from "next/link";
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-teal-700 mb-8">Contact Us</h1>

      {/* Contact Information Section */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Email</h2>
            <p className="text-gray-600 mt-1">
              <a
                href="mailto:contact@alashkon.com"
                className="text-teal-600 hover:underline"
              >
                alashkoninfras@gmail.com
              </a>
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-700">Phone</h2>

            <Link
              href="tel:+919905061103"
              className="text-teal-600 hover:text-teal-700 text-teal-600 mt-1 transition hover:underline"
            >
              +91-9905061103
            </Link>
            <Link
              href="tel:+919905061103"
              className="text-teal-600 hover:text-teal-700 transition hover:underline"
            >
              +91-9110982710
            </Link>
          </div>

          {/* WhatsApp */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">WhatsApp</h2>
            <p className="text-gray-600 mt-1">
              <a
                href="https://wa.me/919905061103"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Chat with us on WhatsApp
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Follow Us</h2>
            <div className="flex items-center space-x-4 mt-1">
              <a
                href="https://www.facebook.com/profile.php?id=61569552780450&mibextid=qi2Omg&rdid=I6PFl8T5T0pSPHVF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19oW2ogEaP%2F%3Fmibextid%3Dqi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 transition font-semibold hover:underline"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/alashkon/?igsh=aXFzbDVvcW0zeTFm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 transition font-semibold hover:underline"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-xl font-bold text-gray-700 mb-1">Enquiry Form</h2>
        <p className="mb-6 text-sm text-teal-800">
          Fill in the form below for any new product/business enquiry and we
          will get back to you at the earliest.
        </p>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                placeholder="Subject of your enquiry"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-right">
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
