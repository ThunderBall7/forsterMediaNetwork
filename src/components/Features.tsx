import FeatureCard from "./ui/feature-card";
import { BadgeCheck, Shield, Zap, Clock, Users, Star } from "lucide-react";

export const Features= () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized performance ensures your users experience seamless interactions without any delay.",
      iconBgColor: "bg-[#FEC6A1]/20",
      cardBgColor: "bg-[#FEC6A1]/5"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure By Design",
      description: "Built with security in mind at every level, protecting your data and your users' privacy.",
      iconBgColor: "bg-[#D3E4FD]/30",
      cardBgColor: "bg-[#D3E4FD]/5"
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Crafted with attention to detail and built to the highest standards of modern development.",
      iconBgColor: "bg-[#F2FCE2]/40",
      cardBgColor: "bg-[#F2FCE2]/5"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Multiple users can work together seamlessly with built-in collaboration features.",
      iconBgColor: "bg-[#FEF7CD]/30",
      cardBgColor: "bg-[#FEF7CD]/5"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Saving",
      description: "Automated workflows and intuitive interfaces help you accomplish more in less time.",
      iconBgColor: "bg-[#E5DEFF]/30",
      cardBgColor: "bg-[#E5DEFF]/5"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Customer Favorite",
      description: "Highly rated by users who love the simplicity and power of our solutions.",
      iconBgColor: "bg-[#FFDEE2]/30",
      cardBgColor: "bg-[#FFDEE2]/5"
    }
  ];

  return (
    <section className="py-24 px-4 overflow-hidden bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/90">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-primary/70 leading-tight">
            Powerful Features
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Discover why our solution stands out from the rest with these carefully crafted features designed to elevate your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconBgColor={feature.iconBgColor}
                cardBgColor={feature.cardBgColor}
              />
            </div>
          ))}
        </div>

        {/* <div className="mt-20 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium text-sm"
          >
            Explore All Features
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};
