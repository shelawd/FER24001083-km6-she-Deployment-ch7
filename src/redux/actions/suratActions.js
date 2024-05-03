import axios from "axios";
import { setAllSurat, setDetailSurat, setTafsirSurat } from "../reducers/suratReducers";

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

export const getTafsirSurat = (nomorAyat) => async (dispatch) => {
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





