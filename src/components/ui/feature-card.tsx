import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconBgColor?: string;
  cardBgColor?: string;
}

const FeatureCard = ({ icon, title, description, className, iconBgColor = "bg-primary/10", cardBgColor = "bg-white" }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col p-6 md:p-8 rounded-2xl transition-all duration-500",
        `${cardBgColor} dark:bg-slate-800 shadow-sm hover:shadow-xl`,
        "border border-slate-100 dark:border-slate-700",
        "hover:border-slate-200 dark:hover:border-slate-600",
        "hover:-translate-y-2",
        className
      )}
    >
      <div className={cn(
        "mb-5 rounded-full p-3 w-14 h-14 flex items-center justify-center text-primary",
        iconBgColor
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        {description}
      </p>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
    </div>
  );
};

export default FeatureCard;
