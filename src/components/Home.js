import { MdKeyboardArrowRight } from "react-icons/md";
import heroimage2 from "../assets/heroimage2.jpg";
import { BsBoxFill } from "react-icons/bs";
import heroimage from "../assets/heroimage.jpg";
import img from "../assets/img3.png";
import { FaStar } from "react-icons/fa6";
import client1 from "../assets/male_client.svg";
import client2 from "../assets/female_client.svg";
import { MdError } from "react-icons/md";
import { useState, useRef } from "react";

const Home = () => {
  const [showError, setShowError] = useState(false);
  const [shake, setShake] = useState(false);
  const [showError2, setShowError2] = useState(false);
  const [shake2, setShake2] = useState(false);
  const healingRef = useRef(null);

  const handleBookClick = () => {
    if (showError) {
      setShake(true); // Trigger vibration if already visible
      setTimeout(() => setShake(false), 500); // Remove shake class after animation
    } else {
      setShowError(true); // Show error for first click
    }
  };
  return (
    <div>
      <div className="relative w-full h-[700px] overflow-hidden">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroimage} // Replace with your actual image path
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0 sm:bg-black/30"></div>

        {/* Text Content: Bottom on mobile, center on sm+ */}
        <div
          className="absolute z-10 left-4 sm:left-12 right-4 sm:right-auto text-white 
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
            className={`h-6 mt-4 text-red-500 text-xs font-bold flex items-center transition duration-150 ${
              showError ? "" : "invisible"
            } ${shake ? "animate-shake" : ""}`}
          >
            <MdError className="text-lg mr-2" />
            Sorry! No appointments available currently
          </p>
        </div>
      </div>

      <div className="my-16 px-4 md:px-0" ref={healingRef}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:mx-28 w-full md:w-[550px] my-8">
            <p className="font-bold text-xs uppercase text-center md:text-left">
              Healing
            </p>
            <p className="text-3xl md:text-4xl font-bold text-center md:text-left">
              Let Go Of The Past, Start Building Your Future
            </p>
            <p className="my-5 text-center md:text-left">
              At Vincent Therapies, we provide evidence-based, person-centred
              treatment tailored to your unique needs. Our compassionate
              approach addresses a range of mental health challenges, including
              depression, anxiety, PTSD, and complex trauma.
            </p>

            {/* Features */}
            <div className="flex flex-col md:flex-row my-10">
              <div className="mx-2 md:mx-5 w-full md:w-[300px] mb-6 md:mb-0">
                <p className="font-bold text-center md:text-left">
                  Personalized Care
                </p>
                <p className="my-3 text-center md:text-left">
                  Experience therapy that adapts to your individual mental
                  health journey and goals.
                </p>
              </div>
              <div className="mx-2 md:mx-5 w-full md:w-[300px]">
                <p className="font-bold text-center md:text-left">
                  Evidence-based
                </p>
                <p className="my-3 text-center md:text-left">
                  Utilizing proven methods like CBT and EMDR for effective
                  mental health treatment.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="text-center md:text-left">
              <a href="/services">
                <button className="border-[1px] border-black px-4 py-2 flex items-center mx-auto md:mx-0">
                  Learn More <MdKeyboardArrowRight className="text-xl ml-1" />
                </button>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="mx-auto md:mx-16 mt-10 md:mt-0">
            <img
              src={heroimage2}
              className="rounded shadow-lg w-[400px] md:w-[400px] lg:w-full"
              alt="Therapy visual"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center px-4 py-8">
        <p className="font-bold text-xs">Therapies</p>
        <p className="text-2xl md:text-4xl font-bold my-3 text-center">
          Core Therapeutic Approaches We Offer
        </p>
        <p className="w-full md:w-[70%] lg:w-[50%] my-5 text-center text-sm md:text-base">
          At Vincent Therapies, we specialize in evidence-based treatments
          tailored to your needs. Our core approaches include Cognitive
          Behavioural Therapy (CBT), Eye Movement Desensitization and
          Reprocessing (EMDR), and psychoeducational support.
        </p>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 my-10 w-full px-4">
          <div className="flex flex-col items-center max-w-sm text-center">
            <BsBoxFill className="text-3xl mb-2" />
            <p className="text-xl font-bold mb-2">
              Cognitive Behavioural Therapy (CBT)
            </p>
            <p className="text-sm md:text-base">
              CBT is a structured, goal-oriented therapy that helps you identify
              and change negative thought patterns.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-sm text-center">
            <BsBoxFill className="text-3xl mb-2" />
            <p className="text-xl font-bold mb-2 text-center">
              Eye Movement Desensitization and Reprocessing (EMDR)
            </p>
            <p className="text-sm md:text-base">
              EMDR is an innovative therapy designed to alleviate distress
              associated with traumatic memories.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-sm text-center">
            <BsBoxFill className="text-3xl mb-2" />
            <p className="text-xl font-bold mb-2 text-center">
              Psychoeducational Support for Mental Wellness
            </p>
            <p className="text-sm md:text-base">
              Our psychoeducational support equips you with essential tools and
              knowledge for better mental health.
            </p>
          </div>
        </div>

        <a href="/services">
          <button className="border border-black px-4 py-2 flex items-center text-sm md:text-base hover:bg-black hover:text-white transition duration-300">
            Learn More <MdKeyboardArrowRight className="text-xl ml-1" />
          </button>
        </a>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-20 px-6 lg:px-24">
        {/* Left Text Section (Will show first on mobile) */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <p className="font-bold text-xs">Therapies</p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold my-3 max-w-xl">
            Meet Roshan Vincent: Your Compassionate Therapist
          </p>
        </div>

        {/* Right Description + Buttons */}
        <div className="w-full lg:w-1/2">
          <p className="text-base sm:text-lg lg:text-xl text-justify leading-relaxed lg:px-8">
            Roshan Vincent is a fully accredited Cognitive Behavioural Therapist
            with extensive experience in both NHS and private settings. He is
            dedicated to providing culturally sensitive therapy, ensuring that
            every individual feels understood and supported. With a focus on
            evidence-based practices, Roshan helps clients navigate their mental
            health challenges with compassion and expertise.
          </p>
          <div className="flex flex-col sm:flex-row lg:mx-8 my-10 gap-4">
            <a href="/about">
              <button className="border border-black px-4 py-2 flex items-center justify-center w-full sm:w-auto">
                Learn More
              </button>
            </a>
            <a href="/contact">
              <button className="px-4 py-2 flex items-center justify-center hover:underline w-full sm:w-auto">
                Contact <MdKeyboardArrowRight className="ml-2 text-xl" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-10 px-6">
        <img
          className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-auto object-contain"
          src={img}
          alt="Therapist"
        />
      </div>

      <div className="my-24 px-6 lg:px-16">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold my-3 max-w-xl">
          Customer Testimonials
        </p>
        <p className="my-3 text-base sm:text-lg">
          Experience Shared By Our Clients
        </p>

        <div className="my-16 flex flex-col lg:flex-row justify-center items-stretch gap-10 px-6 lg:px-0">
          {/* Testimonial 1 */}
          <div className="max-w-lg w-full min-h-[400px] p-6 rounded-lg shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-2xl mx-1 text-yellow-500" />
                ))}
              </div>
              <p className="font-semibold mt-5 text-justify leading-relaxed">
                "Amazing. I have been having CBT with RV and he has been patient
                during a very tough time. But has actually helped me a lot with
                how I process my thinking and emotions. Huge compliment for
                Rosh."
              </p>
            </div>
            <div className="mt-8 flex items-center">
              <img
                src={client1}
                className="w-16 h-16 object-contain"
                alt="Client 1"
              />
              <p className="ml-4 font-bold text-2xl sm:text-3xl">Anonymous</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-lg w-full min-h-[400px] p-6 rounded-lg shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-2xl mx-1 text-yellow-500" />
                ))}
              </div>
              <p className="font-semibold mt-5 text-justify leading-relaxed">
                "Rosh has given me lots of techniques to help support and manage
                my anxiety and this has really worked as I now feel much less
                anxiety than I did prior to the sessions. Rosh was very patient
                and really listened and showed empathy and understanding. Thank
                you for all your help and support."
              </p>
            </div>
            <div className="mt-8 flex items-center">
              <img
                src={client2}
                className="w-16 h-16 object-contain"
                alt="Client 2"
              />
              <p className="ml-4 font-bold text-2xl sm:text-3xl">Anonymous</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-24 px-6 lg:px-24">
        {/* Left Text Block */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold my-3 lg:ml-8 max-w-xl text-center lg:text-left">
            Take The First Step
          </p>
        </div>

        {/* Right CTA Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-base sm:text-lg lg:text-xl text-justify lg:px-8">
            Are you ready to prioritize your mental health? Book a consultation
            today to explore our tailored therapies and start your journey
            towards healing.
          </p>

          <div className="flex justify-start my-10 lg:mx-8">
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col sm:flex-row w-full sm:w-auto">
                <button
                  onClick={() => {
                    if (showError2) {
                      setShake2(true);
                      setTimeout(() => setShake2(false), 500);
                    } else {
                      setShowError2(true);
                    }
                  }}
                  className="text-lg font-bold mb-4 sm:mb-0 sm:mr-4 cursor-pointer hover:bg-[#026659] bg-[#4CECD6] text-white px-6 py-2 rounded w-full sm:w-auto"
                >
                  Book Now
                </button>
                <a href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
                    Contact
                  </button>
                </a>
              </div>

              {showError2 && (
                <p
                  className={`mt-4 text-red-600 font-bold flex items-center transition duration-150 ${
                    shake2 ? "animate-shake" : ""
                  }`}
                >
                  <MdError className="text-xl mr-2" />
                  Sorry! No appointments available currently
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
