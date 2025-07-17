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
      <div π className="h-[650px] w-full flex items-center justify-between">
        <div
          style={{ backgroundColor: "rgb(253, 250, 243)" }}
          className="h-[650px] w-full  relative flex items-center justify-between"
        >
          {/* Background Shape */}
          <div className="absolute bg-[rgb(217,241,251)] h-[600px] w-[600px] top-[30px] left-[3%] z-0 rounded-full overflow-hidden flex justify-center items-center ">
            <img
              src={roshan2}
              className="w-full h-full object-contain"
              alt="Roshan Vincent"
            />
          </div>

          {/* Foreground Box */}
          <div className="box bg-white h-[400px] w-[80vw] ml-[35%] shadow-2xl relative z-10 ">
            <p className="w-full flex justify-center my-8 text-3xl font-bold font-quicksand tracking-wide animate__animated animate__zoomIn">
              Therapist Rohan Vincent
            </p>
            <div className="w-full text-center p-10">
              <p className="font-light text-lg animate__animated animate__zoomIn">
                Empowering Change Through Evidence-Based Therapy – Accredited
                CBT & EMDR Specialist Supporting Mental Wellness with Compassion
                and Expertise.
              </p>
              <p className="my-10 text-lg animate__animated animate__zoomIn">
                Helping Minds Heal, One Thought at a Time.
              </p>
              <div className="flex flex-col items-center">
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
          <div className=" w-[30vw]">
            <div className="mx-14 my-5">
              <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
                <div className="shadow-md flex items-center group-hover:gap-2 bg-[#4CECD6] p-3 rounded-full cursor-pointer duration-300 animate__animated animate__zoomIn">
                  <FaLinkedin className="text-5xl text-white" />

                  <a
                    href="https://www.linkedin.com/in/roshan-vincent-3068695b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-[0px] text-white group-hover:text-sm duration-300">
                      Check Out My Profile
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <a href="mailto:roshan.vincent@behavioraltherapist.co.uk">
              <div className="mx-14 my-5">
                <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
                  <div className="shadow-md flex items-center group-hover:gap-2 bg-[#4CECD6] p-3 rounded-full cursor-pointer duration-300 animate__animated animate__zoomIn">
                    <IoIosMail className="text-5xl text-white" />

                    <span className="text-[0px] text-white group-hover:text-sm duration-300">
                      Contact Me
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <h2 className="text-center m-16 text-5xl font-cursive">
        {" "}
        Hello There, Glad To Meet You
      </h2>

      <div className="w-full flex items-center">
        <div className="w-[60%] h-[500px] mx-16 my-24 flex flex-col justify-center">
          <div className="  m-6 p-6">
            <p className="text-center my-6 text-3xl font-bold font-quicksand">
              My Summary
            </p>
            <p className="mx-8 my-5 text-xl text-justify leading-relaxed font-quicksand">
              I am a fully accredited Cognitive Behavioural Therapist (BABCP
              registered) and EMDR-trained practitioner with a strong academic
              background and diverse clinical experience across NHS and
              third-sector services. I specialize in delivering evidence-based
              CBT interventions for a wide range of mental health challenges,
              with a particular focus on high-intensity therapy in both
              individual and group formats. My work spans across various
              populations, including frontline workers during the COVID-19
              pandemic, and I've contributed to the development of innovative
              service models, psychoeducational materials, and group therapies.
              Proficient in multiple languages, I also bring a multicultural
              perspective to my practice. My leadership in both clinical and
              extracurricular settings reflects strong communication,
              supervision, and team-building skills.
            </p>
          </div>
        </div>
        <img src={roshan3} className="h-[500px] mr-16" />
      </div>

      <div
        className="w-full flex items-center justify-center p-5"
        style={{ backgroundColor: "rgb(253, 250, 243)" }}
      >
        <img src={accreditation} className="h-[500px] mx-16 my-10 shadow-xl" />
        <div className="w-[70%] ">
          <p className="text-center my-6 text-3xl font-bold font-quicksand">
            BABCP Accreditation
          </p>
          <p className="text-justify leading-relaxed text-lg  font-quicksand">
            I am a fully accredited Cognitive Behavioural Therapist with the
            British Association for Behavioural and Cognitive Psychotherapies
            (BABCP), the UK's leading professional body for CBT practitioners.
            This accreditation (Registration No. 00001001195) is a mark of
            professional excellence, awarded only to those who have completed
            rigorous postgraduate training, gained substantial supervised
            clinical experience, and demonstrated a high level of competence in
            delivering evidence-based psychological therapies. My accreditation
            assures clients that I meet the national standards outlined by NICE
            and the Roth & Pilling CBT competency framework, and that I deliver
            therapy with professionalism, ethical integrity, and clinical
            effectiveness. Achieving this accreditation represents a significant
            milestone in my professional journey and highlights my commitment to
            continuous learning, reflective practice, and staying up to date
            with the latest developments in psychological therapies. It also
            ensures that I engage in ongoing supervision and professional
            development to maintain the quality and safety of the care I
            provide. For clients, this accreditation offers confidence and peace
            of mind—they are working with a therapist who has been independently
            assessed and approved by a respected governing body. Whether working
            with individuals, groups, or supervising trainee therapists, I
            strive to uphold the highest standards of practice. I believe that
            trust, transparency, and evidence-based care are essential to the
            therapeutic process, and my BABCP accreditation reinforces these
            values in every aspect of my work.
          </p>
          <div className="w-full my-10 flex justify-end">
            <img src={acc_logo} className="h-[150px] shadow-xl" />
          </div>
        </div>
      </div>
      <div className="m-24 flex items-center">
        <div>
          <h2 className=" text-5xl font-cursive">
            {" "}
            Experience Shared By Our Clients
          </h2>
          <div className="flex flex-col justify-center mx-5 text-xl my-14 w-[70%] ">
            I’ve been fortunate to collaborate with some incredible individuals
            who’ve shared kind words about our time together. I hope their
            testimonials encourage you to reach out and begin your own
            confidence journey with me.
            <button className="m-5 cursor-pointer transition-all bg-[#4CECD6] text-black px-6 py-2 rounded-lg border-[#026659] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              Read More Testimonials
            </button>
          </div>
        </div>
        <div className="w-[1800px] h-[600px]  relative mx-auto rounded-3xl bg-[#4CECD6] shadow-xl overflow-hidden" >
          {/* Background Image */}
          <img
            src={testn}
            alt="Slider Background"
            className="absolute mt-5 w-full h-full object-cover z-0"
          />

          {/* Slider Overlay */}
          <div className="absolute flex items-center justify-center inset-0 z-10">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
