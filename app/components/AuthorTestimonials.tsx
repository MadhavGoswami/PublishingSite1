"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const authors = [
  {
    name: "Hannah Smith",
    role: "Owner",
    experience: "7 years of experience",
    email: "smith@email.com",
    image: "/hanah.png",
    description:
      "Hannah always loved reading and studied literary editing. After graduating from university, she decided to open her own bookstore. After 2 years, she launched a subscription service to help readers discover meaningful books.",
    reverse: false,
  },
  {
    name: "Diana Grande",
    role: "Literary Critic",
    experience: "3 years of experience",
    email: "grande@email.com",
    image: "/Diana.webp",
    description:
      "Diana constantly prepares book reviews and selects the best new reads for our service every day. Every book recommendation includes thoughtful annotations written by Diana.",
    reverse: true,
  },
];

export default function AuthorTestimonials() {
  return (
    <section id="authors" className="py-24 bg-[#f5f3ef]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-4 font-semibold">
            Meet Our Authors
          </h2>
          <p className="text-gray-600 text-base md:text-lg  max-w-xl mx-auto">
            Passionate storytellers and literary experts who help shape
            meaningful books and inspiring reading experiences.
          </p>
        </div>

        {authors.map((author, index) => (
          <div key={index}>

            <div
              className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
                author.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >

            {/* IMAGE */}
<div
  className={`flex justify-center ${
    author.reverse ? "md:justify-end" : "md:justify-start"
  }`}
>
  <div className="relative group w-52 h-52 rounded-full overflow-hidden shadow-lg">

    <Image
      src={author.image}
      alt={author.name}
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
    />

    {/* gold ring hover */}
    <div className="absolute inset-0 rounded-full ring-0 group-hover:ring-2 ring-[#b39b6d] transition"></div>

  </div>
</div>

              {/* TEXT */}
              <div className="text-center md:text-left font-serif">

                <h3 className="font-serif text-3xl text-[#2c2c2c] mb-2">
                  {author.name}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  <span className="text-[#b39b6d] font-medium">
                    {author.role}
                  </span>{" "}
                  • {author.experience}
                </p>

                <p className="text-sm text-gray-500 mb-6">
                  {author.email}
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {author.description}
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center md:justify-start gap-4">

                  <div className="w-10 h-10 bg-[#b39b6d] text-white rounded-full flex items-center justify-center cursor-pointer transition hover:bg-[#9e8a60] hover:scale-105">
                    <FaFacebookF size={14} />
                  </div>

                  <div className="w-10 h-10 bg-[#b39b6d] text-white rounded-full flex items-center justify-center cursor-pointer transition hover:bg-[#9e8a60] hover:scale-105">
                    <FaInstagram size={14} />
                  </div>

                  <div className="w-10 h-10 bg-[#b39b6d] text-white rounded-full flex items-center justify-center cursor-pointer transition hover:bg-[#9e8a60] hover:scale-105">
                    <FaYoutube size={14} />
                  </div>

                </div>

              </div>

            </div>

            {/* Divider */}
            {index !== authors.length - 1 && (
              <div className="border-t border-[#e3dfd7] my-20"></div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}