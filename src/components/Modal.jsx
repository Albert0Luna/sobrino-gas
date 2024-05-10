import React, { useContext, useId } from 'react'
import states from '../mocks/ubications.json'
import { UbicationContext } from '../contexts/ubicationContext'

export const Modal = () => {
  const { state, setState, municipality, setMunicipality, direction, setDitrection } = useContext(UbicationContext)
  const choosenState = useId()
  const choosenMunicipality = useId()

  const ngclass = {
    sectionModal: `${direction ? 'hidden' : 'absolute'}`,
    establishYourLocate: 'w-full text-red-600 tracking-wide',
    headerModal: 'absolute top-20 lg:top-48 left-[12vw] flex flex-col justify-center bg-red-600 w-[75vw] h-52 rounded shadow-xl shadow-red-500/40 animate-slideTop',
    backgroudModal: ' absolute w-full h-full opacity-70',
    label: 'align-center w-10/12 mx-auto text-white text-xl font-bold ',
    options: 'mx-auto w-10/12 h-12 whitespace-normal font-bold text-lg m-2'
  }

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
  }

  return (
    <section className={ngclass.sectionModal}>
      <div className={ngclass.backgroudModal}></div>
      <div className={ngclass.headerModal}>
        <label htmlFor={choosenState} className={ngclass.label}>Elija su estado</label>
        <select
          className={ngclass.options}
          id={choosenState}
          onChange={handleSelect}
        >
          <option value="">-Por favor elija su estado-</option>
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
          <option value="">-Por favor elija su Municipio-</option>
          {municipality && municipality.map(municipios => {
            return (
              <option key={municipios} value={municipios}>{municipios}</option>
            )
          })}
        </select>
      </div>
    </section>
  )
}
