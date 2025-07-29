import { motion } from "framer-motion";
import img4 from "../../assets/img4.jpg";
const ServicesHero = () => {
  const textSlideIn = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const imageFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative w-full h-screen bg-cover bg-center flex flex-col md:flex-row"
      style={{
        backgroundImage: `url(${img4})`,
      }}
      variants={imageFade}
      initial="hidden"
      animate="visible"
    >
      
      <motion.div
        className="w-full md:w-1/2 h-full flex items-end md:items-center bg-white bg-opacity-50"
        variants={textSlideIn}
        initial="hidden"
        animate="visible"
      >
        <div className="text-black px-6 py-10 md:px-16 md:py-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-md md:text-xl mb-6 text-justify leading-relaxed">
            At the heart of Roshan Vincent’s practice is a commitment to helping
            individuals lead more fulfilling lives through evidence-based
            psychological therapy. With full accreditation from the British
            Association for Behavioural and Cognitive Psychotherapies (BABCP)
            and extensive clinical experience across NHS and private settings,
            Roshan offers specialised support tailored to your mental health
            needs.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 hover:text-black transition">
            Book a Session
          </button>
        </div>
      </motion.div>

      
      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  );
};

export default ServicesHero;
