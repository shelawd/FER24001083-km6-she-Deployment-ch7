import axios from "axios";
import { setAllSurat, setDetailSurat, setTafsirSurat, setSearchResults } from "../reducers/suratReducers";

export const getAllSurat = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://equran.id/api/v2/surat`
        );
        dispatch(setAllSurat(response.data));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            alert(error.message);
            return;
        }
        alert(error.message);
    }
};


export const getDetailSurat = (nomor) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://equran.id/api/v2/surat/${nomor}`
        );
        dispatch(setDetailSurat(response.data));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            alert(error.message);
            return;
        }
        alert(error.message);
    }
};

export const getTafsirSurat = (nomorSurat, nomorAyat) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://equran.id/api/v2/tafsir/${nomorAyat}`
        );
        dispatch(setTafsirSurat(response.data));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            alert(error.message);
            return;
        }
        alert(error.message);
    }
};


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


