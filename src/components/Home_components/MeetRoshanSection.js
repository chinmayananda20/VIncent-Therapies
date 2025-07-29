import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdKeyboardArrowRight } from "react-icons/md";

const MeetRoshanSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const leftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center mt-20 px-6 lg:px-24"
      ref={ref}
    >
      {/* Left Text (Heading) */}
      <motion.div
        className="w-full lg:w-1/2 mb-10 lg:mb-0"
        variants={leftVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <p className="font-bold text-xs">Therapies</p>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold my-3 max-w-xl">
          Meet Roshan Vincent: Your Compassionate Therapist
        </p>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="w-full lg:w-1/2"
        variants={rightVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
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
      </motion.div>
    </div>
  );
};

export default MeetRoshanSection;
