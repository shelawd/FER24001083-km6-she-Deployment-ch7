import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSurat } from "../redux/actions/suratActions";
import { searchSurat } from "../redux/actions/searchSuratAction";
import { useNavigate } from "react-router-dom";

import aurora from "../assets/aurora.jpg";
import Header from "../components/Header";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [searchQuery, setSearchQuery] = useState("");

  const surat = useSelector((state) => state.surat.surat.data);
  const searchResults = useSelector((state) => state.surat.searchResults);

  useEffect(() => {
    dispatch(getAllSurat());
  }, [dispatch]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value; 
    setSearchQuery(query); // menyimpan nilai pencarian di state
    dispatch(searchSurat(query)); 
  };

  // Menentukan data yang akan ditampilkan berdasarkan hasil pencarian atau semua surat
  const dataToDisplay = searchQuery.trim() !== "" ? searchResults : surat;

  return (
    <div>
      <Header />
      <div className="text-center mt-9">
        <div
          className="bg-[#912BBC] p-2 rounded-md text-white inline-block bg-cover"
          style={{
            width: "fit-content",
            backgroundImage: `url(${aurora})`,
          }}
        >
          <p className="text-5xl">{time}</p>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Cari surat..."
          value={searchQuery} 
          onChange={handleSearch}
          className="bg-white rounded-md p-2 text-black mt-6 ms-11 outline-none focus:ring-2 focus:ring-[#7360DF] focus:border-transparent"
        /> 
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {dataToDisplay && dataToDisplay.length > 0 ? (
          dataToDisplay.map((data) => (
            <div
              key={data.nomor}
              className="bg-[#E4A5FF] rounded p-4 flex justify-start items-center  "
              onClick={() => {
                navigate(`/detail-surat/${data.nomor}`);
              }}
            >
              <div className="w-1/6">
                <p className="text-[#912BBC] font-bold">{data.nomor}</p>
              </div>
              <div className="w-1/3 ml-4 cursor-pointer">
                <p className="text-sm text-[#912BBC] font-bold">
                  {data.namaLatin}
                </p>
                <p className="text-[#F0F3FF]">Ayat: {data.jumlahAyat}</p>
              </div>
              <div className="w-1/2 flex justify-end">
                <h4 className="text-xl font-bold text-[#912BBC]">
                  {data.nama}
                </h4>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-[#912BBC] font-bold mt-4">
            {searchQuery.trim() !== "" ? "Surat tidak ditemukan!" : "Memuat..."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
