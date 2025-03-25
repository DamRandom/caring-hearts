'use client';

import { useEffect } from "react";
import "aos/dist/aos.css"; 
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000 }); 
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F0E6] to-[#FFFDF8] px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl w-full flex flex-col-reverse sm:flex-row items-center justify-between">
        {/* Text Content */}
        <div
          className="sm:w-1/2 text-center sm:text-left"
          data-aos="fade-up"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#363D31] drop-shadow-md mb-6">
            Providing Comfort & Care for Every Mind
          </h1>
          <p className="text-lg text-[#363D31] opacity-90 mb-6" data-aos="fade-up" data-aos-delay="200">
            At <strong>Caring Hearts Supportive Service</strong>, we offer a safe and welcoming home for men living with mental health challenges. Our dedicated team provides personalized support, fostering growth, stability, and a sense of belonging.
          </p>
          <a
            href="#about"
            className="inline-block bg-[#A7B79C] text-[#FFFDF8] text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8C9D85] hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
          </a>
        </div>

        {/* Image */}
        <div
          className="sm:w-1/2 flex justify-center mt-6 sm:mt-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Supportive care environment"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
