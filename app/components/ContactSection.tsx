"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#f5f3ef]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2c2c2c] mb-4">
            Contact Growing Pages
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Connect with our publishing team. Whether you're an author,
            reader, or partner, we’re always happy to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* CONTACT DETAILS */}
          <div className="space-y-8">

            {/* Email */}
            <div className="flex items-start gap-5 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-[#b39b6d] text-white p-4 rounded-full text-lg">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="font-serif text-lg font-semibold text-[#2c2c2c]">
                  Email
                </h4>

                <p className="text-gray-600 break-all">
                  contact@growingpagespublication.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-[#b39b6d] text-white p-4 rounded-full text-lg">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="font-serif text-lg font-semibold text-[#2c2c2c]">
                  Phone
                </h4>

                <p className="text-gray-600">
                  +91-XXXXXXXXXX
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-[#b39b6d] text-white p-4 rounded-full text-lg">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="font-serif text-lg font-semibold text-[#2c2c2c]">
                  Address
                </h4>

                <p className="text-gray-600">
                  Bavaria, Germany
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="font-serif text-lg font-semibold text-[#2c2c2c] mb-4">
                Follow Us
              </h4>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#b39b6d] text-white  transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#b39b6d] text-white  transition"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#b39b6d] text-white  transition"
                >
                  <FaFacebookF />
                </a>

              </div>
            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-md">

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm  text-[#2c2c2c] font-semibold font-serif">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border text-black border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#b39b6d] font-serif"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm  text-[#2c2c2c] font-semibold font-serif">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border text-black border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#b39b6d] font-serif"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm  text-[#2c2c2c] font-semibold font-serif">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full border text-black border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#b39b6d] font-serif"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#b39b6d]  text-black  py-3 rounded-md   transition font-semibold font-serif"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}