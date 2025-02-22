import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, Pause, Volume2, Settings, Maximize2 } from "lucide-react";

const VideoPresentation = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const volumeControlRef = useRef(null);
  const settingsControlRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (volumeControlRef.current && !volumeControlRef.current.contains(event.target)) {
        setShowVolume(false);
      }
      if (settingsControlRef.current && !settingsControlRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    const video = videoRef.current;
    const handleVideoEnd = () => setIsPlaying(false);
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    }
  }, []);

  const handleMouseLeave = (controlType) => {
    setTimeout(() => {
      if (controlType === 'volume') setShowVolume(false);
      if (controlType === 'settings') setShowSettings(false);
    }, 1000);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (videoRef.current) {
      videoRef.current.currentTime = (newProgress / 100) * videoRef.current.duration;
      if (!isPlaying) {
        togglePlay();
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleSpeedChange = (speed) => {
    setPlaybackRate(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setShowSettings(false);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Video Container */}
        <div ref={containerRef} className="relative w-full aspect-video bg-black">
          <video
            ref={videoRef}
            src="/PromotionalVideo.mp4"
            className="w-full h-full object-cover"
            onTimeUpdate={handleTimeUpdate}
          />

          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-blue-400 transition cursor-pointer" onClick={togglePlay}>
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              </button>
              
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleProgressChange}
                className="flex-1 h-1 bg-white/30 rounded-full cursor-pointer"
              />

              {/* Volume Control */}
              <div 
                ref={volumeControlRef}
                className="relative"
                onMouseLeave={() => handleMouseLeave('volume')}
              >
                <button 
                  className={`transition cursor-pointer ${showVolume ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
                  onClick={() => setShowVolume(!showVolume)}
                >
                <Volume2 className="w-6 h-6" />
                </button>
                {showVolume && (
                <div className="absolute bottom-8 -left-2 bg-gray-800 rounded-lg p-4">
                  <div className="h-24 flex items-center justify-center">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="h-24 w-2 cursor-pointer"
                      style={{
                        transform: "rotate(180deg)",
                        transformOrigin: "center",
                        writingMode: 'vertical-lr',
                        WebkitAppearance: 'slider-vertical',
                      }}
                    />
                  </div>
                </div>
                )}
              </div>

              {/* Settings Control */}
              <div 
                ref={settingsControlRef}
                className="relative"
                onMouseLeave={() => handleMouseLeave('settings')}
              >
                <button 
                  className={`transition cursor-pointer ${showSettings ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
                  onClick={() => setShowSettings(!showSettings)}
                >
                  <Settings className="w-6 h-6" />
                </button>
                {showSettings && (
                  <div className="absolute bottom-8 -left-4 bg-gray-800 rounded-lg overflow-hidden">
                    {[0.5, 1, 1.5, 2].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => handleSpeedChange(speed)}
                        className={`block w-full px-4 py-2 text-sm text-left hover:bg-white/10 cursor-pointer ${
                          playbackRate === speed ? 'text-blue-400' : 'text-white'
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Fullscreen Button */}
              <button 
                className="text-white hover:text-blue-400 transition cursor-pointer"
                onClick={toggleFullscreen}
              >
                <Maximize2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
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
              Back to Main
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPresentation;
