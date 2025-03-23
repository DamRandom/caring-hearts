import { FaHeart, FaUserFriends, FaBrain, FaBed, FaSmile } from "react-icons/fa";

const benefits = [
  {
    title: "Safe & Supportive Environment",
    description: "A structured space that promotes stability and well-being.",
    icon: <FaHeart size={30} className="text-[#FFFDF8]" />,
  },
  {
    title: "Strong Community",
    description: "Building friendships and connections that foster personal growth.",
    icon: <FaUserFriends size={30} className="text-[#FFFDF8]" />,
  },
  {
    title: "Mental Health Focus",
    description: "Professional support to improve mental resilience and stability.",
    icon: <FaBrain size={30} className="text-[#FFFDF8]" />,
  },
  {
    title: "Comfortable Living",
    description: "A well-maintained home with all necessary amenities.",
    icon: <FaBed size={30} className="text-[#FFFDF8]" />,
  },
  {
    title: "Quality of Life",
    description: "Opportunities to engage in meaningful and enjoyable activities.",
    icon: <FaSmile size={30} className="text-[#FFFDF8]" />,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 px-6 sm:px-12 lg:px-20 bg-[#FFFDF8]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2C352A] mb-12 drop-shadow-md">
          Benefits of Our Care
        </h2>

        {/* Timeline Container */}
        <div className="relative flex items-center justify-between max-w-5xl mx-auto">
          {/* Line */}
          <div className="absolute w-full h-1 bg-[#A7B79C] top-1/2 transform -translate-y-1/2"></div>

          {/* Timeline Items */}
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group w-1/5 text-center">
              {/* Icon Container */}
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center bg-[#A7B79C] rounded-full shadow-lg transition-transform transform group-hover:scale-110">
                {benefit.icon}
              </div>

              {/* Tooltip-like description (hidden until hover) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[4.5rem] bg-[#A7B79C] text-[#FFFDF8] text-sm p-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40">
                <strong>{benefit.title}</strong>
                <p className="text-xs mt-1 opacity-90">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
