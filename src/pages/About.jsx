import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
        <Header/>
    
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">About</h1>
      <p className="text-lg mb-4">
        Ini adalah sebuah aplikasi Alquran yang bertujuan untuk memudahkan pengguna dalam membaca dan mempelajari Alquran secara digital.
      </p>
      <p className="text-lg mb-4">
        Aplikasi ini dilengkapi dengan berbagai fitur seperti pencarian ayat, penandaan, dan pengaturan tampilan yang dapat disesuaikan dengan kebutuhan pengguna.
      </p>
      <p className="text-lg mb-4">
        Semoga aplikasi ini dapat bermanfaat bagi Anda dalam menjelajahi dan memahami Alquran dengan lebih baik.
      </p>
      <Footer />
    </div>
    </div>
  );
}

export default About;
