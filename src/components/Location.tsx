'use client';

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Location() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000 }); 
    });
  }, []);

  return (
    <section className="relative py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center">
        {/* Left: Map Section */}
        <div
          className="relative w-full sm:w-1/2 h-96 flex justify-center items-center mb-8 sm:mb-0"
          data-aos="fade-up"
        >
          <div className="absolute w-[130%] h-[130%] bg-[#A7B79C] rounded-full -top-10 -left-16 opacity-80"></div>
          
          {/* Embed Google Maps iframe */}
          <div className="relative w-5/6 h-full overflow-hidden rounded-2xl" data-aos="fade-up" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.1178834194475!2d-82.57727872546745!3d28.020872611595326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ea11bb219903%3A0x15d08e1aab95a088!2s7914%20Flowerfield%20Dr%2C%20Tampa%2C%20FL%2033615!5e0!3m2!1sen!2sus!4v1742700828039!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right: Description */}
        <div
          className="sm:w-1/2 text-center sm:text-left relative z-10"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h2 className="text-4xl font-bold text-[#363D31]">
            Find Us Here
          </h2>
          <p className="text-lg text-[#363D31] opacity-90 mt-4">
            Nestled in a peaceful neighborhood, our home provides a tranquil setting ideal for healing and growth. Conveniently located near essential services for optimal care and support.
          </p>
          <a
            href="https://maps.google.com/?q=7914+Flowerfild+dr+33615"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#A7B79C] text-[#FFFDF8] text-lg font-semibold py-3 px-8 rounded-full hover:bg-[#8C9D85] transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
