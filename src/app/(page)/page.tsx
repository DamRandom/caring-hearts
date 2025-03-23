import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import OurPhilosophy from "@/components/OurPhilosophy";
import Location from "@/components/Location";
import FinalCalltoAction from "@/components/FinalCalltoAction";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8 sm:p-20 text-center sm:text-left bg-[#D8E2C6]">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="philosophy">
          <OurPhilosophy />
        </section>
        <section id="location">
          <Location />
        </section>
        <section id="contact">
          <FinalCalltoAction />
        </section>
      </main>
      <Footer />
    </div>
  );
}
