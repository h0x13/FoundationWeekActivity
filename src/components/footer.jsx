const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 md:py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base lg:text-lg font-light">
          &copy; {new Date().getFullYear()} IT343-3B Group 5 Activity. All rights reserved.
        </p>
        <div className="mt-2 md:mt-4">
          <p className="text-xs md:text-sm font-light">Images and videos used are credited to their respective owners:</p>
          <ul className="text-xs md:text-sm mt-1">
            <li>
              <a
                href="https://www.facebook.com/industrial.wheel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center justify-center gap-1"
              >
                Industrial Wheel
              </a>
            </li>
            <li>
              <a
                href="https://www.evsu.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center justify-center gap-1"
              >
                EVSU
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
