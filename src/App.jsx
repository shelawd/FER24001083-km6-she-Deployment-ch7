import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import { store, persistor } from "./redux/store"; 
import Login from "./pages/Login";
import DetailPage from "./pages/DetailPage";
import TafsirSurat from "./pages/TafsirSurat";
import Register from "./pages/Register";
import LandingPage from "./components/LandingPage";
import Protected from "./components/Protected";
import RequireAuth from "./redux/requireAuth";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider
          clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<RequireAuth inverse={true} redirectTo="/home"><Login /></RequireAuth>} />
              <Route path="/register" element={<RequireAuth inverse={true} redirectTo="/home"><Register /></RequireAuth>} />
              <Route path="/home" element={ <Protected><Home /></Protected>} />
              <Route path="/detail-surat/:nomorSurat" element={<Protected><DetailPage /></Protected>} />
              <Route path="/tafsir-surat/:nomorSurat/:nomorAyat" element={<Protected><TafsirSurat /></Protected>} />
            </Routes>
            <ToastContainer theme="colored" />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
