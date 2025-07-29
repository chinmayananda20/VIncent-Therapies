
import heroimage from "../assets/heroimage.jpg";
import img from "../assets/img3.png";
import { MdError } from "react-icons/md";
import { useState, useRef } from "react";
import HealingSection from "./Home_components/HealingSection";
import TherapySection from "./Home_components/TherapySection";
import MeetRoshanSection from "./Home_components/MeetRoshanSection";
import TestimonialsSection from './Home_components/TestimonialsSection';
import CTASection from "./Home_components/CTASection";
const Home = () => {
  const [showError, setShowError] = useState(false);
  const [shake, setShake] = useState(false);
  const [showError2, setShowError2] = useState(false);
  const [shake2, setShake2] = useState(false);
  const healingRef = useRef(null);

  
  return (
    <div>
      <div className="relative w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroimage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/40 z-0 sm:bg-black/30"></div>

        <div
          className="absolute z-10 left-4 sm:left-12 right-4 sm:right-auto text-white  animate__animated animate__backInLeft
                  bottom-8 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto max-w-[90%] sm:max-w-md"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-4">
            Transform Your Mental Health Journey Today
          </h1>
          <p className="text-sm sm:text-base mb-6">
            At Vincent Therapies, we specialize in evidence-based treatments
            tailored to your unique needs. Led by Roshan Vincent, our
            compassionate approach empowers you to overcome challenges and
            achieve lasting well-being.
          </p>

          <div className="flex flex-row gap-3 mt-4">
            <button
              onClick={() => {
                if (showError) {
                  setShake(true);
                  setTimeout(() => setShake(false), 500);
                } else {
                  setShowError(true);
                }
              }}
              className="text-sm font-bold cursor-pointer hover:bg-[#026659] bg-[#4CECD6] text-white px-4 sm:px-6 py-2 rounded-lg"
            >
              Book Now
            </button>
            <button
              className="text-sm font-bold cursor-pointer bg-white text-black px-4 sm:px-6 py-2 rounded-lg hover:bg-silver"
              onClick={() =>
                healingRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>
          </div>

          <p
            className={`h-6 mt-2 text-red-500 text-xl font-bold flex items-center transition duration-150 ${
              showError ? "" : "invisible"
            } ${shake ? "animate-shake" : ""}`}
          >
            <MdError className="text-lg mr-2" />
            Sorry! No appointments available currently
          </p>
        </div>
      </div>

      <HealingSection healingRef={healingRef}/>
      <TherapySection />
      <MeetRoshanSection />

      <div className="flex justify-center mt-10 px-6">
        <img
          className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-auto object-contain"
          src={img}
          alt="Therapist"
        />
      </div>

      <TestimonialsSection/>

      <CTASection showError2={showError2} shake2={shake2} setShowError2={setShowError2} setShake2={setShake2}/>
    </div>
  );
};

export default Home;
