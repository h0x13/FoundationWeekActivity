import React from "react";
import { Volume2 } from "lucide-react";

const VolumeControl = ({
  volume,
  showVolume,
  onVolumeChange,
  onToggleVolume,
  onMouseLeave,
  volumeControlRef,
}) => {
  return (
    <div
      ref={volumeControlRef}
      className="relative"
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`transition cursor-pointer ${showVolume ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
        onClick={onToggleVolume}
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
              onChange={(e) => onVolumeChange(e.target.value)}
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
  );
};

export default VolumeControl;
