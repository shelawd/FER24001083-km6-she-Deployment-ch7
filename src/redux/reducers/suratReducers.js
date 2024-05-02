import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    surat: [],
    suratDetail: null,
    tafsirSurat: null,
    searchResults: [],
};

const suratSlice = createSlice({
    name: "surat",
    initialState,
    reducers: {
        setAllSurat: (state, action) => {
            state.surat = action.payload;
        },
        setDetailSurat: (state, action) => {
            state.suratDetail = action.payload;
        },
        setTafsirSurat: (state, action) => {
            state.tafsirSurat = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        
    },
});

export const { setAllSurat, setDetailSurat, setTafsirSurat, setSearchResults } = suratSlice.actions;

export default suratSlice.reducer;
