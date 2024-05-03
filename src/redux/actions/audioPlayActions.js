export const playAudio = (audio) => {
  return { type: "PLAY_AUDIO", payload: audio };
};

export const stopAudio = () => {
  return { type: "STOP_AUDIO" };
};
