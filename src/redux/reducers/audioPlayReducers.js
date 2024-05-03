const initialState = {
  audioSrc: null // Menggunakan state untuk menyimpan src dari audio yang diputar
};

const audioPlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_AUDIO":
      return { ...state, audioSrc: action.payload }; // Memulai pemutaran audio dengan menyimpan src audio
    case "STOP_AUDIO":
      return { ...state, audioSrc: null }; // Menghentikan audio dengan mengosongkan src
    default:
      return state;
  }
};

export default audioPlayReducer;
