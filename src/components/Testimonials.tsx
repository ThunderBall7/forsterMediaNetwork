import { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at Startup",
    message: "This product has completely changed the way we work. Highly recommend it!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO at TechCo",
    message: "Amazing experience, great support and super clean UI!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Alice Brown",
    role: "Marketing Head",
    message: "Very intuitive and easy to use. Our team loves it!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const startAutoSlide = () => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const prevSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary mx-auto rounded-full"></div>
      </div>

      <div className="relative overflow-hidden h-[360px] sm:h-[340px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="min-w-full px-3 py-3 rounded-xl">
              <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 flex flex-col items-center text-center gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full border-4 border-primary/30 shadow-lg"
                />
                <p className="text-gray-600 italic text-lg max-w-2xl">“{item.message}”</p>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                  <span className="text-sm text-gray-400">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10 transition"
          aria-label="Previous testimonial"
        >
          ⟨
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 p-2 rounded-full z-10 transition"
          aria-label="Next testimonial"
        >
          ⟩
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              current === idx ? 'bg-primary scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
