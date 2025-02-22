import EventsTimeline from "./event-timeline";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="w-screen">
      <HeroSection />
      <Events />
      <About />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-900 w-full h-[800px] text-white flex">
      <div className="container m-auto">
        <div className="text-center mb-8">
          <p className="text-yellow-300 text-lg mb-3">Eastern Visayas State University 118th founding anniversary</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-300">Foundation Week 2025</h1>
          <p className="text-xl text-gray-500 md:text-2xl italic max-w-3xl mx-auto">One EVSU at 118: Building Futures Through Smart Innovation.</p>
          <p className="mt-4 text-gray-500 text-lg">February 17-21, 2025</p>
        </div>
      </div>
    </section>
  );
}

const Events = () => {
  return (
    <section id="events" className="bg-slate-800">
      <EventsTimeline />
    </section>
  );
}

const About = () => {
  return (
   <section id="about" className="py-16 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">About This Website</h2>
          <p className="text-lg mb-8">This website is a project for the IT-343 Multimedia course at Eastern Visayas State University. It showcases our skills in web development, design, and multimedia integration, providing an interactive and engaging platform for learning and collaboration. Below are links to our course activities:</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/reflection"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Reflection Activity
            </Link>
            <Link
              to="/poster"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Poster Project
            </Link>
            <Link
              to="/presentaion"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Promotional Video
            </Link>
          </div>
        </div>
    </section>
  );
}

export default MainContainer;
