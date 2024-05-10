'use strict'
import React, { useId, useContext, useState } from 'react'
import states from '../mocks/ubications.json'
import { UbicationContext } from '../contexts/ubicationContext'
import { Link } from 'react-router-dom'

export function Header () {
  const { state, setState, municipality, setMunicipality, direction, setDitrection } = useContext(UbicationContext)
  const choosenState = useId()
  const choosenMunicipality = useId()
  const [showchangeDirection, setShowchangeDirection] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const handleSelect = (event) => {
    const selectedState = event.target.value
    if (!selectedState) return
    setState(selectedState)
    const estadoEncontrado = states.estados.find(state => state.nombre === selectedState)
    setMunicipality(estadoEncontrado.municipios)
  }

  const handleDirection = (event) => {
    const selectedMunicipaly = event.target.value
    if (!selectedMunicipaly) return
    setDitrection({ state, municipalyty: selectedMunicipaly })
    setShowchangeDirection(false)
  }

  const handleUbication = () => {
    setShowchangeDirection(!showchangeDirection)
  }

  const handdleNav = () => {
    setShowNav(!showNav)
  }

  const ngclass = {
    header: 'bg-red-600 h-auto z-10',
    sectionModal: 'flex justify-center',
    establishYourLocate: `w-full text-zinc-50 tracking-wide ${direction ? 'hidden' : ''}`,
    headerModal: `absolute top-20 lg:top-48 left-[12vw] flex flex-col justify-center bg-red-600 w-[75vw] h-52 rounded shadow-xl shadow-red-500/40 animate-slideTop ${showchangeDirection ? '' : 'hidden'}`,
    backgroudModal: `bg-slate-300 absolute w-full h-full opacity-70 ${showchangeDirection ? '' : 'hidden'}`,
    label: 'align-center w-10/12 mx-auto text-white text-xl font-bold ',
    options: 'mx-auto w-10/12 h-12 whitespace-normal font-bold text-lg m-2',
    sectionNav: 'inline-block w-full',
    title: 'text-zinc-50 font-bold text-3xl my-auto pl-5 lg:mx-auto lg:my-1',
    menuCont: 'flex w-20 h-12 justify-end pr-5',
    ulContainer: 'grid bg-slate-100 animate-slideTop z-0 lg:flex lg:justify-around lg:w-full lg:text-center',
    listLink: 'py-2 border text-xg font-semibold w-full tracking-widest lg:text-lg hover:bg-zinc-200 transition delay-100 ease pr-5'
  }

  return (
      <header className={ngclass.header}>
        {/* CHOOSE THE DIRRECTION */}
          <section className={ngclass.sectionModal}>
          {direction
            ? <button
              onClick={handleUbication}
              className={ngclass.establishYourLocate}>
                <span className='hidden md:flex'>Tu ubicación es:</span> {direction.municipalyty}, {direction.state}
              </button>
            : <button onClick={handleUbication} className={ngclass.establishYourLocate + ' animate-pulse'} >Establesca su ubicacion</button>}
            <div className={ngclass.backgroudModal}></div>
            <div className={ngclass.headerModal}>
              <label htmlFor={choosenState} className={ngclass.label}>Elija su estado</label>
              <select
                className={ngclass.options}
                id={choosenState}
                onChange={handleSelect}
              >
                <option value="">-Porfvor elija su estado-</option>
                {states.estados.map(({ nombre }) => {
                  return <option key={nombre} value={nombre}>{nombre}
                  </option>
                })}
              </select>

              <label htmlFor={choosenMunicipality} className={ngclass.label}>Elija su Municipio</label>
              <select
                className={ngclass.options}
                id={choosenMunicipality}
                onChange={handleDirection}
              >
                <option value="">-Porfvor elija su Municipio-</option>
                {municipality && municipality.map(municipios => {
                  return (
                    <option key={municipios} value={municipios}>{municipios}</option>
                  )
                })}
              </select>
            </div>
          </section>
        {/* HEADER */}
          <section className={ngclass.sectionNav}>
              <div className='flex justify-between w-full'>
                <Link to='/' onClick={() => setShowNav(false)} className={ngclass.title} >
                  <img src="/logo.png" alt="logo" className='w-28 lg:w-36' />
                </Link>
                  <button
                    className= {ngclass.menuCont}
                    onClick={handdleNav}
                  >
                  <img
                    className='my-auto text-zinc-50 lg:hidden'
                    width="30"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png"
                    alt="menu--v1"
                  />
                  </button>
              </div>

              <nav className={`${showNav ? 'text-end' : 'hidden lg:flex lg:flex-row'} bg-zinc-50 lg:bg-transparent`}>
                  <ul className={ngclass.ulContainer}>

                      <Link to='/' onClick={() => setShowNav(false)} className='w-full'>
                        <li className={ngclass.listLink}>Inicio</li>
                      </Link>

                      <Link to='/order' onClick={() => setShowNav(false)} className='w-full'>
                      <li className={ngclass.listLink}>
                        Pedido
                      </li>
                      </Link>

                    <Link to='/services' onClick={() => setShowNav(false)} className='w-full'>
                      <li className={ngclass.listLink}>
                        Servicios
                      </li>
                    </Link>

                      <Link to='/point-of-sale' onClick={() => setShowNav(false)} className='w-full'>
                        <li className={ngclass.listLink}>
                          Punto de venta
                        </li>
                      </Link>

                      <Link to='/about' onClick={() => setShowNav(false)} className='w-full'>
                        <li className={ngclass.listLink}>
                          Nosotros
                        </li>
                      </Link>

                      <Link to='/contact' onClick={() => setShowNav(false)} className='w-full'>
                        <li className={ngclass.listLink}>
                          Contactanos
                        </li>
                      </Link>

                  </ul>
                </nav>
          </section>
        </header>
  )
}
