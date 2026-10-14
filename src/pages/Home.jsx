import CareerMultiplier from "../components/CareerMultiplier";
import CareerPaths from "../components/CareerPaths";
import FaqSection from "../components/FaqSection";
import Hero from "../components/Hero";
import JobReadySteps from "../components/JobReadySteps";
import WhoCanJoin from "../components/WhoCanJoin";
import WhyLearners from "../components/WhyLearners";
import WhySection from "../components/WhySection";

const Home = () => (
  <>
    <Hero />
    <WhySection />
    <WhoCanJoin />
    <CareerPaths />
    <CareerMultiplier />
    <JobReadySteps />
    <WhyLearners />
    <FaqSection />
  </>
);

export default Home;
