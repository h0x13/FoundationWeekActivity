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
    <section id="home" className="bg-gray-900 w-full h-dvh text-white flex">
      <div className="container m-auto p-4">
        <div className="text-center mb-8">
          <p className="text-yellow-300 text-xs sm:text-sm md:text-lg lg:text-lg mb-3 text-center">
            Eastern Visayas State University 118th Founding Anniversary
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-300 text-center">
            Foundation Week 2025
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl text-gray-500 italic max-w-3xl mx-auto text-center">
            One EVSU at 118: Building Futures Through Smart Innovation.
          </p>
          <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg text-center">
            February 17-21, 2025
          </p>
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
   <section id="about" className="py-4 sm:py-8 md:py-12 lg:py-16 mx-auto px-4">
        <div className="max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 md:mb-4 lg:mb-6 text-blue-900">About This Website</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-8">This website is a project for the IT-343 Multimedia course at Eastern Visayas State University. It showcases our skills in web development, design, and multimedia integration, providing an interactive and engaging platform for learning and collaboration. Below are links to our course activities:</p>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Link
              to="/reflection"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-3 px-3 sm:px-4 lg:px-6 rounded-full transition duration-300 text-nowrap mb-2">
              Reflection
            </Link>
            <Link
              to="/poster"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-3 px-3 sm:px-4 lg:px-6 rounded-full transition duration-300 text-nowrap mb-2">
              Poster
            </Link>
            <Link
              to="/presentaion"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-3 px-3 sm:px-4 lg:px-6 rounded-full transition duration-300 text-nowrap mb-2">
              Promotional Video
            </Link>
          </div>
        </div>
    </section>
  );
}

export default MainContainer;
