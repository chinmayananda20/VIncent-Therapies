import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GoSmiley } from "react-icons/go";

const JourneySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

  return (
    <div className="flex flex-col items-center text-center" ref={ref}>
      <p className="text-sm">Journey</p>
      <p className="font-bold text-3xl my-3">Understanding Your Path To Healing</p>
      <p className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
        At Vincent Therapies, we guide you through a structured process designed
        to support your mental health journey. From your first consultation to
        ongoing sessions, we ensure a personalized experience tailored to your
        needs.
      </p>

      <motion.div
        className="flex mt-5 mb-16 flex-col md:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Step 1 */}
        <motion.div
          className="flex justify-around md:w-[50%] w-[90%] m-5"
          variants={stepVariants}
        >
          <div className="flex flex-col items-center">
            <GoSmiley className="text-3xl" />
            <p className="text-2xl font-bold text-center m-5">Step 1: Initial Consultation</p>
            <p className="text-center">
              Your journey begins with a comprehensive assessment to understand your unique situation.
            </p>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="flex justify-around md:w-[50%] w-[90%] m-5"
          variants={stepVariants}
        >
          <div className="flex flex-col items-center">
            <GoSmiley className="text-3xl" />
            <p className="text-2xl font-bold text-center m-5">Step 2: Personalized Treatment Plan</p>
            <p className="text-center">
              Together, we create a tailored plan that addresses your specific goals.
            </p>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="flex justify-around md:w-[50%] w-[90%] m-5"
          variants={stepVariants}
        >
          <div className="flex flex-col items-center">
            <GoSmiley className="text-3xl" />
            <p className="text-2xl font-bold text-center m-5">Step 3: Ongoing Therapy Session</p>
            <p className="text-center">
              Regular sessions provide support and adjustments to your treatment as needed.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JourneySection;
