"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000 });
    });
  }, []);

  return (
    <section className="py-12 px-6 sm:px-12 lg:px-20 text-[#363D31]">
      <div className="max-w-5xl mx-auto text-center sm:text-left" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Who We Are
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          At <strong>Caring Hearts Supportive Service</strong>, we are more than just a care home—we are a sanctuary for men facing mental health challenges. Our mission is to provide a supportive and structured environment where individuals can heal, grow, and regain their independence.
          <br />
          <br />
          Founded on the belief that every person deserves dignity and compassion, our team is committed to offering personalized care tailored to each resident’s unique needs. Through a combination of stability, guidance, and community, we create a space where healing becomes possible.
          <br />
          <br />
          We don’t just provide care—we build a foundation for a better future.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
