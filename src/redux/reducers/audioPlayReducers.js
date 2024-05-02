import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  selectedAudio: null,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    playAudio: (state, action) => {
      state.isPlaying = true;
      state.selectedAudio = action.payload;
    },
    stopAudio: (state) => {
      state.isPlaying = false;
      state.selectedAudio = null;
    },
  },
});

export const { playAudio, stopAudio } = audioSlice.actions;

export default audioSlice.reducer;
