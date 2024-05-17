import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
        <Header/>
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-semibold mb-4">Halo, Selamat Datang!</h1>
          <p className="text-lg mb-4">
            Ini adalah sebuah website Alquran yang bertujuan untuk memudahkan teman-teman dalam membaca dan mempelajari Alquran secara digital.
            <br /> Tujuan saya membuat website ini adalah sebagai tugas Studi Independen Batch 6 di Binar Academy.
            <br /> Semoga website yang saya buat dapat bermanfaat di kemudian hari.
          </p>
          
          <Footer />
        </div>
    </div>
  );
}

export default About;
