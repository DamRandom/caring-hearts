import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D8E2C6]">
      <Header />
      <main className="flex-grow p-8 sm:p-20 text-center sm:text-left bg-[#D8E2C6]">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-[#13200A] mb-4">
            Empowering Men Through Support and Care
          </h1>
          <p className="text-lg text-[#13200A]">
            At [Business Name], we are dedicated to providing compassionate care and support for men facing mental health challenges. Our holistic approach focuses on emotional healing, growth, and building a supportive community.
          </p>
        </section>

        {/* Our Services Section */}
        <section className="bg-[#A7B79C] text-[#F5F0E6] mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#FFFDF8] p-6 rounded-lg shadow-lg hover:bg-[#A7B79C] transition duration-300">
              <h3 className="text-xl font-semibold text-[#13200A]">Individual Therapy</h3>
              <p className="text-[#13200A]">
                Personalized therapy sessions designed to provide tailored support for mental health, focusing on emotional well-being.
              </p>
            </div>
            <div className="bg-[#FFFDF8] p-6 rounded-lg shadow-lg hover:bg-[#A7B79C] transition duration-300">
              <h3 className="text-xl font-semibold text-[#13200A]">Group Support</h3>
              <p className="text-[#13200A]">
                Join group sessions for shared experiences, mutual support, and a sense of community among those facing similar challenges.
              </p>
            </div>
            <div className="bg-[#FFFDF8] p-6 rounded-lg shadow-lg hover:bg-[#A7B79C] transition duration-300">
              <h3 className="text-xl font-semibold text-[#13200A]">24/7 Care</h3>
              <p className="text-[#13200A]">
                Around-the-clock care and support from our dedicated team to ensure your well-being and safety at all times.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#F5F0E6] text-[#13200A] py-12 mb-16">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg mb-6">
            Interested in learning more or scheduling a consultation? We are here to help. Reach out to us today.
          </p>
          <a
            href="/contact"
            className="bg-[#A7B79C] text-[#F5F0E6] py-3 px-8 rounded-full text-lg hover:bg-[#7F8D75] transition duration-300"
          >
            Contact Us
          </a>
        </section>

        {/* Philosophy Section */}
        <section className="bg-[#A7B79C] text-[#F5F0E6] mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Philosophy</h2>
          <p className="text-lg">
            We believe in a comprehensive approach to mental health. Our mission is to support both your emotional and physical well-being in a safe, respectful, and empathetic environment.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
