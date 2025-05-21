import { useState, useEffect } from "react";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Jessica Williams",
    position: "Chief Design Officer",
    image: "/api/placeholder/400/500",
    bio: "With over 10 years of experience in UX design, Jessica leads our creative team with innovative solutions that delight our clients and their users.",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Lead Developer",
    image: "/api/placeholder/400/500",
    bio: "Michael specializes in frontend architecture and brings 8 years of experience building scalable applications with modern frameworks.",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    position: "Marketing Strategist",
    image: "/api/placeholder/400/500",
    bio: "Sophia crafts data-driven marketing campaigns that consistently exceed client expectations and deliver measurable results.",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Alexander Kim",
    position: "Product Manager",
    image: "/api/placeholder/400/500",
    bio: "Alex bridges the gap between technical and business teams, ensuring our projects deliver maximum value with minimum friction.",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

const TeamMember = ({ member, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div 
      className={`group relative transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="relative overflow-hidden rounded-xl  border-b-4 border-l-4 border-blue-200 shadow-lg transition-all duration-500 hover:shadow-2xl">
        <div className="relative overflow-hidden aspect-[3/4] pt-4 pl-4 h-[15rem]">
          <img 
            src={member.image} 
            alt={member.name} 
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className=" absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/90 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-white text-center px-8 max-w-xs text-sm">
              {member.bio}
            </p>
          </div>
          
         
        </div>
         <div className="absolute -top-44 right-4 flex flex-col space-y-1 bg-blue-600 p-2 rounded-r-lg transform transition-transform duration-500 group-hover:translate-y-44">
            {/* <a href={member.social.instagram} className="p-2 text-white hover:bg-white hover:text-blue-600 rounded-full transition-colors">
              <Instagram size={18} />
            </a>
            <a href={member.social.facebook} className="p-2 text-white hover:bg-white hover:text-blue-600 rounded-full transition-colors">
              <Facebook size={18} />
            </a>
            <a href={member.social.twitter} className="p-2 text-white hover:bg-white hover:text-blue-600 rounded-full transition-colors">
              <Twitter size={18} />
            </a> */}
            <a href={member.social.linkedin} className="p-2 text-white hover:bg-white hover:text-blue-600 rounded-full transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-blue-900 tracking-wider group-hover:text-blue-600 transition-colors">
            {member.name}
          </h3>
          <span className="block mt-1 text-blue-600 font-medium">
            {member.position}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesToShow = 1; 
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const nextSlide = () => {
    setActiveSlide(prev => (prev + 1) % Math.ceil(teamMembers.length / slidesToShow));
  };
  
  const prevSlide = () => {
    setActiveSlide(prev => 
      prev === 0 
        ? Math.ceil(teamMembers.length / slidesToShow) - 1 
        : prev - 1
    );
  };
  
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-3">Our Talented Team</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Meet the <span className="text-blue-600">Experts</span></h3>
          
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="mx-4 p-2 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            Our diverse team brings together expertise from various disciplines to deliver exceptional results for our clients.
          </p>
        </div>
        
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
        
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div key={member.id} className="min-w-full px-6">
                  <TeamMember member={member} index={index} />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: teamMembers.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSlide === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
 
    </section>
  );
}