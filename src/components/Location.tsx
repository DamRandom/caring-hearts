'use client';

import Image from "next/image";
import { useState } from "react";

export default function Location() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative py-16 px-6 sm:px-12 lg:px-20  ">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center">
        {/* Left: Map Section */}
        <div className="relative w-full sm:w-1/2 h-96 flex justify-center items-center">
          {/* Semicircle Background (aesthetic background for the map) */}
          <div className="absolute w-[130%] h-[130%] bg-[#A7B79C] rounded-full -top-10 -left-16 opacity-80"></div>

          {/* Map Image with a subtle shadow and border */}
          <div className="relative w-5/6 h-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/map.png" // Reemplaza con la captura de Google Maps
              alt="Our Location"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Pin Marker (Using custom icon) */}
          <div
            className="absolute w-8 h-8 cursor-pointer animate-bounce"
            style={{ top: "50%", left: "50%" }}
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <Image 
              src="/icons/location.png" // El icono del pin
              alt="Location Pin"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Hover Info */}
          {showInfo && (
            <div className="absolute top-[55%] left-[60%] w-40 bg-white shadow-lg p-2 rounded-md text-center">
              <Image
                src="/images/house-thumbnail.jpg" // Imagen pequeña de la casa
                alt="Our Home"
                width={150}
                height={100}
                className="rounded-md"
              />
              <p className="text-sm text-[#363D31] mt-2">7914 Flowerfild dr 33615</p>
            </div>
          )}
        </div>

        {/* Right: Description */}
        <div className="sm:w-1/2 text-center sm:text-left mt-10 sm:mt-0 relative z-10">
          <h2 className="text-4xl font-bold text-[#363D31] drop-shadow-md">
            Find Us Here
          </h2>
          <p className="text-lg text-[#363D31] opacity-90 mt-4">
            Nestled in a peaceful neighborhood, our home provides a tranquil setting ideal for healing and growth. Conveniently located near essential services for optimal care and support.
          </p>
          <a
            href="https://maps.google.com/?q=1234+Serenity+Lane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#A7B79C] text-[#FFFDF8] text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8C9D85] hover:shadow-xl transition-all duration-300"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
