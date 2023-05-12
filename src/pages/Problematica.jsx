import GoBackBtn from "../components/GoBackBtn";
import "../styles/problematica.css";
import imagen from '../assets/react.svg'

function Problematica() {
  return (
    <main className="problematica ">
      <div className="contenedor">
        <h1 className="titulo">Problematica</h1>
        <p>
          Como dueño y administrador del negocio de renta de cuartos para
          estudiantes, es dificil saber quien ya pago el mes, normalmente me
          mandan una captura de la transferencia o del recibo del banco, lo que
          realmente se ha vuelto un problema ya que muchas personas se olvidan
          de mandar dichas capturas y se tiene que estar detras de los
          estudiantes para saber si ya han pagado el mes de renta.
        </p>
        <p>
          Tambien es cansado tener que revisar conversacion por conversacion.
          Tambien necesito darme a conocer como empresa ya que los carteles el
          la calle suelen ser muy anticuados y pienso que en internet puedo
          tener mas concurrencia si esa pagina se divulga con las escuelas con
          las que me recomiendan.
        </p>
      </div>
      <img className="imagen" src={imagen} alt="imagen" />
    </main>
  );
}

export default Problematica;
