import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTafsirSurat } from "../redux/actions/suratActions";

import Header from "../components/Header";

function TafsirSurat() {
    const dispatch = useDispatch();
    const { nomorSurat, nomorAyat } = useParams();

    const tafsirSurat = useSelector((state) => state.surat.tafsirSurat);
    const { isdarkMode } = useSelector((state) => state.darkMode);
    console.log('tafsir  ', tafsirSurat);

    useEffect(() => {
        dispatch(getTafsirSurat(nomorSurat, nomorAyat));
    }, [dispatch, nomorSurat,  nomorAyat]);

    const tafsirAyat = tafsirSurat?.data?.tafsir?.filter(item => item.ayat === parseInt(nomorAyat));

    return (
        <div className={isdarkMode ? "dark-mode" : "light-mode"}>
            <Header />
        

        <div className="card-detail container mt-20 mx-auto max-w-3xl p-3 rounded-lg">
            {tafsirAyat && tafsirAyat.map((tafsirItem, index) => (
                <div className="card-detail flex flex-col justify-center items-center mb-8 mt-10" key={index}>
                    
                        <p className="font-bold">Ayat {tafsirItem.ayat}</p>
                        <p className="text-justify">{tafsirItem.teks}</p>
                    </div>
                
            ))}
        </div>
        </div>
    );
}

export default TafsirSurat;