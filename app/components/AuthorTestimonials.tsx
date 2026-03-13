"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const authors = [
  {
    name: "Hannah Smith",
    role: "Owner",
    experience: "7 years of experience",
    email: "smith@email.com",
    image: "/author1.jpg",
    description:
      "Hannah always loved reading and studied literary editing. After graduating from university, she decided to open her own bookstore, and after 2 years, she launched a subscription service.",
    reverse: false,
  },
  {
    name: "Diana Grande",
    role: "Literary Critic",
    experience: "3 years of experience",
    email: "grande@email.com",
    image: "/author2.jpg",
    description:
      "Diana constantly prepares book reviews for the New York Times and selects the best new reads for our service every day. In the books box, there are always annotations written by Diana.",
    reverse: true,
  },
];

export default function AuthorTestimonials() {
  return (
    <section id="authors" className="py-24 bg-[#f6f6f6]">
      <div className="max-w-6xl mx-auto px-6">

        {authors.map((author, index) => (
          <div key={index}>

            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${
                author.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* IMAGE */}
              <div
                className={`flex ${
                  author.reverse ? "md:justify-end order-2" : "order-1"
                }`}
              >
                <Image
                  src={author.image}
                  alt={author.name}
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className={`${author.reverse ? "order-1" : "order-2"}`}>
                <h3 className="text-3xl font-serif text-[#2d2d2d] mb-2">
                  {author.name}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  <span className="text-[#b39b6d] font-medium">
                    {author.role}
                  </span>{" "}
                  | {author.experience}
                </p>

                <p className="text-sm text-gray-500 mb-6">{author.email}</p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {author.description}
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex gap-4">
                  <div className="w-9 h-9 bg-[#b39b6d] text-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80">
                    <FaFacebookF size={14} />
                  </div>

                  <div className="w-9 h-9 bg-[#b39b6d] text-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80">
                    <FaInstagram size={14} />
                  </div>

                  <div className="w-9 h-9 bg-[#b39b6d] text-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80">
                    <FaYoutube size={14} />
                  </div>
                </div>
              </div>

            </div>

            {/* Divider */}
            {index !== authors.length - 1 && (
              <div className="border-t border-gray-300 my-16"></div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}