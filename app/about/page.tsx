const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 py-12 px-6 md:px-12 lg:px-20 mt-14"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our journey began in 1998 with a humble startup,{" "}
          <strong>Sangam Hardware</strong>, founded by the visionary Lt. Sanjay
          Kumar Chourasia and Mr. Ajay Kumar Chourasia. Starting as a supplier
          of plumbing and painting products to construction sites, their
          dedication and hard work laid the foundation for a legacy.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Over time, the business was carried forward by the next generation,
          Mr. Sujal Kumar Chourasia (son of Lt. Sanjay Kumar Chourasia) and Mr.
          Ajay Kumar Chourasia. After two decades, another branch was
          established: <strong>Sangam Trader</strong>, led by Proprietor Mr.
          Kumar Hritik Roshan and managed by Mr. Naresh Prasad Chourasia.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          With a vision for further expansion,{" "}
          <strong>Alashkon and Infrastructure Pvt. Ltd.</strong> was founded to
          offer a diverse range of high-quality sanitary ware products and
          continually innovate to meet the needs of our customers.
        </p>
        <h3 className="text-xl font-semibold text-teal-500 mt-6">
          Our Commitment
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mt-2">
          At <strong>Alashkon and Infrastructure Pvt. Ltd.</strong>, we pride
          ourselves on using 100% pure materials and providing unparalleled
          customer satisfaction both during and after service. All our products
          come with a minimum 12-year polish whiteness guarantee, ensuring
          long-lasting elegance and reliability.
        </p>
        <h3 className="text-xl font-semibold text-teal-500 mt-6">
          Our Products
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mt-2">
          We offer a wide range of sanitary ware, including:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
          <li>Wall-hung units</li>
          <li>One-piece designs</li>
          <li>Table-top basins</li>
          <li>Pedestal and half-pedestal basins</li>
          <li>Urinals</li>
          <li>And more</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Experience the style and elegance of{" "}
          <strong>Alashkon and Infrastructure Pvt. Ltd.</strong>, where superior
          craftsmanship meets timeless design.
        </p>
      </div>
    </section>
  );
};

export default About;
