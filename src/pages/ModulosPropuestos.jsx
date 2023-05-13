import "../styles/modulos-propuestos.css";
import Ventana from "../components/Ventana";

function ModulosPropuestos() {
  return (
    <section className="modulos">
      <Ventana />
      <div className="content-page">
        <h1 className="text-page">Ejemplo de aplicacion</h1>
        <p className="text-page">
          Una app minimalista e intituiva para cualquier nuevo usuario{" "}
        </p>
      </div>
    </section>
  );
}

export default ModulosPropuestos;
