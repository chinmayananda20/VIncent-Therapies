import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsBoxFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";


const TherapySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

  return (
    <div
      className="flex flex-col w-full items-center px-4 py-8"
      ref={ref}
    >
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

      <motion.div
        className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 my-10 w-full px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {[
          {
            title: "Cognitive Behavioural Therapy (CBT)",
            text: "CBT is a structured, goal-oriented therapy that helps you identify and change negative thought patterns.",
          },
          {
            title: "Eye Movement Desensitization and Reprocessing (EMDR)",
            text: "EMDR is an innovative therapy designed to alleviate distress associated with traumatic memories.",
          },
          {
            title: "Psychoeducational Support for Mental Wellness",
            text: "Our psychoeducational support equips you with essential tools and knowledge for better mental health.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center max-w-sm text-center"
            variants={itemVariants}
          >
            <BsBoxFill className="text-3xl mb-2" />
            <p className="text-xl font-bold mb-2">{item.title}</p>
            <p className="text-sm md:text-base">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <a href="/services">
        <button className="border border-black px-4 py-2 flex items-center text-sm md:text-base hover:bg-black hover:text-white transition duration-300">
          Learn More <MdKeyboardArrowRight className="text-xl ml-1" />
        </button>
      </a>
    </div>
  );
};

export default TherapySection;
