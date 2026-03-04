import { Routes, Route, Navigate } from "react-router-dom";
import Tela from "./views/tela";
import Tela2 from "./views/tela2";
import Image from "../src/views/image";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Tela />} />

        <Route path="/sobre" element={<Tela2 />} />

        <Route path="/lenda/:id" element={<Image />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

