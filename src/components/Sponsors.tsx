import { useState } from 'react';

const CaseStudyCard = ({ title, author, date, summary, tags, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg relative transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : ''
      }}
    >
      {/* "View Case Study" Link */}
      <div className="flex justify-end">
        <a href={link} className="text-red-500 font-bold mb-4 hover:underline">View Case Study</a>
      </div>
      
      {/* Title and Metadata */}
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">By {author} | {date}</p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className={`bg-${tag.bg} text-${tag.text} text-xs font-semibold px-2 py-1 rounded-full`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      
      {/* Summary */}
      <p className="text-gray-600 mb-6">{summary}</p>
    </div>
  );
};

const caseStudies = [
  {
    title: 'How Acme Inc. Generated 120 Qualified Leads in 30 Days',
    author: 'Jane Leadgen',
    date: 'May 10, 2025',
    summary: 'We helped Acme Inc. identify and reach their ideal customers using multi-channel outreach, resulting in a 32% increase in SQLs.',
    link: '#',
    tags: [
      { label: 'B2B', bg: 'blue-100', text: 'blue-500' },
      { label: 'Lead Generation', bg: 'green-100', text: 'green-500' }
    ]
  },
  {
    title: 'Boosting Demo Bookings for SaaS Co. by 65%',
    author: 'John Results',
    date: 'May 12, 2025',
    summary: 'Using targeted LinkedIn outreach and email sequencing, we increased demo bookings for a SaaS firm by 65% in just two months.',
    link: '#',
    tags: [
      { label: 'SaaS', bg: 'yellow-100', text: 'yellow-500' },
      { label: 'Email Outreach', bg: 'red-100', text: 'red-500' }
    ]
  }
];

export const Sponsors = () => {
  return (
    <div className="container mx-auto bg-gray-100 p-6 relative">
      <div className="absolute -top-3 left-8 bg-green-500 text-white font-bold py-2 px-4 shadow-md z-10">
        <span className="text-sm tracking-wider">CASE STUDIES</span>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard key={index} {...caseStudy} />
        ))}
      </div>
    </div>
  );
}