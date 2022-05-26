import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nyito from "./pages/Nyito";
import Lista from "./pages/Lista";
import Felvesz from "./pages/Felvesz";
import Hiba from "./pages/Hiba";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nyito />} />
        <Route path="lista" element={<Lista />} />
        <Route path="felvesz" element={<Felvesz />} />
        <Route path="*" element={<Hiba />} />
      </Routes>
    </BrowserRouter>
  );
}