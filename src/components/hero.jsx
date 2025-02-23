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

export default HeroSection;
