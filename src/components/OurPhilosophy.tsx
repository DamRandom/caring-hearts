'use client';

export default function Philosophy() {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-[#FFFDF8]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2C352A] mb-6 drop-shadow-md">
          Our Philosophy
        </h2>
        <p className="text-lg text-[#2C352A] opacity-90 mb-12">
          At Caring Hearts, we believe in offering care that is rooted in empathy, respect, and understanding.
        </p>

        {/* Philosophy Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-[#A7B79C] rounded-full shadow-lg mb-4">
              {/* Empathy Icon */}
              <i className="fas fa-heart text-white text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#363D31]">Empathy</h3>
            <p className="text-sm text-[#363D31] opacity-80">
              We listen and understand the unique needs of every individual, ensuring personalized care.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-[#A7B79C] rounded-full shadow-lg mb-4">
              {/* Respect Icon */}
              <i className="fas fa-handshake text-white text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#363D31]">Respect</h3>
            <p className="text-sm text-[#363D31] opacity-80">
              Every resident is treated with dignity, honoring their individuality and preferences.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-[#A7B79C] rounded-full shadow-lg mb-4">
              {/* Individualized Care Icon */}
              <i className="fas fa-user-md text-white text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#363D31]">Individualized Care</h3>
            <p className="text-sm text-[#363D31] opacity-80">
              Tailored care plans designed to meet the physical, emotional, and mental needs of each resident.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-lg text-[#363D31] opacity-90 mt-12 max-w-4xl mx-auto">
          Our commitment to these values creates an environment where residents feel supported, valued, and empowered. We are dedicated to fostering healing, growth, and well-being, ensuring that each individual receives the highest quality care.
        </p>
      </div>
    </section>
  );
}
