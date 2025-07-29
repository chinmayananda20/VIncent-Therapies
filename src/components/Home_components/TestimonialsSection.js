import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import client1 from "../../assets/male_client.svg";
import client2 from "../../assets/female_client.svg";

const TestimonialsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="my-24 px-6 lg:px-16" ref={ref}>
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold my-3 max-w-xl">
        Customer Testimonials
      </p>
      <p className="my-3 text-base sm:text-lg">
        Experience Shared By Our Clients
      </p>

      <motion.div
        className="my-16 flex flex-col lg:flex-row justify-center items-stretch gap-10 px-6 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Testimonial 1 */}
        <motion.div
          className="max-w-lg w-full min-h-[400px] p-6 rounded-lg shadow-md bg-white flex flex-col justify-between"
          variants={cardVariants}
        >
          <div>
            <div className="flex justify-center lg:justify-start">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-2xl mx-1 text-yellow-500" />
              ))}
            </div>
            <p className="font-semibold mt-5 text-justify leading-relaxed">
              "Amazing. I have been having CBT with RV and he has been patient
              during a very tough time. But has actually helped me a lot with
              how I process my thinking and emotions. Huge compliment for Rosh."
            </p>
          </div>
          <div className="mt-8 flex items-center">
            <img
              src={client1}
              className="w-16 h-16 object-contain"
              alt="Client 1"
            />
            <p className="ml-4 font-bold text-2xl sm:text-3xl">Anonymous</p>
          </div>
        </motion.div>

        {/* Testimonial 2 */}
        <motion.div
          className="max-w-lg w-full min-h-[400px] p-6 rounded-lg shadow-md bg-white flex flex-col justify-between"
          variants={cardVariants}
        >
          <div>
            <div className="flex justify-center lg:justify-start">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-2xl mx-1 text-yellow-500" />
              ))}
            </div>
            <p className="font-semibold mt-5 text-justify leading-relaxed">
              "Rosh has given me lots of techniques to help support and manage
              my anxiety and this has really worked as I now feel much less
              anxiety than I did prior to the sessions. Rosh was very patient
              and really listened and showed empathy and understanding. Thank
              you for all your help and support."
            </p>
          </div>
          <div className="mt-8 flex items-center">
            <img
              src={client2}
              className="w-16 h-16 object-contain"
              alt="Client 2"
            />
            <p className="ml-4 font-bold text-2xl sm:text-3xl">Anonymous</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
