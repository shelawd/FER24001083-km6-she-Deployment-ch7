import axios from "axios";
import { setSearchResults } from "../reducers/suratReducers";

export const searchSurat = (query) => async (dispatch, getState) => {
    try {
      const suratData = getState().surat.surat.data;
      const lowercaseQuery = query.toLowerCase();
  
      const searchResults = suratData.filter((surat) => {
        return (
          surat.nama.toLowerCase().includes(lowercaseQuery) ||
          surat.namaLatin.toLowerCase().includes(lowercaseQuery)
        );
      });
  
      dispatch(setSearchResults(searchResults));
    } catch (error) {
      console.error("Error while searching surat:", error);
      // Tindakan penanganan kesalahan
    }
  };