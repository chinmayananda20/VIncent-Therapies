import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

const ContactDetails = () => {
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
      className="flex flex-col lg:flex-row justify-around h-[400px] items-center px-6"
      ref={ref}
    >
      
      <motion.div
        className="mb-8 lg:mb-0"
        variants={leftSlide}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <p className="font-bold text-3xl mb-2">Get in Touch</p>
        <p className="max-w-md">
          We are here to support you. Reach out to us anytime for assistance.
        </p>
      </motion.div>

      
      <motion.div
        className="flex flex-col justify-center"
        variants={rightSlide}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="m-5">
          <p className="font-bold flex items-center">
            <IoIosMail className="text-2xl mr-2" />
            Email
          </p>
          <p className="underline">roshan.vincent@behavioraltherapist.co.uk</p>
        </div>
        <div className="m-5">
          <p className="font-bold flex items-center">
            <MdLocalPhone className="text-2xl mr-2" />
            Phone
          </p>
          <p className="underline">+44 7808 213247</p>
        </div>
       
      </motion.div>
    </div>
  );
};

export default ContactDetails;
