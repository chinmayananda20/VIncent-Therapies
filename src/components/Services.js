import ServicesHero from "./Services_components.js/ServicesHero";
import Main from "./Services_components.js/Main";
import TherapyModes from "./Services_components.js/TherapyModes";
import WhyChooseSection from "./Services_components.js/WhyChooseSection";
import JourneySection from "./Services_components.js/JourneySection";
const Services = () => {
  return (
    <div>
      <ServicesHero />
      <Main />

      <TherapyModes />

      <WhyChooseSection />
<JourneySection/>
      
    </div>
  );
};

export default Services;
