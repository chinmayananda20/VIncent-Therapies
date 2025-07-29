import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroimage2 from "../../assets/heroimage2.jpg";

const HealingSection = ({ healingRef }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div ref={healingRef} className="my-16 px-4 md:px-0" >
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <motion.div
        ref={ref}
          className="md:mx-28 w-full md:w-[550px] my-8"
          variants={leftVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="font-bold text-xs uppercase text-center md:text-left">
            Healing
          </p>
          <p className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Let Go Of The Past, Start Building Your Future
          </p>
          <p className="my-5 text-center md:text-left">
            At Vincent Therapies, we provide evidence-based, person-centred
            treatment tailored to your unique needs. Our compassionate
            approach addresses a range of mental health challenges, including
            depression, anxiety, PTSD, and complex trauma.
          </p>

          <div className="flex flex-col md:flex-row my-10">
            <div className="mx-2 md:mx-5 w-full md:w-[300px] mb-6 md:mb-0">
              <p className="font-bold text-center md:text-left">
                Personalized Care
              </p>
              <p className="my-3 text-center md:text-left">
                Experience therapy that adapts to your individual mental
                health journey and goals.
              </p>
            </div>
            <div className="mx-2 md:mx-5 w-full md:w-[300px]">
              <p className="font-bold text-center md:text-left">
                Evidence-based
              </p>
              <p className="my-3 text-center md:text-left">
                Utilizing proven methods like CBT and EMDR for effective
                mental health treatment.
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <a href="/services">
              <button className="border-[1px] border-black px-4 py-2 flex items-center mx-auto md:mx-0">
                Learn More <MdKeyboardArrowRight className="text-xl ml-1" />
              </button>
            </a>
          </div>
        </motion.div>

       
        <motion.div
          className="mx-auto md:mx-16 mt-10 md:mt-0"
          variants={rightVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <img
            src={heroimage2}
            className="rounded shadow-lg w-[400px] md:w-[400px] lg:w-full"
            alt="Therapy visual"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HealingSection;
