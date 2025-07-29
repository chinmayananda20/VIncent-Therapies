import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
const Main = () => {
  const leftFade = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const rightFade = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const [cbtRef, cbtInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [emdrRef, emdrInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [psyRef, psyInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className="my-16 px-4">
      <p className="text-center font-bold text-3xl mb-12">Services</p>

      
      <div
        className="flex flex-col lg:flex-row items-center justify-around gap-8 mb-16"
        ref={cbtRef}
      >
        <motion.img
          src={img5}
          alt="CBT"
          className="w-full max-w-[500px] mx-auto"
          variants={leftFade}
          initial="hidden"
          animate={cbtInView ? "visible" : "hidden"}
        />
        <motion.div
          className="max-w-xl m-5"
          variants={rightFade}
          initial="hidden"
          animate={cbtInView ? "visible" : "hidden"}
        >
          <p className="font-bold text-2xl mb-2">
            Cognitive Behavioural Therapy
          </p>
          <p className="text-justify leading-relaxed">
            Roshan provides structured, goal-oriented CBT sessions for a wide
            range of issues, including:
          </p>
          <ul className="list-disc list-inside my-4 space-y-1">
            <li>Depression and low mood</li>
            <li>Anxiety disorders (e.g., GAD, panic, health anxiety)</li>
            <li>PTSD and trauma-related difficulties</li>
            <li>Stress and emotional regulation</li>
            <li>Sleep difficulties and low self-esteem</li>
          </ul>
          <p className="text-justify leading-relaxed">
            CBT is grounded in the principle that our thoughts, emotions, and
            behaviours are interconnected. Roshan works collaboratively with
            clients to identify and challenge unhelpful thought patterns and
            develop practical strategies to manage distress and build
            resilience.
          </p>
        </motion.div>
      </div>

     
      <div
        className="flex flex-col-reverse lg:flex-row items-center justify-around gap-8 mb-16"
        ref={emdrRef}
      >
        <motion.div
          className="max-w-xl m-5"
          variants={leftFade}
          initial="hidden"
          animate={emdrInView ? "visible" : "hidden"}
        >
          <p className="font-bold text-2xl mb-2">
            Eye Movement Desensitization and Reprocessing (EMDR)
          </p>
          <p className="text-justify leading-relaxed">
            Having completed European-accredited EMDR training, Roshan supports
            individuals processing complex trauma and post-traumatic stress. His
            trauma-focused therapy is particularly effective for:
          </p>
          <ul className="list-disc list-inside my-4 space-y-1">
            <li>Survivors of abuse or neglect</li>
            <li>
              Frontline professionals affected by vicarious trauma (e.g., NHS,
              emergency services)
            </li>
            <li>
              Individuals struggling with flashbacks, nightmares, or intrusive
              memories
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            Roshan’s EMDR practice is embedded within a safe, supportive, and
            ethically supervised framework.
          </p>
        </motion.div>
        <motion.img
          src={img6}
          alt="EMDR"
          className="w-full max-w-[500px] mx-auto"
          variants={rightFade}
          initial="hidden"
          animate={emdrInView ? "visible" : "hidden"}
        />
      </div>

      
      <div
        className="flex flex-col lg:flex-row items-center justify-around gap-8"
        ref={psyRef}
      >
        <motion.img
          src={img7}
          alt="Psychoeducation"
          className="w-full max-w-[500px] mx-auto"
          variants={leftFade}
          initial="hidden"
          animate={psyInView ? "visible" : "hidden"}
        />
        <motion.div
          className="max-w-xl m-5"
          variants={rightFade}
          initial="hidden"
          animate={psyInView ? "visible" : "hidden"}
        >
          <p className="font-bold text-2xl mb-2">
            Psychoeducational Support for Mental Wellness
          </p>
          <p>
            Roshan provides structured, interactive psychoeducational sessions
            designed to enhance self-awareness, emotional literacy, and mental
            resilience. These sessions blend therapeutic insights with practical
            strategies to support everyday wellbeing.
          </p>
          <p className="mt-3">Common areas of focus include:</p>
          <ul className="list-disc list-inside my-4 space-y-1">
            <li>Understanding stress and its impact on the body and mind</li>
            <li>
              Developing healthy coping mechanisms and emotional regulation
              skills
            </li>
            <li>Recognising and challenging unhelpful thought patterns</li>
            <li>Building self-esteem, motivation, and assertiveness</li>
            <li>
              Promoting balance through sleep hygiene, routine, and lifestyle
              awareness
            </li>
          </ul>
          <p className="text-justify leading-relaxed">
            Whether delivered one-to-one or in group settings, psychoeducation
            empowers clients with the knowledge and confidence to navigate
            life’s challenges. Roshan tailors each session to individual needs,
            drawing on evidence-based CBT frameworks and years of experience in
            NHS and private practice.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
