import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "../components/video-player";

const VideoPresentation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <VideoPlayer src="/PromotionalVideo.mp4" />
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-800">Promotional Video</h1>
              <p className="text-gray-600">Published on February 22, 2025</p>
            </div>
            <Link
              to="/"
              className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded-lg shadow-md transition flex items-center gap-2"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPresentation;
