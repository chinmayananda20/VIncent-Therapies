import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiThreeLeaves } from "react-icons/gi";

const TherapyModes = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

  return (
    <div className="mt-16 flex flex-col items-center" ref={ref}>
      <p className="font-bold text-3xl text-center w-[90%] md:w-[40%]">
        Explore Our Comprehensive Range of Therapy Services Tailored for You
      </p>

      <motion.div
        className="flex m-5 flex-col md:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Card 1 */}
        <motion.div
          className="flex justify-around md:w-[50%] w-[90%] m-5"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <GiThreeLeaves className="text-3xl" />
            <p className="text-2xl font-bold text-center m-5">
              Individual Therapy: Personalized Support for Your Mental Health Journey
            </p>
            <p className="text-center">
              Our individual therapy sessions focus on your unique needs and goals
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex justify-around md:w-[50%] w-[90%] m-5"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <GiThreeLeaves className="text-3xl" />
            <p className="text-2xl font-bold text-center m-5">
              Group Therapy: Connect and Heal with Others Facing Similar Challenges
            </p>
            <p className="text-center">
              Join our supportive group therapy sessions to share experiences and strategies
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex justify-around md:w-[50%] w-[90%] m-5"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <GiThreeLeaves className="text-3xl" />
            <p className="text-2xl font-bold text-center m-5">
              Teletherapy: Convenient Access to Professional Support from Anywhere
            </p>
            <p className="text-center">
              Experience therapy from the comfort of your home with our teletherapy options
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TherapyModes;
