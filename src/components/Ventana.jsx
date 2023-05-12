import imagen2 from '../assets/P3.jpg'
import '../styles/ventana.css'
function Ventana() {
  return (
    <div className="ventana">
    <nav className="v-navegacion">
      <a>
        Estudia<span>Confort</span>
      </a>
      <div className="auth">
        <a>Iniciar Sesion</a>
        <a>Registrate</a>
      </div>
    </nav>


    <main className='main' >
      <div className='bienvenida'>
        <p className='b-titulo' >
          Tu Mejor<span>Opcion</span>
        </p>
        <p className='text-bienvenido'>Bienvenido</p>
      </div>

      <div className='secondary'>
     
      <p className='b-secondary'>
          Encuentra la habitacion <span>ideal</span> cerca de tu{" "}
          <span>escuela</span>
        </p>
        
      </div>
    </main>
  </div>
  )
}

export default Ventana