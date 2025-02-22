import { Link } from "react-router-dom";

const MultimediaApp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl bg-white p-6 sm:p-8 md:p-10 rounded-lg sm:rounded-xl shadow-lg">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 text-center">
          Multimedia Reflection
        </h1>
        <p className="text-gray-700 mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg">
          Creating a multimedia application is an exciting yet complex challenge. The goal is to deliver an engaging, seamless experience that works across different devices, platforms, and user needs. However, achieving this requires addressing several key challenges: accessibility, performance, and adaptability.
        </p>
        <p className="text-gray-700 mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg">
          Accessibility ensures that content is available to everyone, including individuals with disabilities. This means integrating features like captions for videos, alt text for images, and user-friendly navigation to make the application easy to use for all.
        </p>
        <p className="text-gray-700 mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg">
          Performance is another critical factor. Multimedia applications often involve large files, high-quality visuals, and interactive elements, all of which can slow downloading times or cause lag. To prevent this, optimizing file sizes, using efficient media formats, and implementing smooth streaming techniques are essential.
        </p>
        <p className="text-gray-700 mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg">
          Adaptability is just as important. Users access multimedia on a variety of devices—smartphones, tablets, desktops, and even smart TVs—each with different screen sizes and processing capabilities.
        </p>
        <p className="text-gray-700 mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg">
          By carefully considering these challenges and integrating smart solutions, multimedia applications can provide a seamless, high-quality experience for all users.
        </p>
        <div className="flex justify-center sm:justify-end mt-8 sm:mt-10">
          <Link
            to="/"
            className="bg-slate-500 hover:bg-slate-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-lg shadow-md transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MultimediaApp;
