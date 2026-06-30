# Audio assets

## heygen-narration.wav

Primary production voiceover track. Extracted from the HeyGen avatar export so the muted avatar video and standalone audio stay in sync.

`../index.html` uses this file as the audible narration. Keep the avatar video muted in HyperFrames.

## narration.wav

Legacy timing track retained for reference only.

## avatar.mp4 (HeyGen)

1. Use the same script from `../narration.txt` in HeyGen with the selected avatar + Spanish voice
2. Export MP4 → `audio/avatar.mp4`
3. Extract audio to `audio/heygen-narration.wav`
4. Keep the `<video>` muted and the `<audio>` pointed at `audio/heygen-narration.wav`

PiP appears in beats 1 and 5 as a tight circular face crop in the bottom-right corner.
