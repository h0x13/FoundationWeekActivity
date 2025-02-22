const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 sm:py-3 md:py-4 text-center">
      <div className="container mx-auto">
        <p className="text-xs sm:text-base">&copy; {new Date().getFullYear()} IT343-3B Group 5 Activity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
