import React, { useState, useEffect, useRef } from "react";
import profile from '../assets/profile-user.png';

const slides = [
  {
    img: profile,
    text: "It allowed me the space to come to terms with my own anxieties with the support of Roshan. The man is worth his weight in gold.",
  },
  {
    img: profile,
    text: "Amazing. I have been having CBT with RV and he has been patient during a very tough time. He helped me a lot with how I process my thinking and emotions. Huge compliment for Rosh.",
  },
  {
    img: profile,
    text: "Rosh has given me lots of techniques to manage my anxiety. I now feel much less anxious than I did before the sessions. He was very patient and truly listened. Thank you!",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[70%] overflow-hidden h-[350px] mx-auto  ">
      {/* Slide Wrapper */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full flex flex-col items-center justify-center text-center px-8"
          >
            {/* Profile Image */}
            <img
              src={slide.img}
              alt={`Slide ${index}`}
              className="h-16 w-16 object-cover rounded-full mb-5 shadow-md"
            />

            {/* Text */}
            <p className="text-lg leading-relaxed text-gray-800 font-medium max-w-2xl">
              {slide.text}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-80 p-2 rounded-full shadow"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-80 p-2 rounded-full shadow"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
