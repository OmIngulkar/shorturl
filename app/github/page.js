"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const GitHub = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl bg-violet-100 my-10 p-10 rounded-2xl shadow-lg flex flex-col gap-6"
    >
      <h1 className="text-4xl font-extrabold text-purple-800">
        Our <span className="text-purple-600">GitHub</span>
      </h1>
      <p className="text-lg text-gray-800">
        Explore our open-source projects, contribute, or follow us for more updates.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-purple-700">🔗 BitLinks URL Shortener</h2>
            <p className="text-gray-700">A fast and minimal URL shortener built with Next.js, Tailwind, and MongoDB.</p>
          </div>
          <a
            href="https://github.com/YOUR_USERNAME/YOUR_REPO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-900 transition-all flex items-center gap-1"
          >
            <FaGithub className="text-2xl" />
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-purple-700">⚙️ GitHub Profile</h2>
            <p className="text-gray-700">Check out all our repositories and contributions.</p>
          </div>
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-900 transition-all flex items-center gap-1"
          >
            <FaGithub className="text-2xl" />
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center pt-4">
        Proudly open-source ❤️ — built by Om Ingulkar, for developers.
      </p>
    </motion.div>
  );
};

export default GitHub;
