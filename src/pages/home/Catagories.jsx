import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Makanan",
    despriction: "(86 Makanan)",
    image: "/images/home/category/Makanan.jpg",
  },
  {
    id: 2,
    title: "Obat & Vitamin",
    despriction: "(12 Obat & Vitamin)",
    image: "/images/home/category/obat.jpg",
  },
  {
    id: 3,
    title: "Mainan",
    despriction: "(Mainan)",
    image: "/images/home/category/mainan.jpg",
  },
  {
    id: 4,
    title: "Browse All",
    despriction: "(255 Items)",
    image: "/images/home/category/browseall.jpg",
  },
];

const Catagories = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Catagories</h2>
      </div>

      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 ">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10"
          >
            <div className="w-full mx-auto flex items-center justify-center">
              <img
                src={item.image}
                alt=""
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5 className="text-[#1E1E1E] font-semibold">{item.title}</h5>
              <p className="text-secondary text-sm">{item.despriction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
