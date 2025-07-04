"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl bg-violet-100 my-16 p-10 rounded-2xl shadow-lg flex flex-col gap-6"
    >
      <h1 className="text-4xl font-extrabold text-purple-800 transition-all duration-300">
        About <span className="text-purple-600">BitLinks</span>
      </h1>
      <p className="text-lg text-gray-800 leading-relaxed">
        <span className="font-bold">BitLinks</span> is the easiest and most reliable URL shortener built for modern users. We transform long, messy links into clean, branded, and trackable short URLs — within seconds.
      </p>
      <p className="text-md text-gray-700">
        Whether you’re a casual user or a business, BitLinks helps you share smarter, faster, and more effectively. Our goal is to provide privacy-first, ad-free link shortening with a beautiful interface.
      </p>
      <div className="flex gap-4 mt-4">
        <button className="transition-all bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-xl shadow-md hover:scale-105">
          Start Shortening
        </button>
        <button className="transition-all border-2 border-purple-700 text-purple-700 hover:bg-purple-100 font-bold py-2 px-6 rounded-xl shadow-md hover:scale-105">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default About;
