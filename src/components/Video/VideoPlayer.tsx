import React from 'react';
import { VideoControls } from './VideoControls';
import { useVideoControls } from './useVideoControls';
import { useVideoState } from './useVideoState';
import { MarketingCTA } from '../Marketing/MarketingCTA';
import type { VideoState } from './types';

interface VideoPlayerProps {
  state: VideoState;
}

export function VideoPlayer({ state }: VideoPlayerProps) {
  const { isMuted, toggleMute } = useVideoControls();
  const videoUrl = useVideoState(state);

  return (
    <div className="lg:sticky lg:top-6 space-y-8">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-soft relative">
        <video
          key={state}
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          playsInline
          controls
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <VideoControls 
          isMuted={isMuted}
          onToggleMute={toggleMute}
        />
      </div>
      <MarketingCTA />
    </div>
  );
}