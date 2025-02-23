import FacebookVideo from './facebook-video';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const EventStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const highlights = [
    { img: "img1", src: "https://www.facebook.com/photo?fbid=1062773255880705&set=pcb.1062774502547247" },
    { img: "img2", src: "https://www.facebook.com/photo?fbid=1062773575880673&set=pcb.1062774502547247" },
    { img: "img3", src: "https://www.facebook.com/photo?fbid=1062773279214036&set=pcb.1062774502547247" },
    { img: "img4", src: "https://www.facebook.com/photo?fbid=1062773379214026&set=pcb.1062774502547247" },
    { img: "img5", src: "https://www.facebook.com/photo?fbid=1062773425880688&set=pcb.1062774502547247" },
    { img: "img6", src: "https://www.facebook.com/photo?fbid=1062773302547367&set=pcb.1062774502547247" },
    { img: "img7", src: "https://www.facebook.com/photo?fbid=1062773405880690&set=pcb.1062774502547247" },
    { img: "img8", src: "https://www.facebook.com/photo?fbid=1062773495880681&set=pcb.1062774502547247" },
    { img: "img9", src: "https://www.facebook.com/photo?fbid=1062773539214010&set=pcb.1062774502547247" },
    { img: "img10", src: "https://www.facebook.com/photo?fbid=1062773605880670&set=pcb.1062774502547247" },
    { img: "img11", src: "https://www.facebook.com/photo?fbid=1062773659213998&set=pcb.1062774502547247" },
    { img: "img12", src: "https://www.facebook.com/photo?fbid=1062773762547321&set=pcb.1062774502547247" },
    { img: "img13", src: "https://www.facebook.com/photo?fbid=1062773679213996&set=pcb.1062774502547247" },
    { img: "img14", src: "https://www.facebook.com/photo?fbid=1062773722547325&set=pcb.1062774502547247" },
    { img: "img15", src: "https://www.facebook.com/photo?fbid=1062773792547318&set=pcb.1062774502547247" },
    { img: "img16", src: "https://www.facebook.com/photo?fbid=1062773822547315&set=pcb.1062774502547247" },
    { img: "img17", src: "https://www.facebook.com/photo?fbid=1062773879213976&set=pcb.1062774502547247" },
    { img: "img18", src: "https://www.facebook.com/photo?fbid=1062773912547306&set=pcb.1062774502547247" },
    { img: "img19", src: "https://www.facebook.com/photo?fbid=1062774049213959&set=pcb.1062774502547247" },
    { img: "img20", src: "https://www.facebook.com/photo?fbid=1062774035880627&set=pcb.1062774502547247" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === highlights.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? highlights.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  return (
    <section id="story" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-center text-slate-700 mb-2 sm:mb-4 md:mb-6">
          Celebrating 118 Years of Excellence: The EVSU Founding Anniversary
        </h1>

        <div className="w-full max-w-3xl mx-auto mb-2 sm:mb-4 md:mb-10">
          <FacebookVideo videoUrl="https://www.facebook.com/watch/?v=1149533143482168" />
        </div>

        <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-center text-slate-700 mb-2 sm:mb-4 md:mb-6">
          Event Highlights
        </h1>

        <div className="relative w-full max-w-3xl mx-auto">
          {/* Main carousel image with Facebook link */}
          <a
            href={highlights[currentIndex].src}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-video w-full overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={`/fbImg/${highlights[currentIndex].img}.jpg`}
              alt={`Event highlight ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </a>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pause/Play button */}
          <button
            onClick={togglePlayPause}
            className="absolute bottom-2 right-1 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          {/* Thumbnail navigation */}
          <div className="flex overflow-x-auto gap-2 mt-4 pb-2">
            {highlights.map((highlight, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden ${
                  currentIndex === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={`/fbImg/${highlight.img}.jpg`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventStory;
