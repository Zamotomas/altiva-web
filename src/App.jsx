import Inicio from "./pages/Inicio.jsx";
import Sorteo from "./pages/Sorteo.jsx";

export default function App() {
  return window.location.pathname.replace(/\/$/, "") === "/Sorteo" ? <Sorteo /> : <Inicio />
}
