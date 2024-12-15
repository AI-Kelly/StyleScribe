import type { VideoState } from './types';

const videos: Record<VideoState, string> = {
  initial: 'https://48007552.fs1.hubspotusercontent-na1.net/hubfs/48007552/intro.mp4',
  submitted: 'https://48007552.fs1.hubspotusercontent-na1.net/hubfs/48007552/processing.mp4',
  completed: 'https://48007552.fs1.hubspotusercontent-na1.net/hubfs/48007552/complete.mp4'
};

export function getVideoUrl(state: VideoState): string {
  return videos[state];
}