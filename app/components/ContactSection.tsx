"use client";

import { FaInstagram, FaLinkedinIn, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We'd love to hear from authors, readers, and partners. Reach out to us using the details below or send a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE CONTACT INFO */}
          <div className="space-y-8">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-[#b39b6d] text-white p-3 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-600">
                  contact@growingpagespublication.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-[#b39b6d] text-white p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-600">
                  +91-XXXXXXXXXX
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-[#b39b6d] text-white p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p className="text-gray-600">
                  Bavaria, Germany
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6">
              <h4 className="font-semibold text-lg mb-4">
                Follow Us
              </h4>

              <div className="flex gap-4">

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b39b6d] text-white hover:scale-110 transition cursor-pointer">
                  <FaInstagram />
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b39b6d] text-white hover:scale-110 transition cursor-pointer">
                  <FaLinkedinIn />
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b39b6d] text-white hover:scale-110 transition cursor-pointer">
                  <FaFacebookF />
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE CONTACT FORM */}
          <div className="bg-white p-8 rounded-xl shadow-lg">

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#b39b6d]"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#b39b6d]"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#b39b6d]"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#b39b6d] text-white py-3 rounded-md font-medium hover:bg-[#a28c5e] transition"
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