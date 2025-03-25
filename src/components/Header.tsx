'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#4A5443] py-4 shadow-lg">
      <div className="flex justify-between items-center px-6 sm:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-[#FFFDF8] text-2xl sm:text-3xl font-bold">
          Caring Hearts
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 lg:space-x-8">
            {['Home', 'About', 'Services', 'Philosophy', 'Location', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  className="text-[#FFFDF8] text-lg hover:text-[#D8E2C6] transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#FFFDF8] text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#4A5443] flex flex-col items-center justify-center space-y-8 md:hidden z-50">
          {['Home', 'About', 'Services', 'Philosophy', 'Location', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-[#FFFDF8] text-2xl hover:text-[#D8E2C6] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
