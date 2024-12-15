import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoControlsProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export function VideoControls({ isMuted, onToggleMute }: VideoControlsProps) {
  return (
    <div className="absolute bottom-4 right-4 z-10">
      <button
        onClick={onToggleMute}
        className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}