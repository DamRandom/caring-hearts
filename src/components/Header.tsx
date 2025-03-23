import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#4A5443] py-6 shadow-lg">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-[#FFFDF8] text-3xl font-bold">Caring Hearts</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/#home"
                className="text-[#FFFDF8] text-lg hover:text-[#D8E2C6] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-[#FFFDF8] text-lg hover:text-[#D8E2C6] transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-[#FFFDF8] text-lg hover:text-[#D8E2C6] transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#philosophy"
                className="text-[#FFFDF8] text-lg hover:text-[#D8E2C6] transition duration-300"
              >
                Philosophy
              </Link>
            </li>
            <li>
              <Link
                href="/#location"
                className="text-[#FFFDF8] text-lg hover:text-[#D8E2C6] transition duration-300"
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-[#FFFDF8] text-lg hover:text-[#D8E2C6] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
