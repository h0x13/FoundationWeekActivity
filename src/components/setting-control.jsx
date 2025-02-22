import React from "react";
import { Settings } from "lucide-react";

const SettingsControl = ({
  playbackRate,
  showSettings,
  onSpeedChange,
  onToggleSettings,
  onMouseLeave,
  settingsControlRef,
}) => {
  return (
    <div
      ref={settingsControlRef}
      className="relative"
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`flex align-middle transition cursor-pointer ${showSettings ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
        onClick={onToggleSettings}
      >
        <Settings className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      {showSettings && (
        <div className="absolute bottom-8 -left-4 bg-gray-800 rounded-lg overflow-hidden">
          {[0.5, 1, 1.5, 2].map((speed) => (
            <button
              key={speed}
              onClick={() => onSpeedChange(speed)}
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
  );
};

export default SettingsControl;
