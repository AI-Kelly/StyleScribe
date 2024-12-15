import { VIDEO_STATES } from './constants';

export type VideoState = keyof typeof VIDEO_STATES;

export interface VideoConfig {
  url: string;
  title: string;
}