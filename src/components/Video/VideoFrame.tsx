import React from 'react';

interface VideoFrameProps {
  url: string;
}

export function VideoFrame({ url }: VideoFrameProps) {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      playsInline
      loop
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}