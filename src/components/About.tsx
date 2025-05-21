import { useEffect, useState } from "react";
import {
  CheckCircle,
  Clock,
  ShieldHalf,
  Target,
  ChevronRight
} from "lucide-react";

const STATS = [
  {
    title: "+300",
    desc: "We have successfully completed a total of 300+ projects",
    Icon: CheckCircle,
    iconColor: "text-green-500",
    bgGradient: "bg-gradient-to-br from-green-50 to-green-50"
  },
  {
    title: "100K",
    desc: "We've gathered dozens of reviews from the clients and 100k+ from their users",
    Icon: Target,
    iconColor: "text-blue-500",
    bgGradient: "bg-gradient-to-br from-blue-50 to-blue-50"
  },
  {
    title: "+10",
    desc: "Years of experience",
    Icon: Clock,
    iconColor: "text-amber-500",
    bgGradient: "bg-gradient-to-br from-amber-50 to-amber-50"
  },
  {
    title: "+280",
    desc: "Team members all over the world",
    Icon: ShieldHalf,
    iconColor: "text-purple-500",
    bgGradient: "bg-gradient-to-br from-purple-50 to-purple-50"
  }
];

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const startValue = 0;
    const endValue = parseInt(end.replace(/[^0-9]/g, ''));
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return end.startsWith('+') ? `+${count}` : `${count}K`;
};

const StatCard = ({ title, desc, Icon, iconColor, bgGradient, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedValue = useCounter(title);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div 
      className={`${bgGradient} rounded-2xl p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${iconColor} bg-white shadow-md`}>
            <Icon className="w-6 h-6" />
          </div>
          <h4 className="text-4xl font-bold text-gray-800 mb-2">{animatedValue}</h4>
          <p className="text-gray-600 font-medium">{desc}</p>
        </div>
        <div className={`absolute -bottom-6 -right-6 opacity-10 transform rotate-12`}>
          <Icon className="w-32 h-32" />
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 font-sans">
      <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-blue-600 mb-4 text-lg font-semibold tracking-wide uppercase">
          — About Us
        </h2>
        
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-12 gap-6">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            We Strive to <span className="text-blue-600">Innovate</span>
          </h1>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <span className="font-medium">Become a Client</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16" />
        
        <h3 className="text-gray-700 text-xl font-semibold mb-8">
          Our Impact by the Numbers
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <StatCard key={idx} {...stat} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}