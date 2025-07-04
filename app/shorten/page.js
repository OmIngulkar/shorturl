// Shorten.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";


const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [history, sethistory] = useState([]);

  // 🔁 Load history from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("shortLinks");
    if (stored) {
      sethistory(JSON.parse(stored));
    }
  }, []);

  // 💾 Save history to localStorage on change
  useEffect(() => {
    localStorage.setItem("shortLinks", JSON.stringify(history));
  }, [history]);

  const generate = async () => { // Make this function async
    if (!url || !shorturl) {
      alert("Please fill both fields.");
      return;
    }

    // 1. Send data to the new backend API to save the mapping
    try {
      const response = await fetch('/api/shorten', { // New API endpoint to save
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl: url, shortCode: shorturl }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to generate short URL.");
        return;
      }

      // If successful, proceed with local state updates
      const fullGeneratedUrl = `http:/${data.shortCode}`; // Use data.shortCode from backend

      // Check if this short URL is already used in history (local check, backend also checks)
      const existing = history.find((link) => link.endsWith(`/${data.shortCode}`));
      if (existing) {
        // This case should ideally be handled by the backend uniqueness check first
        console.warn("Short URL already in local history, but backend confirmed unique.");
      }

      // Add to history
      sethistory((prev) => [fullGeneratedUrl, ...prev]);
      setgenerated(fullGeneratedUrl);
      seturl("");
      setshorturl("");
      alert("✅ Short URL generated successfully!");

    } catch (error) {
      console.error("Error generating short URL:", error);
      alert("An error occurred while generating the short URL.");
    }
  };

  const deleteHistoryItem = (indexToDelete) => {
    const updated = history.filter((_, idx) => idx !== indexToDelete);
    sethistory(updated); // triggers localStorage update
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl bg-gradient-to-br from-violet-100 via-purple-200 to-fuchsia-100 my-10 p-10 rounded-3xl shadow-2xl flex flex-col gap-8"
    >
      <h1 className="text-4xl font-black text-center text-purple-900">
        🔗 Smart Link Shortener
      </h1>

      <div className="flex flex-col gap-5">
        <input
          type="text"
          value={url}
          placeholder="Enter full URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
          className="p-4 rounded-xl border border-purple-400 shadow-sm hover:bg-purple-50 focus:outline-purple-700 font-medium"
          onChange={(e) => seturl(e.target.value)}
        />
        <input
          type="text"
          value={shorturl}
          placeholder="Enter custom short text (e.g., myvideo)"
          className="p-4 rounded-xl border border-purple-400 shadow-sm hover:bg-purple-50 focus:outline-purple-700 font-medium"
          onChange={(e) => setshorturl(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 rounded-xl shadow-md transition-all text-lg"
        >
          🚀 Generate Short URL
        </button>

        {generated && (
          <div className="bg-white mt-4 p-4 border border-purple-300 rounded-xl text-center shadow-inner">
            <span className="text-purple-700 font-semibold">Your Link: </span>
            <Link
              href={generated}
              target="_blank"
              className="underline font-bold text-purple-900"
            >
              {generated}
            </Link>
          </div>
        )}
      </div>

      {history.length > 0 && (
        <div className="bg-white p-6 mt-6 rounded-2xl shadow-xl border border-purple-200">
          <h2 className="text-xl font-bold text-purple-700 mb-4">
            🔄 History of Generated URLs
          </h2>
          <ul className="space-y-4">
            {history.map((link, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-purple-50 p-3 rounded-xl hover:bg-purple-100 transition group"
              >
                <Link
                  href={link}
                  target="_blank"
                  className="text-purple-800 font-medium underline break-all"
                >
                  {link}
                </Link>
                <button
                  onClick={() => deleteHistoryItem(index)}
                  className="text-red-500 hover:text-red-700 transition ml-4"
                  title="Delete"
                >
                  <FaTrashAlt className="text-lg group-hover:scale-110 transition-transform" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Shorten;