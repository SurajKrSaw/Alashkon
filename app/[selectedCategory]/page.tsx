"use client";
import Image from "next/image";
import Link from "next/link";
import products from "../../data/products.json";

const Products = ({ params }: { params: { selectedCategory: string } }) => {
  console.log("Selected Category - ", params.selectedCategory);
  return (
    <div className="flex flex-col min-h-screen text-gray-600 bg-gray-100 body-font">
      <h1 className="text-3xl sm:text-4xl font-bold text-center tracking-wide py-7 text-teal-600 decoration-teal-400">
        {decodeURIComponent(params.selectedCategory).toUpperCase()}
      </h1>
      <div className="container py-8 px-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products
            .filter(
              (product) =>
                product.category === decodeURIComponent(params.selectedCategory)
            )
            .map((product) => (
              <div key={product.id} className="lg:w-1/3 md:w-1/2 p-5">
                <Link href="#" className="block">
                  <div className="p-4 bg-sky-100 hover:bg-teal-200 rounded-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative w-full h-64 mb-4">
                      <Image
                        height={3000}
                        width={3000}
                        alt={product.category + " " + product.name}
                        className="object-cover object-center w-full h-full rounded-md"
                        src={product.image}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xs font-semibold tracking-widest text-teal-600">
                        {decodeURIComponent(
                          params.selectedCategory
                        ).toUpperCase()}
                      </h3>
                      <h2 className="text-xl font-bold text-blue-900 tracking-wide text-right">
                        {product.name}
                      </h2>
                      <div className="flex justify-between text-gray-800 mt-2">
                        <div className="flex flex-col">
                          <p className="text-sm">Code: {product.code}</p>
                          {/* Size below Code */}
                          <p className="text-sm text-gray-600">
                            Size: {product.size || "N/A"} mm
                          </p>
                        </div>
                        <p className="text-lg font-semibold text-teal-600">
                          ₹ {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
