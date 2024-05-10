/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { RenderService } from '../components/RenderServices'

function Services () {
  const [service, setService] = useState('ESTACIONARIO')
  const img = [
    {
      title: 'ESTACIONARIO',
      desc: 'Nuestro servicio de suministro de gas estacionario, comprende los sectores Residencial, Industrial, Comercial y de Servicios. Cada una de nuestras Unidades Autotanques, cuenta con sistemas computarizados de medición que garantizan la entrega exacta del producto.',
      image: 'http://gasexpressnieto.com/img/interior_estacionario.png'
    },
    {
      title: 'CILINDROS',
      desc: 'Más de 45,000 Cilindros Portátiles de diferentes tamaños puestos a su servicio para el consumo Doméstico, Comercial y de Servicios, los cuales cumplen con los más modernos sistemas de llenado y sellado para garantizar que el producto llegue con su carga completa. Nuestro elevado estándar de calidad en el manejo del producto, le brinda tranquilidad y seguridad.',
      image: 'http://gasexpressnieto.com/img/interior_cilindro.png'
    },
    {
      title: 'VEHICULAR',
      desc: 'Estaciones de carburación modernas y funcionales para el suministro a vehículos automotores, construidas con las más altas normas de seguridad nacionales e internacionales.',
      image: 'http://gasexpressnieto.com/img/interior_vehicular.png'
    }
  ]

  const handleButtonService = (event) => {
    const btnClicked = event.target.textContent
    setService(btnClicked)
  }

  const ngclass = {
    title: 'w-full text-center mt-3 mb-3 text-3xl tracking-wider font-semibold text-red-600 lg:hidden',
    titleOptions: 'font-bold p-2 mb-2 border-2 text-2xl border-zinc-900 rounded transition delay-100 ease-out hover:opacity-80'
  }

  return (
    <>
      <section className='flex flex-col mx-3 mb-5'>

        <h1 className={ngclass.title}>
          Servicios
        </h1>

        <h3 className='lg:flex hidden border mb-5 w-full h-[87vh] m-auto '>
          <img src="/redTruck.png" alt="" className='rounded shadow-lg'/>
        </h3>

		<div className='lg:flex justify-center'>
			{/* Buttons */}
			<div className='flex flex-col lg:mr-5'>
				{img.map(item => {
				  return (
						<button
						key={item.title}
						className={`${item.title === service ? 'bg-red-500 text-zinc-50' : 'bg-transparent hover:bg-zinc-100'} ${ngclass.titleOptions}`}
						onClick={handleButtonService}
						>
							{item.title}
						</button>
				  )
				})}
			</div>
			{/* Service */}
			<RenderService img={img} service={service}/>
		</div>
			</section>
    </>
  )
}

export default Services
