import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base shadow-sm hover:shadow-md w-full sm:w-auto"
  >
    {children}
  </Link>
);

const CreditLink = ({ url, text }) => (
  <a href={url} className="text-blue-600 hover:underline">{text}</a>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-6">
    {children}
  </h2>
);

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <SectionHeading>About This Website</SectionHeading>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              This website is our project for the IT-343 Multimedia course at Eastern Visayas State University (EVSU).
              The content, including <CreditLink url="https://www.facebook.com/photo?fbid=1062773255880705&set=pcb.1062774502547247" text="images" /> and <CreditLink url="https://www.facebook.com/watch/?v=1149533143482168&t=5" text="videos" />, is for educational purposes only. We do not claim ownership over externally sourced materials. Proper attribution is provided where required. Below are links to our course activities:
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ButtonLink to="/reflection">Reflection</ButtonLink>
            <ButtonLink to="/poster">Poster</ButtonLink>
            <ButtonLink to="/presentation">Promotional Video</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
