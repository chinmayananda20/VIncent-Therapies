import "../styles/Home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import heroimage2 from "../assets/heroimage2.jpg";
import { BsBoxFill } from "react-icons/bs";
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
      <div className="hero w-[450px] mx-28 my-40 text-white ">
        <p className="text-5xl font-bold ">
          Transform Your Mental Health Journey Today
        </p>
        <p className="my-5">
          At Vincent Therapies, we speacilize in evidence-based treatements
          tailored to your unique needs. Led by Roshan Vincent, our
          compassionate approach empowers you to overcome challenges and achieve
          lasting well-being.
        </p>
        <div className="flex flex-col items-start">
          <div className="flex">
            <button
              onClick={() => {
                if (showError) {
                  setShake(true);
                  setTimeout(() => setShake(false), 500);
                } else {
                  setShowError(true);
                }
              }}
              className="text-lg font-bold cursor-pointer hover:bg-[#026659] bg-[#4CECD6] text-white px-6 py-2 rounded-lg"
            >
              Book Now
            </button>
            <button
              className="mx-5 text-lg font-bold cursor-pointer bg-white text-black px-6 py-2 rounded-lg hover:bg-[silver]"
              onClick={() =>
                healingRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>
          </div>

          {/* Reserve space for message, toggle visibility instead of presence */}
          <p
            className={`h-6 mt-2 text-red-600 font-bold flex items-center transition duration-150 ${
              showError ? "" : "invisible"
            } ${shake ? "animate-shake" : ""}`}
          >
            <MdError className="text-xl mr-2" />
            Sorry! No appointments available currently
          </p>
        </div>
      </div>

      <div className="my-16 " ref={healingRef}>
        <div className="flex items-center">
          <div className="mx-28 w-[550px] my-16 ">
            <p className="font-bold text-xs">Healing</p>
            <p className="text-4xl font-bold">
              Let Go Of The Past, Start Building Your Future
            </p>
            <p className="my-5">
              At Vincent Therapies, we provide evidence-based, person-centred
              treatement tailored to your unique needs. Our compassionate
              aproach addresses a range of mental health challenges, including
              depression, anxiety, PTSD, and complex trauma.
            </p>
            <div className="flex my-10 ">
              <div className="mx-5 w-[300px]">
                <p className="font-bold"> Personalized Care</p>
                <p className="my-3">
                  Experience therapy that adapts to your individual mental
                  health journey and goals
                </p>
              </div>
              <div className="mx-5 w-[300px]">
                <p className="font-bold"> Evidence-based</p>
                <p className="my-3">
                  Utilizing proven methods like CBT and EMDR for effective
                  mental health treatement.
                </p>
              </div>
            </div>
            <a href="/services">
              <button className="border-[1px] border-black p-2 flex items-center">
                Learn More <MdKeyboardArrowRight className="text-xl" />
              </button>
            </a>
          </div>
          <div className="mx-16">
            <img src={heroimage2} className="rounded shadow-lg" />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center p-4">
        <p className="font-bold text-xs">Therapies</p>
        <p className="text-4xl font-bold my-3">
          Core Therapautic Approaches We Offer
        </p>
        <p className="w-[50%] my-5 text-center">
          At Vincent Therapies, we specialize in evidence-based treatements
          tailored to your needs. Our core approaches include Cognitive
          Behavioural Therapy (CBT), Eye Movement Desensitization and
          Reprocessing (EMDR), and psychoeducational support.
        </p>
        <div className="flex mx-16 my-14">
          <div className="flex flex-col items-center mx-5">
            <BsBoxFill className="text-3xl" />
            <p className="text-3xl font-bold my-3">
              Cognitive Behavioural Therapy (CBT)
            </p>
            <p className="text-center">
              CBT is a structured, goal-oriented therapy that helps you identify
              and change negative thought patterns
            </p>
          </div>

          <div className="flex flex-col items-center mx-5">
            <BsBoxFill className="text-3xl" />
            <p className="text-3xl text-center font-bold my-3">
              Eye Movement Desensitization and Reprocessing (EMDR)
            </p>
            <p className="text-center">
              EMDR is an innovative therapy designed to alleviate distress
              associated with traumatic memories
            </p>
          </div>

          <div className="flex flex-col items-center mx-5">
            <BsBoxFill className="text-3xl" />
            <p className="text-3xl text-center font-bold my-3">
              Psychoeducational Support for Mental Wellness
            </p>
            <p className="text-center">
              Our psychoeducational support equips you with essential tools and
              knowledge for better mental health
            </p>
          </div>
        </div>

        <a href="/services">
          <button className="border-[1px] border-black p-2 flex items-center">
            Learn More <MdKeyboardArrowRight className="text-xl" />
          </button>
        </a>
      </div>

      <div className="flex  justify-around  mt-28">
        <div>
          <p className="font-bold text-xs">Therapies</p>
          <p className="text-5xl font-bold my-3 w-[600px]">
            Meet Roshan Vincent: Your Compassionate Therapist
          </p>
        </div>
        <div className="w-[50%]">
          <p className="mx-16 text-xl text-justify leading-relaxed">
            Roshan Vincent is a fully accredited Cognitive Behavioural Therapist
            with extensive experience in both NHS and private settiings. He is
            dedicated to providing culturally sensitive therapy, ensuring that
            every individual feels understood and supported. With a focus on
            evidence-based practices, Roshan helps clients navigate their mental
            health challenges with compassion and expertise.
          </p>
          <div className="flex mx-16 my-14">
            <a href="/about">
              <button className="border-[1px] mr-10 border-black p-2 flex items-center">
                Learn More
              </button>
            </a>
            <a href="/contact">
              <button className=" p-2 flex items-center hover:underline">
                Contact <MdKeyboardArrowRight className="text-xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img className=" h-[700px] text-center" src={img} />
      </div>

      <div className="my-24 mx-16">
        <p className="text-5xl font-bold my-3 w-[600px]">
          Customer Testimonials
        </p>
        <p className="my-5">Experince Shared By Our Clients</p>
        <div className="my-16 flex justify-center">
          <div>
            <div className="flex">
              <FaStar className="text-2xl mx-1" />
              <FaStar className="text-2xl mx-1" />
              <FaStar className="text-2xl mx-1" />
              <FaStar className="text-2xl mx-1" />
              <FaStar className="text-2xl mx-1" />
            </div>
            <p className="font-bold w-[80%] mt-5 text-justify leading-relaxed ">
              "Amazing. I have been having cbt with RV and he has been patient
              during a very tough time. But has actually helped me a lot with
              how I process my thinking and emotions. Huge compliment for Rosh"
            </p>
            <div className="my-5 items-center flex">
              <img src={client1} className="w-[100px]" />
              <p className="mx-5 font-bold text-3xl">Anonymous</p>
            </div>
          </div>

          <div>
            <div className="flex">
              <FaStar className="text-2xl mx-1" />
              <FaStar className="text-2xl mx-1" />
              <FaStar className="text-2xl mx-1" />
              <FaStar className="text-2xl mx-1" />
              <FaStar className="text-2xl mx-1" />
            </div>
            <p className="font-bold w-[80%] mt-5 text-justify leading-relaxed">
              "Rosh has given me lots of techniques to help support and manage
              my anxiety and this has really worked as I know feel much less
              anxiety than I did prior to the sessions. Rosh was very patient
              and really listened and showed empathy and understanding. Thank
              you for all your help and support. "
            </p>
            <div className="my-5 items-center flex">
              <img src={client2} className="w-[100px] center" />
              <p className="mx-5 font-bold text-3xl">Anonymous</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  justify-around  mt-28">
        <div>
          <p className="text-5xl font-bold mx-14 my-3 w-[600px]">
            Take The First Step
          </p>
        </div>
        <div className="w-[50%]">
          <p className="mx-16 text-xl">
            Are you ready to prioritize your mental health? Book a consultation
            today to explore our tailored therapies and start your journey
            towards healing.
          </p>
          <div className="flex mx-16 my-14">
            <div className="flex flex-col items-start">
              <div className="flex">
                <button
                  onClick={() => {
                    if (showError2) {
                      setShake2(true);
                      setTimeout(() => setShake2(false), 500);
                    } else {
                      setShowError2(true);
                    }
                  }}
                  className="text-lg font-bold mx-3 cursor-pointer hover:bg-[#026659] bg-[#4CECD6] text-white px-6 py-2"
                >
                  Book Now
                </button>
                <a href="/contact">
                  <button className="border-[1px] mr-10 mx-3 border-black p-2 flex px-6 items-center hover:bg-black hover:text-white">
                    Contact
                  </button>
                </a>
              </div>
              {showError2 && (
                <p
                  className={`mt-2 ml-3 text-red-600 font-bold flex items-center transition duration-150 ${
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
