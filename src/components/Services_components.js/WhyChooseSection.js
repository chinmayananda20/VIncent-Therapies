import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiTicktick } from "react-icons/si";
import { MdWifiCalling3 } from "react-icons/md";

const WhyChooseSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const leftSlideIn = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const rightSlideIn = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div
      className="flex flex-wrap justify-center items-center my-16 px-4"
      ref={ref}
    >
      
      <motion.div
        className="w-full lg:w-1/2 max-w-xl m-5 flex flex-col items-center"
        variants={leftSlideIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SiTicktick className="text-[#4CECD6] text-5xl" />
        <p className="font-bold text-2xl my-3 text-center lg:text-left">
          Why Choose Roshan?
        </p>
        <ul className="list-disc list-inside text-center lg:text-left">
          <li className="my-2">BABCP-accredited CBT Therapist</li>
          <li className="my-2">EMDR-trained for trauma and PTSD</li>
          <li className="my-2">NHS and private sector experience</li>
          <li className="my-2">Multilingual support (Hindi & Malayalam)</li>
          <li className="my-2">
            Empathetic, culturally aware, and client-centred care
          </li>
        </ul>
      </motion.div>

     
      <motion.div
        className="w-full lg:w-1/2 max-w-xl m-5 flex flex-col items-center"
        variants={rightSlideIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <MdWifiCalling3 className="text-5xl text-[#4CECD6]" />
        <p className="font-bold text-2xl my-3 text-center lg:text-left">
          Ready To Begin?
        </p>
        <p className="text-center lg:text-left">
          Whether you're feeling overwhelmed, stuck, or ready to work on
          long-standing issues, Roshan is here to guide you with compassion,
          professionalism, and proven therapeutic techniques.
        </p>
        <p className="my-5 text-center lg:text-left">
          Contact Roshan today to book an initial consultation or learn more
          about how therapy can help you.
        </p>
      </motion.div>
    </div>
  );
};

export default WhyChooseSection;
