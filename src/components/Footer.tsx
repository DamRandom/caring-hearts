import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#4A5443] py-8 text-[#FFFDF8] shadow-lg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">Caring Hearts</h1>
          <div className="flex items-center text-sm text-[#D8E2C6] mb-1">
            <FaMapMarkerAlt size={18} className="mr-2" />
            <p>7914 Flowerfild Dr 33615, Miami, FL</p>
          </div>
          <div className="flex items-center text-sm text-[#D8E2C6]">
            <FaPhoneAlt size={18} className="mr-2" />
            <p>(123) 456-7890</p>
          </div>
        </div>

        {/* Center */}
        <div className="text-sm text-[#D8E2C6]">
          <p>© 2025 Caring Hearts. All Rights Reserved.</p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-6">
          <a href="mailto:info@caringhearts.com" className="text-[#FFFDF8] hover:text-[#D8E2C6] transition duration-300">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.facebook.com" className="text-[#FFFDF8] hover:text-[#D8E2C6] transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com" className="text-[#FFFDF8] hover:text-[#D8E2C6] transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/11234567890" className="text-[#FFFDF8] hover:text-[#D8E2C6] transition duration-300">
            <FaWhatsapp size={24} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
