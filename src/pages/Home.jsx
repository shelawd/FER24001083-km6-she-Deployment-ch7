import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSurat, searchSurat } from "../redux/actions/suratActions";
import { useNavigate } from "react-router-dom";

import aurora from "../assets/aurora.jpg";
// import Header from "../../components/Header";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const surat = useSelector((state) => state.surat.surat.data);
  // const surat = useSelector((state) => state.surat.searchResults);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getAllSurat());
  }, [dispatch]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(searchSurat(query.toLowerCase())); 
  };



  return (
    <div>
      {/* <Header /> */}
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
          onChange={handleSearchInputChange}
        /> 
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {surat && surat.length > 0 ? (
          surat.map((data) => (
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
            Surat tidak ditemukan!
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
