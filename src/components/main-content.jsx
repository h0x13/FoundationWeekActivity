import EventsTimeline from "./event-timeline";
import EventStory from "./event-story";
import HeroSection from "./hero";
import About from "./about";

const MainContainer = () => {
  return (
    <div className="w-screen">
      <HeroSection />
      <EventsTimeline />
      <EventStory />
      <About />
    </div>
  );
}


export default MainContainer;
