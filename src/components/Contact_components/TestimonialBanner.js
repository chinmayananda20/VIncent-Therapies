import { motion } from "framer-motion";
import img2 from '../../assets/img2.png'
import { useInView } from "react-intersection-observer";
const TestimonialBanner = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
const quoteVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

  return (
    <div className="m-5 flex justify-center" ref={ref}>
      <div
        className="relative h-[500px] md:h-[700px] w-[90%] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${img2})` }}
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl" />

        
        <motion.div
          className="absolute bottom-0 w-full z-10 px-6 pb-10 flex justify-center"
          variants={quoteVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="text-white text-center max-w-3xl">
            <p className="text-xl md:text-4xl italic leading-relaxed">
              "Healing begins with understanding. Together, we’ll turn insight
              into change and help you reclaim your peace of mind."
            </p>
            <p className="mt-3 text-base md:text-lg font-semibold">
              – Roshan Vincent, BABCP-Accredited Cognitive Behavioural Therapist
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialBanner;
