import React from 'react'
import '../styles/header.css'
import Modal from './Modal'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [modal, setModal] = useState(false)
  
  const location = useLocation()

  return (
  <>
  {modal ? <Modal setModal={setModal}/> : ''}
    <header className={`shadow row `}>
      <Link className={`col ${location.pathname === '/antecedentes' ? 'active' : ''}`} to='/antecedentes'>Antecedentes</Link>
      <Link className={`col ${location.pathname === '/problematica' ? 'active' : ''}`} to='/problematica'>Problematica</Link>
      <Link className={`col ${location.pathname === '/solucion' ? 'active' : ''}`} to='/solucion'>Solucion</Link>
      <Link className={`col ${location.pathname === '/modulos-propuesto' ? 'active' : ''}`} to='/modulos-propuesto'>Modulos Propuestos</Link>
      <button onClick={()=> setModal(!modal)} className='nav'>=</button>
    </header>
    </>
    

  )
}

export default Header