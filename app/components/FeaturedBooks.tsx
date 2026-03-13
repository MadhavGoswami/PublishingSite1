"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

const books = [
  "/book1.jpg",
  "/book2.jpg",
  "/book3.jpg",
  "/book4.jpg",
  "/book5.jpg",
  "/book6.jpg",
];

export default function FeaturedBooks() {
  const swiperRef = useRef<any>(null);

  return (
    <section id="books" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 relative">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#212121]">
          Featured Books
        </h2>

        {/* LEFT BUTTON */}
        {/* <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          ←
        </button> */}

        {/* RIGHT BUTTON */}
        {/* <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          →
        </button> */}

        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={60}
          loop={true}
          centeredSlides={true}
          speed={1500} // faster animation
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <div className="group flex justify-center">

                <div className="relative transition duration-500 group-hover:scale-110">

                  <Image
                    src={book}
                    alt="Book"
                    width={230}
                    height={330}
                    className="rounded-lg shadow-2xl"
                  />

                  {/* reflection */}
                  <div className="absolute left-0 right-0 top-full h-20 bg-gradient-to-b from-black/30 to-transparent blur-lg opacity-40"></div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}