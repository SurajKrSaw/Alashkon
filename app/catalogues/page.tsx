const Catalogues = () => {
  const categories = [
    {
      name: "WATER CLOSET",
      link: "./water closet",
      img: "../categoryImgs/watercloset.jpg",
    },
    {
      name: "ONE PIECE CLOSET",
      link: "./one piece closet",
      img: "../categoryImgs/onepiececloset.jpg",
    },
    {
      name: "ONE PIECE BASIN",
      link: "./one piece basin",
      img: "../categoryImgs/onepiecebasin.jpg",
    },
    {
      name: "ONE PIECE WALL HUNG BASIN",
      link: "./one piece wall hung basin",
      img: "../categoryImgs/onepiecewallhungbasin.jpg",
    },
    {
      name: "HALF PADESTAL BASIN",
      link: "./half padestal basin",
      img: "../categoryImgs/halfpadestalbasin.jpg",
    },
    {
      name: "WALL HUNG CLOSET",
      link: "./wall hung closet",
      img: "../categoryImgs/wallhungcloset.jpg",
    },
    {
      name: "WALL HUNG BASIN",
      link: "./wall hung basin",
      img: "../categoryImgs/wallhungbasin.jpg",
    },
    {
      name: "PAN & URINAL",
      link: "./pan & urinal",
      img: "../categoryImgs/pan&urinal.jpg",
    },
    {
      name: "TABLE TOP BASIN",
      link: "./table top basin",
      img: "../categoryImgs/tabletopbasin.jpg",
    },

    {
      name: "BASIN WITH PADESTAL",
      link: "./basin with padestal",
      img: "../categoryImgs/basinwithpadestal.jpg",
    },
  ];

  return (
    <section className="w-full bg-gray-100 text-gray-600 body-font py-6">
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
