import { useMemo } from 'react';
import { getVideoUrl } from './videoConfig';
import type { VideoState } from './types';

export function useVideoState(state: VideoState): string {
  return useMemo(() => getVideoUrl(state), [state]);
}