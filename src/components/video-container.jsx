import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "../components/video-player";

const VideoPage = ({ title, videoSrc, publishDate }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 p-1 sm:p-3 md:p-6">
      <div className="w-full max-w-4xl bg-white rounded-md sm:rounded-lg md:rounded-2xl shadow-xl overflow-hidden">
        <VideoPlayer src={videoSrc} />
        <div className="p-2 sm:p-4 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 sm:items-center mb-2 sm:mb-4 md:mb-6">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 md:mb-2 text-gray-800">{title}</h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">{publishDate}</p>
            </div>
            <Link
              to="/"
              className="w-full sm:w-auto bg-slate-500 hover:bg-slate-600 text-white text-sm sm:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded md:rounded-lg shadow-md transition text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
