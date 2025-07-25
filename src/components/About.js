import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import accreditation from "../assets/accreditstiin.png";
import acc_logo from "../assets/acc logo.png";
import ImageSlider from "../components/ImageSlider";
import { useState } from "react";
import { MdError } from "react-icons/md";
import roshan2 from "../assets/roshan2.png";
import roshan3 from "../assets/roshan3.jpeg";
import testn from "../assets/testn .png";
const About = () => {
  const [aboutError, setAboutError] = useState(false);
  const [aboutShake, setAboutShake] = useState(false);

  return (
    <div>
      <div className="w-full min-h-[640px] flex flex-col lg:flex-row items-center justify-between bg-[#FDFAF3] relative pb-4">
        {/* Background Shape with Image */}
        <div className="absolute bg-[rgb(217,241,251)] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full top-[40px] left-[50%] lg:left-[3%] transform -translate-x-1/2 lg:translate-x-0 z-0 flex justify-center items-center">
          <img
            src={roshan2}
            alt="Roshan Vincent"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Foreground Box with Text */}
        <div className="z-10 w-[90%] sm:w-[85%] lg:w-[55%] mt-[320px] lg:mt-0 lg:ml-[30%] bg-white shadow-2xl rounded-lg p-6 sm:p-10">
          <p className="text-center text-xl sm:text-2xl lg:text-3xl font-bold font-quicksand tracking-wide animate__animated animate__zoomIn">
            Therapist Rohan Vincent
          </p>
          <div className="text-center mt-6 sm:mt-10">
            <p className="font-light text-base sm:text-lg animate__animated animate__zoomIn">
              Empowering Change Through Evidence-Based Therapy – Accredited CBT
              & EMDR Specialist Supporting Mental Wellness with Compassion and
              Expertise.
            </p>
            <p className="mt-6 sm:mt-10 text-base sm:text-lg animate__animated animate__zoomIn">
              Helping Minds Heal, One Thought at a Time.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col items-center">
              <button
                onClick={() => {
                  if (aboutError) {
                    setAboutShake(true);
                    setTimeout(() => setAboutShake(false), 500);
                  } else {
                    setAboutError(true);
                  }
                }}
                className="cursor-pointer transition-all animate__animated animate__zoomIn bg-[#4CECD6] text-black px-6 py-2 rounded-lg border-[#026659] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Book a Session Now
              </button>
              <p
                className={`h-6 mt-2 text-red-600 font-bold flex items-center transition duration-150 ${
                  aboutError ? "" : "invisible"
                } ${aboutShake ? "animate-shake" : ""}`}
              >
                <MdError className="text-xl mr-2" />
                Sorry! No appointments available currently
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[25%] mt-10 lg:mt-0 flex flex-row lg:flex-col items-center justify-center lg:items-start gap-4 lg:gap-6 lg:pl-10 z-10">
          {/* LinkedIn */}
          <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
            <div className="shadow-md bg-[#4CECD6] rounded-xl cursor-pointer transition-all duration-300 animate__animated animate__zoomIn flex items-center justify-center  lg:px-6 h-[56px] lg:h-[80px] min-w-[56px] lg:min-w-[80px]">
              <FaLinkedin className="text-2xl lg:text-4xl text-white transition-all duration-300" />
              <a
                href="https://www.linkedin.com/in/roshan-vincent-3068695b"
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden"
              >
                <span className="ml-2 text-[0px] group-hover:text-sm lg:group-hover:text-base text-white transition-all duration-300 whitespace-nowrap">
                  Check Out My Profile
                </span>
              </a>
            </div>
          </div>

          {/* Mail */}
          <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
            <div className="shadow-md bg-[#4CECD6] rounded-xl cursor-pointer transition-all duration-300 animate__animated animate__zoomIn flex items-center justify-center px-4 lg:px-6 h-[56px] lg:h-[80px] min-w-[56px] lg:min-w-[80px]">
              <IoIosMail className="text-2xl lg:text-4xl text-white transition-all duration-300" />
              <a
                href="mailto:roshan.vincent@behavioraltherapist.co.uk"
                className="overflow-hidden"
              >
                <span className="ml-2 text-[0px] group-hover:text-sm lg:group-hover:text-base text-white transition-all duration-300 whitespace-nowrap">
                  Contact Me
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center mt-16 mb-10 text-4xl sm:text-5xl font-cursive px-4">
  Hello There, Glad To Meet You
</h2>

<div className="w-full flex flex-col lg:flex-row items-center lg:items-center px-6 lg:px-16">
  {/* Text Section */}
  <div className="w-full lg:w-3/5 min-h-[500px] my-6 lg:my-24 flex flex-col justify-center">
    <div className="p-6">
      <p className="text-center my-6 text-2xl sm:text-3xl font-bold font-quicksand">
        My Summary
      </p>
      <p className="mx-2 sm:mx-6 lg:mx-8 my-5 text-base sm:text-lg lg:text-xl text-justify leading-relaxed font-quicksand">
        I am a fully accredited Cognitive Behavioural Therapist (BABCP
        registered) and EMDR-trained practitioner with a strong academic
        background and diverse clinical experience across NHS and third-sector
        services. I specialize in delivering evidence-based CBT interventions
        for a wide range of mental health challenges, with a particular focus on
        high-intensity therapy in both individual and group formats. My work
        spans across various populations, including frontline workers during the
        COVID-19 pandemic, and I've contributed to the development of innovative
        service models, psychoeducational materials, and group therapies.
        Proficient in multiple languages, I also bring a multicultural
        perspective to my practice. My leadership in both clinical and
        extracurricular settings reflects strong communication, supervision, and
        team-building skills.
      </p>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-2/5 flex justify-center lg:justify-end my-6 lg:my-24">
    <img
      src={roshan3}
      alt="Roshan"
      className="h-[500px] object-cover rounded-lg shadow-md"
    />
  </div>
</div>

      <div
  className="w-full flex flex-col lg:flex-row items-center justify-center px-4 lg:px-16 py-10"
  style={{ backgroundColor: "rgb(253, 250, 243)" }}
>
  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
    <img
      src={accreditation}
      alt="Accreditation"
      className="h-[300px] sm:h-[400px] lg:h-[500px] object-contain shadow-xl"
    />
  </div>

  {/* Text Section */}
  <div className="w-full lg:w-1/2 px-4">
    <p className="text-center lg:text-left mb-6 text-2xl sm:text-3xl font-bold font-quicksand">
      BABCP Accreditation
    </p>
    <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed font-quicksand">
      <li>
        <strong>Fully accredited CBT Therapist</strong> with the British Association for Behavioural and Cognitive Psychotherapies (<strong>BABCP</strong>).
      </li>
      <li>
        <strong>Registration No: 00001001195</strong> – meeting national standards for evidence-based psychological therapies.
      </li>
      <li>
        Trained in both <strong>CBT</strong> and <strong>EMDR</strong>, backed by postgraduate education and clinical supervision.
      </li>
      <li>
        Accreditation confirms alignment with <strong>NICE guidelines</strong> and the <strong>Roth & Pilling competency framework</strong>.
      </li>
      <li>
        <strong>Commitment to continuous learning</strong>, ethical integrity, and reflective practice.
      </li>
      <li>
        Offers therapy with <strong>trust, transparency, and clinical effectiveness</strong>—across individual, group, and supervisory formats.
      </li>
      <li>
        Undergoes ongoing <strong>professional development and supervision</strong> to maintain high standards of care.
      </li>
    </ul>

    {/* Accreditation Logo */}
    <div className="w-full mt-10 flex justify-center lg:justify-end">
      <img src={acc_logo} alt="BABCP Logo" className="h-[100px] sm:h-[130px] lg:h-[150px] shadow-xl" />
    </div>
  </div>
</div>


      <div className="px-6 py-16 lg:px-24 lg:py-24 bg-white">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
    {/* Left Section - Text */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cursive mb-6 text-center lg:text-left">
        Experience Shared By Our Clients
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-center lg:text-left leading-relaxed max-w-2xl mx-auto lg:mx-0">
        I’ve been fortunate to collaborate with some incredible individuals who’ve shared kind words about our time together. I hope their testimonials encourage you to reach out and begin your own confidence journey with me.
      </p>
      <div className="flex justify-center lg:justify-start">
        <button className="mt-6 cursor-pointer transition-all bg-[#4CECD6] text-black px-6 py-2 rounded-lg border-[#026659] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          Read More Testimonials
        </button>
      </div>
    </div>

    {/* Right Section - Image + Slider */}
<div className="w-full lg:w-1/2 relative rounded-3xl bg-[#4CECD6] shadow-xl overflow-hidden h-[350px] sm:h-[550px] lg:h-[600px] lg:w-[700px] flex items-center justify-center">
  {/* Background Image - Centered */}
  <div className="absolute inset-0 flex justify-center items-center z-0">
    <img
      src={testn}
      alt="Slider Background"
      className="max-w-none w-auto h-full object-center"
    />
  </div>

  {/* Slider Overlay Centered */}
  <div className="relative z-10 w-full flex justify-center items-center px-4">
    <ImageSlider />
  </div>
</div>

  </div>
</div>


    </div>
  );
};

export default About;
