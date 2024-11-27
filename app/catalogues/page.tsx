const Catalogues = () => {
  const categories = [
    {
      name: "ONE PIECE",
      link: "./one piece",
      img: "https://senticabathware.com/includes/assets/images/collection/ONE%20PIECE/CODE-1111%20ULTRA.jpg",
    },
    {
      name: "HALF PEDESTAL BASIN",
      link: "./half pedestal basin",
      img: "https://senticabathware.com/includes/assets/images/collection/HALF%20PADESTAL%20BASIN/CODE-171%20SALVO.jpg",
    },
    {
      name: "WALL HUNG",
      link: "./wall hung",
      img: "https://senticabathware.com/includes/assets/images/collection/WALL%20HUNG/CODE-513%20ZORA.jpg",
    },
    {
      name: "ORISSA PAN & URINAL",
      link: "./orissa pan & urinal",
      img: "https://senticabathware.com/includes/assets/images/collection/ORISSA%20PAN%20&%20URINAL/CODE-154.jpg",
    },
    {
      name: "TABLE TOP",
      link: "./table top",
      img: "https://senticabathware.com/includes/assets/images/collection/TABLE%20TOP/CODE-102.jpg",
    },
    {
      name: "WALL HUNG BASIN",
      link: "./wall hung basin",
      img: "https://senticabathware.com/includes/assets/images/collection/WALL%20HUNG%20BASIN/CODE-5005.jpg",
    },
    {
      name: "WATER CLOSET",
      link: "./water closet",
      img: "https://senticabathware.com/includes/assets/images/collection/WATER%20CLOSET/CODE-201.jpg",
    },
    {
      name: "ONE PIECE BASIN",
      link: "./one piece basin",
      img: "https://senticabathware.com/includes/assets/images/collection/ONE%20PIECE%20BASIN/CODE-3001%20NESA.jpg",
    },
    {
      name: "BASIN WITH PADETAL",
      link: "./basin with padetal",
      img: "https://senticabathware.com/includes/assets/images/collection/BASIN%20WITH%20PADETAL/CODE-128%20LINIA.jpg",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-600 body-font mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center tracking-wide py-7 text-teal-600 decoration-teal-400">
        CATALOGUES
      </h1>
      <div className="container flex flex-wrap px-4 sm:px-6 py-4 mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="p-3 w-full sm:w-1/2 md:w-1/3">
            <a href={category.link} className="block">
              <div className="bg-sky-100 border border-teal-100 shadow-sm hover:bg-teal-200 hover:shadow-lg hover:-translate-y-1 transform transition-all rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 sm:h-56 object-contain p-2 rounded-sm"
                  src={category.img}
                  alt={category.name}
                />
                <div className="p-3 text-center">
                  <h2 className="text-teal-300 font-semibold text-xs sm:text-sm mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="text-base sm:text-lg font-bold text-gray-800 tracking-wide">
                    {category.name}
                  </h1>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalogues;
