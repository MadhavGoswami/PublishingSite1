"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";

const categories = {
  "Fiction": [
    "/Book1.jpg",
    "/Book2.jpg",
    "/Book3.jpg",
    "/Book4.jpg",
    "/Book5.jpg",
    "/Book6.jpg",
  ],
  "Academic Books": [
    "/Academic1.jpg",
    "/Academic2.jpg",
     "/Academic3.jpg",
     "/Academic4.jpg",
     "/Academic5.jpg",
     "/Academic6.jpg",
    
    
  ],
  "Children's Books": [
    "/Child1.jpg",
    "/Child2.jpg",
    "/Child3.jpg",
    "/Child4.jpg",
    "/Child5.jpg",
    "/Child6.jpg",
  ],
  "Self Help": [
    "/Help1.jpg",
    "/Help2.jpg",
    "/Help3.jpg",
    "/Help4.jpg",
    "/Help5.jpg",
    "/Help6.jpg"
  ],
};

export default function FeaturedBooks() {
  const [activeCategory, setActiveCategory] = useState("Fiction");

  return (
    <section id="books" className="py-28 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2c2c2c] mb-4">
            Featured Books
          </h2>

          <p className="text-gray-600 text-base md:text-lg  max-w-xl mx-auto">
            Discover books from different genres carefully curated
            to inspire readers of all ages.
          </p>

        </div>

      {/* CATEGORY BUTTONS */}
<div className="flex flex-wrap justify-center gap-4 mb-16 font-serif  ">

  {Object.keys(categories).map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`w-48 text-center py-2 rounded-full font-medium transition
      
      ${
        activeCategory === category
          ? "bg-[#b39b6d] text-white shadow-md"
          : "bg-white text-gray-700 hover:bg-[#b39b6d] hover:text-white font-semibold"
      }`}
    >
      {category}
    </button>
  ))}

</div>

        {/* PREMIUM CAROUSEL */}
       <Swiper
  key={activeCategory}
  modules={[Autoplay, EffectCoverflow]}
  effect="coverflow"
  centeredSlides={true}
  grabCursor={true}
  slidesPerView={3}
  loop={true}
  className="!overflow-visible py-10"

  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
    slideShadows: false,
  }}

  autoplay={{
    delay: 1200,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}

  speed={700}

  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>

          {categories[activeCategory].map((book, index) => (
            <SwiperSlide key={index}>

              {({ isActive }) => (

                <div className="flex justify-center">

                  <div
                    className={`relative transition-all duration-700
                 ${isActive ? "scale-105 z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]" : "scale-90 opacity-70"}`}
                  >

                    <Image
                      src={book}
                      alt="Book"
                      width={240}
                      height={340}
                      className="rounded-lg shadow-2xl"
                    />

                    {/* GOLD FRAME */}
                    <div className="absolute inset-0 rounded-lg ring-0 hover:ring-2 ring-[#b39b6d] transition"></div>

                    {/* REFLECTION */}
                    <div className="absolute left-0 right-0 top-full h-20 bg-gradient-to-b from-black/30 to-transparent blur-lg opacity-30"></div>

                  </div>

                </div>

              )}

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}