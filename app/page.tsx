"use client";

import { useState } from "react";
import Image from "next/image";
import FeaturedBooks from "@/app/components/FeaturedBooks";
import AuthorTestimonials from "@/app/components/AuthorTestimonials";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [publisherModal, setPublisherModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen">

        {/* Background Image */}
        <Image
          src="/Background.png"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Navbar */}
        <header className="absolute top-0 left-0 w-full z-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-bold text-white">
              LOGO
            </div>

            {/* Desktop Navbar */}
            <nav className="hidden md:block">
              <ul className="flex gap-8 text-white font-medium">
                <li className="cursor-pointer hover:opacity-70">Home</li>
                <li className="cursor-pointer hover:opacity-70">Books</li>
                <li className="cursor-pointer hover:opacity-70">Authors</li>
                <li className="cursor-pointer hover:opacity-70">Contact</li>
              </ul>
            </nav>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setMenuOpen(true)}
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>

          </div>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black z-30 flex flex-col items-center justify-center">

            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <ul className="text-white text-2xl space-y-8 text-center">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Books</li>
              <li className="cursor-pointer">Authors</li>
              <li className="cursor-pointer">Contact</li>
            </ul>

          </div>
        )}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Our Publishing House
            </h1>

            <p className="text-white text-base md:text-lg">
              Discover books, authors, and ideas that shape the world.
            </p>
          </div>
        </div>

      </section>

      {/* ABOUT PUBLISHER SECTION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">

          {/* Publisher Image */}
          <div
            className="cursor-pointer"
            onClick={() => setPublisherModal(true)}
          >
            <Image
              src="/publisher.jpg"
              alt="Publisher"
              width={500}
              height={500}
              className="rounded-lg shadow-lg hover:scale-105 transition"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#212121]">
              About the Publisher
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our publishing house has been dedicated to bringing meaningful
              stories and educational resources to readers around the world.
              Learn more about our{" "}
              <span
                className="text-blue-600 cursor-pointer underline"
                onClick={() => setInfoModal(true)}
              >
                vision and mission
              </span>{" "}
              and how we support authors and educators.
            </p>
          </div>

        </div>
      </section>

      {/* Publisher Modal */}
      {publisherModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-lg rounded-lg relative">

            <button
              className="absolute top-3 right-4 text-2xl"
              onClick={() => setPublisherModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">Publisher</h3>

            <p className="text-gray-700">
              Add information about the publisher here. You can include
              biography, achievements, history of the publishing house,
              and more details.
            </p>

          </div>
        </div>
      )}

      {/* Vision Modal */}
      {infoModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-lg rounded-lg relative">

            <button
              className="absolute top-3 right-4 text-2xl"
              onClick={() => setInfoModal(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">
              Vision & Mission
            </h3>

            <p className="text-gray-700">
              Here you can add details about your publishing philosophy,
              mission, editorial values, and long-term goals.
            </p>

          </div>
        </div>
      )}
      <FeaturedBooks />
      <AuthorTestimonials />
      <ContactSection />

    </main>
  );
}