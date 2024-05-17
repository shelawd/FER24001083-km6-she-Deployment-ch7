import React from "react";

function Footer() {
  return (
    <div className="px-14 pt-12 pb-5 bg-main text-center relative">
      <hr className="pb-6 border-black" />
      <div className="flex justify-center items-center text-sm">
        <div className="font-bold">
          Copyright &copy; 2024 |{" "}
          <span className="text-secondary">Quran</span> App
        </div>
      </div>
    </div>
  );
}

export default Footer;
