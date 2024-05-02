import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailSurat } from "../redux/actions/suratActions";
import { useNavigate } from "react-router-dom";
import { playAudio, stopAudio } from "../redux/reducers/audioPlayReducers";

function DetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nomorSurat } = useParams();
  const suratDetail = useSelector((state) => state.surat.suratDetail);
  const { isPlaying, selectedAudio } = useSelector((state) => state.audio);
//   console.log("detail  ", suratDetail);

  useEffect(() => {
    dispatch(getDetailSurat(nomorSurat));
  }, [dispatch, nomorSurat]);

  const [selectedAyat, setSelectedAyat] = useState("");
  const handleAyatChange = (event) => {
    setSelectedAyat(event.target.value);
  };

  const handleAudioPlay = (audioSrc) => {
    dispatch(playAudio(audioSrc));
  };

  const handleAudioStop = () => {
    dispatch(stopAudio());
  };

  return (
    <div className="container mt-5 mx-auto max-w-3xl">
      {suratDetail && suratDetail.data && (
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="text-3xl font-bold text-purple-700">
            {suratDetail.data.nama}
          </h2>
          <h2 className="text-xl text-[#912BBC]">
            {suratDetail.data.namaLatin}
          </h2>
          <div className="flex flex-row">
            <p className="mb-2 text-[#912BBC]">
              {suratDetail.data.tempatTurun}-
            </p>
            <p className="mb-2 text-[#912BBC]">{suratDetail.data.jumlahAyat}</p>
          </div>
        </div>
      )}
      {suratDetail && suratDetail.data && (
        <div
          className="mb-8"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            className="mb-2"
            style={{ color: "#333", textAlign: "justify" }}
            dangerouslySetInnerHTML={{
              __html: suratDetail.data.deskripsi,
            }}
          />
        </div>
      )}

      {/* Render Teks Arab */}
      <div className="mb-8">
        <h2 className="text-center text-2xl font-bold mb-6 text-purple-700">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </h2>
        <select
          value={selectedAyat}
          onChange={handleAyatChange}
          className="block appearance-none bg-white border  hover:border-gray-500 px-4 py-2 mb-3 pr-8 rounded shadow leading-tight outline-none focus:ring-2  focus:border-transparent"
          style={{ maxWidth: "150px" }}
        >
          <option value="">Pilih Ayat</option>
          {suratDetail &&
            suratDetail.data &&
            suratDetail.data.ayat.map((ayat) => (
              <option key={ayat.nomorAyat} value={ayat.nomorAyat}>
                Ayat {ayat.nomorAyat}
              </option>
            ))}
        </select>
        {/* Render Teks Arab sesuai dengan ayat yang dipilih */}
        <div className="container mt-5 mx-auto max-w-3xl">
          {!selectedAyat && (
            <div>
              {suratDetail &&
                suratDetail.data &&
                suratDetail.data.ayat.map((ayat) => (
                  <div key={ayat.nomorAyat} className="mb-4">
                    <div
                      className="p-4 rounded-lg"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <p className="mb-2">
                        <strong>Ayat {ayat.nomorAyat}</strong>
                      </p>
                      <p className="text-right text-2xl mb-2">
                        {ayat.teksArab}
                      </p>
                      <p className="mb-2 italic mt-8">{ayat.teksLatin}</p>
                      <p className="mb-2">Artinya: {ayat.teksIndonesia}</p>
                      <button
                        onClick={() => {
                          navigate(
                            `/tafsir-surat/${nomorSurat}/${ayat.nomorAyat}`
                          );
                        }}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Tafsir Surat
                      </button>
                      <audio controls>
                        <source
                          src={
                            ayat.audio[Object.keys(ayat.audio)[0]]
                          }
                          type="audio/mpeg"
                        />
                      </audio>
                    </div>
                  </div>
                ))}
            </div>
          )}
          {selectedAyat && (
            <div className="mb-4">
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p className="mb-2">
                  <strong>
                    {suratDetail.data.ayat[selectedAyat - 1].nomorAyat}
                  </strong>
                </p>
                <p className="text-right text-2xl mb-2">
                  {suratDetail.data.ayat[selectedAyat - 1].teksArab}
                </p>
                <p className="mb-2 italic mt-8">
                  {suratDetail.data.ayat[selectedAyat - 1].teksLatin}
                </p>
                <p className="mb-2">
                  Artinya:{" "}
                  {suratDetail.data.ayat[selectedAyat - 1].teksIndonesia}
                </p>
                <button
                  onClick={() => {
                    navigate(`/tafsir-surat/${nomorSurat}/${ayat.nomorAyat}`);
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Tafsir Surat
                </button>
                <audio controls>
                  <source
                    src={
                      suratDetail.data.ayat[selectedAyat - 1].audio[
                        Object.keys(suratDetail.data.ayat[selectedAyat - 1].audio)[0]
                      ]
                    }
                    type="audio/mpeg"
                  />
                </audio>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
