import { useEffect, useState } from "react";
import { Search, MessageSquare, Award } from "lucide-react";

const services = [
  {
    title: "SEO Services",
    description:
      "Boost your online visibility with our data-driven SEO strategies that deliver measurable results.",
    icon: Search,
    color: "text-blue-500",
    // bgGradient: "bg-gradient-to-br from-blue-50 to-blue-100"
  },
  {
    title: "Social Content",
    description:
      "Engage your audience with compelling social media content that builds brand awareness and loyalty.",
    icon: MessageSquare,
    color: "text-green-500",
    // bgGradient: "bg-gradient-to-br from-green-50 to-green-100"
  },
  {
    title: "Creative Ads",
    description:
      "Convert prospects with eye-catching advertisements designed to capture attention and drive action.",
    icon: Award,
    color: "text-purple-500",
    // bgGradient: "bg-gradient-to-br from-purple-50 to-purple-100"
  },
];

const ServiceCard = ({ title, description, icon: Icon, color, bgGradient, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
      <div 
        className={`p-8 rounded-2xl mb-12 ${bgGradient} shadow-lg transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-6 ${color} bg-white shadow-md`}>
          <Icon size={28} strokeWidth={2} />
        </div>
        
        <h3 className="text-xl leading-normal mb-3 font-bold text-gray-800">
          {title}
        </h3>
        
        <p className="text-gray-600 font-medium">
          {description}
        </p>
        
        <div className={`absolute -bottom-8 -right-8 opacity-10 transform rotate-12`}>
          <Icon size={96} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section
      id="services"
      className="relative py-24 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-6">
        {/* Heading with animation */}
        <header className={`text-center mx-auto mb-16 lg:px-20 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl leading-normal mb-3 font-bold text-gray-800">
            What We <span className="text-blue-600">Do</span>
          </h2>
          
          {/* Animated divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gray-300"></div>
            <div className={`mx-4 p-2 rounded-full bg-blue-50 border border-blue-100 ${isVisible ? 'animate-pulse' : ''}`}>
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          
          <p className="text-gray-600 leading-relaxed font-medium text-xl mx-auto pb-2 max-w-2xl">
            Save time managing advertising &amp; content for your business with our comprehensive solutions.
          </p>
        </header>

        {/* Services Grid */}
        <div className="flex flex-wrap -mx-4 text-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
        
        {/* Call to action button */}
        <div className={`text-center mt-4 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium inline-flex items-center gap-2 group">
            <span>Explore All Services</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}