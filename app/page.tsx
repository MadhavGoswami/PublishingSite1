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
    <main className="w-full overflow-x-hidden scroll-smooth">

{/* HERO SECTION */}
<section className="relative w-full min-h-screen">

  {/* Background Image */}
  <Image
    src="/Background.png"
    alt="Banner"
    fill
    priority
    className="object-cover"
  />

  {/* Warm overlay */}
  <div className="absolute inset-0 "></div>

  {/* Navbar */}
  <header className="absolute top-0 left-0 w-full z-20 h-28">
    <div className="max-w-8xl mx-auto flex items-center justify-between px-6 md:px-44 h-full">

      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo4.png"
          alt="logo"
          width={180}
          height={180}
          priority
        />
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex">
  <ul className="flex gap-10 text-white font-serif text-lg tracking-wide">

    <li>
      <a href="#" className="hover:text-[#b39b6d] transition">
        Home
      </a>
    </li>
     <li>
    <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#b39b6d]">
      About
    </a>
  </li>

    <li>
      <a href="#books" className="hover:text-[#b39b6d] transition">
        Books
      </a>
    </li>

    <li>
      <a href="#authors" className="hover:text-[#b39b6d] transition">
        Authors
      </a>
    </li>

    <li>
      <a href="#contact" className="hover:text-[#b39b6d] transition">
        Contact
      </a>
    </li>

  </ul>
</nav>

      {/* Mobile Menu Button */}
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
  <div className="fixed inset-0 bg-black/95 z-30 flex flex-col items-center justify-center">

    <button
      className="absolute top-6 right-6 text-white text-3xl"
      onClick={() => setMenuOpen(false)}
    >
      ✕
    </button>

    <ul className="text-white text-3xl font-serif space-y-10 text-center">

      <li>
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#b39b6d] transition"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#b39b6d] transition"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#books"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#b39b6d] transition"
        >
          Books
        </a>
      </li>

      <li>
        <a
          href="#authors"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#b39b6d] transition"
        >
          Authors
        </a>
      </li>

      <li>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#b39b6d] transition"
        >
          Contact
        </a>
      </li>

    </ul>

  </div>
)}


  {/* Hero Content */}
  <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20">

    <div className="max-w-xl ml-4 md:ml-16 lg:ml-28">

      <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
        Where Stories Grow <br /> and Ideas Flourish
      </h1>

      <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
       Growing Pages Publication helps writers turn ideas into impactful books and connects readers with inspiring stories.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5">

        <button className="bg-[#b39b6d] text-white px-7 py-3 rounded-md font-medium transition hover:bg-[#9f8a60]">
          Explore Books
        </button>

        <button className="border border-white text-white px-7 py-3 rounded-md font-medium transition hover:bg-white hover:text-black">
          Submit Your Manuscript
        </button>

      </div>

    </div>

  </div>

</section>
{/* ABOUT PUBLISHER SECTION */}
<section id="about" className="py-20 md:py-28 bg-[#f5f3ef]">

  <div className="max-w-7xl mx-auto px-6 md:px-10">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2c2c2c]">
        About the Publisher
      </h2>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

      {/* Publisher Image */}
      <div
        className="relative group cursor-pointer"
        onClick={() => setPublisherModal(true)}
      >
        <Image
          src="/publisher.jpg"
          alt="Publisher"
          width={600}
          height={600}
          className="rounded-xl shadow-lg w-full h-auto object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition"></div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#b39b6d] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition text-xl play-pulse blink-fast">
            ▶
          </div>
        </div>
      </div>

     {/* Text */}
<div className="w-full text-justify">

  <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-6">
    Growing Pages Publication is an independent publishing house dedicated to nurturing emerging writers and delivering meaningful literature to readers across India and globally. The company focuses on publishing fiction, non-fiction, academic resources, and children’s books that inspire creativity, learning, and cultural understanding.
  </p>

  <p className="text-gray-700 text-base md:text-xl leading-relaxed">
    Learn more about our{" "}
    <span
      className="text-[#b39b6d] cursor-pointer underline font-medium hover:text-[#2c2c2c] transition shine-text"
      onClick={() => setInfoModal(true)}
    >
      vision and mission
    </span>{" "}
    and how we help writers turn their ideas into impactful publications.
  </p>

</div>

    </div>

  </div>

</section>
  {/* Publisher Video Modal */}
  {publisherModal && (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

      <div className="relative w-full max-w-4xl">

        {/* Close button */}
        <button
          className="absolute -top-10 right-0 text-white text-3xl"
          onClick={() => setPublisherModal(false)}
        >
          ✕
        </button>

        {/* Video */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/L623vxbbp_w"
            title="Publisher Video"
            allowFullScreen
          ></iframe>
        </div>

      </div>

    </div>
  )}

{/* Vision Modal */}
{infoModal && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8">

    <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-6 md:p-10 relative fade-up">

      {/* Close button */}
      <button
        className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-black transition"
        onClick={() => setInfoModal(false)}
      >
        ✕
      </button>

      {/* Heading with Shine */}
      <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 shine-text">
        Vision & Mission
      </h3>

      {/* Divider */}
      <div className="w-12 h-[2px] bg-[#b39b6d] mb-6"></div>

      {/* Content */}
      <p className="text-gray-600 text-base md:text-xl leading-relaxed md:leading-loose tracking-[0.2px]">
       To become a trusted platform for new and established authors while promoting diverse voices in literature.
      <br/>  To empower writers and bring powerful stories, educational knowledge, and creative ideas to readers everywhere.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <button
          onClick={() => setInfoModal(false)}
          className="px-6 py-3 bg-[#b39b6d] text-white text-sm font-medium rounded-lg hover:bg-[#b39b6d] transition"
        >
          Close
        </button>
      </div>

    </div>
  </div>
)}

      <FeaturedBooks />
      <AuthorTestimonials />
      <ContactSection />

    </main>
  );
}