'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link href="/">BitLinks</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-medium">
          <li className="hover:text-yellow-300 transition"><Link href="/">Home</Link></li>
          <li className="hover:text-yellow-300 transition"><Link href="/about">About</Link></li>
          <li className="hover:text-yellow-300 transition"><Link href="/shorten">Shorten</Link></li>
          <li className="hover:text-yellow-300 transition"><Link href="/contact">Contact</Link></li>
          <li className="flex gap-2">
            <Link href="/shorten">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-1 rounded-lg shadow font-semibold transition-all">
                 Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-white hover:bg-gray-100 text-purple-700 px-4 py-1 rounded-lg shadow font-semibold transition-all">
                 GitHub
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-3 px-4 pb-4 bg-purple-600 rounded-b-lg font-medium">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/shorten" onClick={() => setIsOpen(false)}>Shorten</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li className="flex flex-col gap-2 pt-2">
            <Link href="/shorten" onClick={() => setIsOpen(false)}>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold shadow">
                 Try Now
              </button>
            </Link>
            <Link href="/github" onClick={() => setIsOpen(false)}>
              <button className="bg-white hover:bg-gray-100 text-purple-700 px-4 py-2 rounded-lg font-semibold shadow">
                 GitHub
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
