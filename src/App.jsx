import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./pages/Home";
import { store, persistor } from "./redux/store"; 
import Login from "./pages/Login";
import DetailPage from "./pages/DetailPage";
import TafsirSurat from "./pages/TafsirSurat";
import Register from "./pages/Register";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/detail-surat/:nomorSurat" element={<DetailPage />} />
            <Route path="/tafsir-surat/:nomorSurat/:nomorAyat" element={<TafsirSurat />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
