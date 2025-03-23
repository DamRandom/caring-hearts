'use client';

export default function CTA() {
  return (
    <section className="relative py-32 text-center">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-[#363D31] mb-4">Ready to take the next step?</h2>
        <p className="text-lg text-[#363D31] opacity-90 mb-8">
          Let’s start the conversation about how we can support you.
        </p>

        <div className="flex justify-center space-x-6">
          {/* Call Now Button */}
          <a
            href="tel:+1234567890"
            className="inline-block bg-[#A7B79C] text-[#FFFDF8] text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8C9D85] hover:shadow-xl transition-all duration-300"
          >
            Call Now
          </a>

          {/* Message Button */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#A7B79C] text-[#FFFDF8] text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#8C9D85] hover:shadow-xl transition-all duration-300"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
