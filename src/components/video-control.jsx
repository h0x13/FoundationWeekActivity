import React, { useRef, useState } from "react";
import { Play, Pause, Maximize2, Minimize2 } from "lucide-react";
import VolumeControl from "./volume-control";
import SettingsControl from "./setting-control";

const VideoControls = ({
  isPlaying,
  progress,
  volume,
  playbackRate,
  isFullscreen,
  onPlayPause,
  onProgressChange,
  onVolumeChange,
  onSpeedChange,
  onFullscreen,
}) => {
  const volumeControlRef = useRef(null);
  const settingsControlRef = useRef(null);
  const [showVolume, setShowVolume] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleMouseLeave = (controlType) => {
    setTimeout(() => {
      if (controlType === 'volume') setShowVolume(false);
      if (controlType === 'settings') setShowSettings(false);
    }, 1000);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:p-4">
      <div className="flex items-center gap-2 md:gap-4 w-full">
        {/* Play/Pause Button */}
        <button className="text-white hover:text-blue-400 transition cursor-pointer" onClick={onPlayPause}>
          {isPlaying ? <Pause className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" /> : <Play className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />}
        </button>

        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={(e) => onProgressChange(e.target.value)}
          className="flex-1 h-[0.20rem] sm:h-1 min-w-0 bg-white/30 rounded-full cursor-pointer"
        />

        {/* Volume Control */}
        <VolumeControl
          volume={volume}
          showVolume={showVolume}
          onVolumeChange={onVolumeChange}
          onToggleVolume={() => setShowVolume(!showVolume)}
          onMouseLeave={() => handleMouseLeave('volume')}
          volumeControlRef={volumeControlRef}
        />

        {/* Settings Control */}
        <SettingsControl
          playbackRate={playbackRate}
          showSettings={showSettings}
          onSpeedChange={onSpeedChange}
          onToggleSettings={() => setShowSettings(!showSettings)}
          onMouseLeave={() => handleMouseLeave('settings')}
          settingsControlRef={settingsControlRef}
        />

        {/* Fullscreen Button */}
        <button
          className="text-white hover:text-blue-400 transition cursor-pointer"
          onClick={onFullscreen}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        </button>
      </div>
    </div>
  );
};

export default VideoControls;
