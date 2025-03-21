import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D8E2C6]">
      <Header />
      <main className="flex-grow p-8 sm:p-20 text-center sm:text-left bg-[#D8E2C6]">
        <Hero />
      </main>
        <AboutUs />
        {/* Otras secciones aquí */}
      <Footer />
    </div>
  );
}
