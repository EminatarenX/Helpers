import GoBackBtn from "../components/GoBackBtn"
import '../styles/antecedentes.css'
import imagen from '../assets/react.svg'

function Antecedentes() {
  return (
    <main className="antecedentes">
      
      <div className="datos-empresa">
        <p className="nombre">Estudia Confort</p>
        <p>Blvd. Presa la Angostura #575</p>
        <p className="texto">Renta de habitaciones para estudiantes.
          Cada habitacion cuenta con los servicios
          basicos que necesita un estudiante en su
          diario vivir, como agua, luz e internet; que 
          son indespensables para la universidad.
          Ademas, cada habitacion cuenta con cama, muebles
          para ropa, baño y escritorio para el estudio personal.
          Tambien cuentan con un area para la cocina de cada estudiante.</p>
        <p className="duenio">Guadalupe Nataren Orozco.
        </p>
      
        <p>tel: 961 253 2175</p>
      </div>
      <img className="imagen" src={imagen} alt="imagen-empresa" />
    </main>
  )
}

export default Antecedentes