import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdError } from "react-icons/md";

const CTASection = ({ showError2, setShowError2, shake2, setShake2 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const leftSlide = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const rightSlide = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center mt-24 px-6 lg:px-24"
      ref={ref}
    >
      {/* Left Text Block */}
      <motion.div
        className="w-full lg:w-1/2 mb-10 lg:mb-0"
        variants={leftSlide}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold my-3 lg:ml-8 max-w-xl text-center lg:text-left">
          Take The First Step
        </p>
      </motion.div>

      {/* Right CTA Section */}
      <motion.div
        className="w-full lg:w-1/2"
        variants={rightSlide}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <p className="text-base sm:text-lg lg:text-xl text-justify lg:px-8">
          Are you ready to prioritize your mental health? Book a consultation
          today to explore our tailored therapies and start your journey towards
          healing.
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
      </motion.div>
    </div>
  );
};

export default CTASection;
