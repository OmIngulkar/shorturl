"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl bg-violet-100 my-10 p-10 rounded-2xl shadow-lg flex flex-col gap-6"
    >
      <h1 className="text-4xl font-extrabold text-purple-800">Contact <span className="text-purple-600">Us</span></h1>
      <p className="text-lg text-gray-800">
        We&apos;d love to hear from you! Whether you have a question, feedback, or want to collaborate — feel free to reach out.
      </p>

      <div className="text-md text-gray-700 space-y-2">
        <p>📧 Email: <a className="text-blue-600 underline hover:text-blue-800 transition-all" href="mailto:support@bitlinks.com">support@bitlinks.com</a></p>
        <p>📞 Phone: <a className="text-blue-600 underline hover:text-blue-800 transition-all" href="tel:+911234567890">+91 12345 67890</a></p>
        <p>📍 Location: Pune, Maharashtra, India</p>
      </div>

      <form className="flex flex-col gap-4 mt-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg border border-gray-300 focus:outline-purple-500 shadow-sm transition-all hover:shadow-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg border border-gray-300 focus:outline-purple-500 shadow-sm transition-all hover:shadow-md"
        />
        <textarea
          rows={4}
          placeholder="Your Message"
          className="p-3 rounded-lg border border-gray-300 focus:outline-purple-500 shadow-sm transition-all hover:shadow-md"
        />
        <button
          type="submit"
          className="transition-all bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-xl shadow-md hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
