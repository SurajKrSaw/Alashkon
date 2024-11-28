"use client";
import Link from "next/link";
import { useState } from "react";

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqList = [
    {
      question: "What types of sanitary products do you offer?",
      answer:
        "We provide a wide range of sanitary ware, including wash basins, toilets, urinals, and accessories for bathrooms and kitchens.",
    },
    {
      question: "Where is your store located?",
      answer:
        "Our store is located AT. P.O. Pochari, Dhanbad, Pin Code: 828306, India. You can locate us easily using Google Maps.",
    },
    {
      question: "Do you offer home delivery?",
      answer:
        "Yes, we offer home delivery for bulk purchases. Delivery charges may vary based on your location.",
    },
    {
      question: "What are your store hours?",
      answer: "Our store is open from 9:00 AM to 8:00 PM, Monday to Saturday.",
    },
    {
      question: "Do you accept returns or exchanges?",
      answer:
        "We accept returns or exchanges within 7 days of purchase, provided the items are unused and in original packaging.",
    },
    {
      question: "Do you have a warranty on your products?",
      answer:
        "Yes, most of our products come with a manufacturer's warranty. Please check with our staff for specific details.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-emerald-50 text-teal-700 py-6 text-center">
        <h1 className="text-4xl font-bold">Support</h1>
        <p className="text-lg mt-2">
          How can we assist you? Find answers to common questions or get in
          touch with us!
        </p>
      </header>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-20">
        <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer bg-white hover:bg-gray-100 px-4 py-2 rounded-md shadow-md transition"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-800 flex justify-between items-center">
                {faq.question}
                <span className="text-teal-600">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </h3>
              {activeIndex === index && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-gray-200 py-10 px-4 sm:px-8 lg:px-20">
        <h2 className="text-2xl font-bold text-teal-700 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col p-4 bg-white shadow-md rounded-lg text-center">
            <p className="text-lg font-semibold text-gray-700">Call Us</p>
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
          <div className="p-4 bg-white shadow-md rounded-lg text-center">
            <p className="text-lg font-semibold text-gray-700">WhatsApp</p>
            <Link
              href="https://wa.me/919905061103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline"
            >
              +91 9905061103
            </Link>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg text-center">
            <p className="text-lg font-semibold text-gray-700">Follow Us</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link
                href="https://www.instagram.com/alashkon/?igsh=aXFzbDVvcW0zeTFm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61569552780450&mibextid=qi2Omg&rdid=I6PFl8T5T0pSPHVF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
