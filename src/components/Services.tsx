import {
    FaUserNurse,
    FaUtensils,
    FaBroom,
    FaHandsHelping,
    FaPills,
    FaPalette,
  } from "react-icons/fa";
  import Image from "next/image";
  
  const services = [
    {
      title: "24/7 Nursing Care",
      description: "Round-the-clock care by professional nurses to ensure safety and well-being.",
      icon: <FaUserNurse size={30} className="text-[#FFFDF8]" />,
      image: "/images/nursing-care.jpg",
    },
    {
      title: "Nutritious Meals",
      description: "Balanced and personalized meals to support physical and mental health.",
      icon: <FaUtensils size={30} className="text-[#FFFDF8]" />,
      image: "/images/nutritious-meals.jpg",
    },
    {
      title: "Daily Housekeeping",
      description: "A clean and organized living space to promote a healthy environment.",
      icon: <FaBroom size={30} className="text-[#FFFDF8]" />,
      image: "/images/daily-housekeeping.jpg",
    },
    {
      title: "Emotional Support",
      description: "Individual and group therapy sessions to foster emotional well-being.",
      icon: <FaHandsHelping size={30} className="text-[#FFFDF8]" />,
      image: "/images/emotional-support.jpg",
    },
    {
      title: "Medication Management",
      description: "Proper administration and monitoring of prescribed medications.",
      icon: <FaPills size={30} className="text-[#FFFDF8]" />,
      image: "/images/medication-management.jpg",
    },
    {
      title: "Recreational Activities",
      description: "Engaging activities to stimulate the mind and encourage social interaction.",
      icon: <FaPalette size={30} className="text-[#FFFDF8]" />,
      image: "/images/recreational-activities.jpg",
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="py-16 px-6 sm:px-12 lg:px-20 bg-[#FFFDF8]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2C352A] mb-6 drop-shadow-md">
            Our Services
          </h2>
          <p className="text-lg text-[#2C352A] opacity-90 mb-12">
            We provide comprehensive support tailored to the needs of our residents, ensuring a safe and nurturing environment.
          </p>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative w-full h-56">
                {/* Card container */}
                <div className="absolute inset-0 w-full h-full rounded-lg shadow-xl overflow-hidden transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Card with image */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black bg-opacity-40 group-hover:bg-transparent transition-all duration-500">
                      <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                    </div>
                  </div>
  
                  {/* Card content (hidden initially, shown on hover) */}
                  <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-500 group-hover:bg-transparent group-hover:opacity-0 group-hover:text-transparent">
                    <div className="relative z-10 p-4 text-center bg-[#A7B79C] opacity-80 shadow-xl group-hover:opacity-0 group-hover:bg-transparent flex flex-col items-center transition-opacity duration-300 ease-in-out">
                      {service.icon}
                      <h3 className="text-xl font-semibold text-[#FFFDF8] mt-4">{service.title}</h3>
                      <p className="text-[#FFFDF8] opacity-90 mt-2">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  