import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTafsirSurat } from "../redux/actions/suratActions";

import Header from "../components/Header";
import Footer from "../components/Footer";

function TafsirSurat() {
    const dispatch = useDispatch();
    const { nomorSurat, nomorAyat } = useParams();

    const tafsirSurat = useSelector((state) => state.surat.tafsirSurat);
    console.log('tafsir  ', tafsirSurat);

    useEffect(() => {
        dispatch(getTafsirSurat(nomorSurat, nomorAyat));
    }, [dispatch, nomorSurat,  nomorAyat]);

    const tafsirAyat = tafsirSurat?.data?.tafsir?.filter(item => item.ayat === parseInt(nomorAyat));

    return (
        <div>
            <Header />
        

        <div className="container mt-5 mx-auto max-w-3xl">
            {tafsirAyat && tafsirAyat.map((tafsirItem, index) => (
                <div className="flex flex-col justify-center items-center mb-8 mt-10" key={index}>
                    <div style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}>
                        <p className="font-bold">Ayat {tafsirItem.ayat}</p>
                        <p className="text-justify">{tafsirItem.teks}</p>
                    </div>
                </div>
            ))}
        </div>
        <Footer />
        </div>
    );
}

export default TafsirSurat;