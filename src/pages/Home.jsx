/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export const Home = () => {
  const [showDesc, setShowDesc] = useState(
    { natural: false, tarifas: false, servicios: false }
  )

  const ngclass = {
    headerTitle: 'ecotruck grid place-content-center h-[50vh] lg:h-[100vh] bg-violet-100',
    slogan: 'text-2xl w-full text-center text-white backdrop-filter backdrop-blur-sm rounded-lg bg-black/40 p-3 px-3 lg:px-8 lg:py-8 lg:rounded-3xl leading-loose font-sans font-semibold',
    sectionContainer: 'grid gap-4 py-5 grid-flow-row grid-cols-1 place-content-center w-full lg:grid-cols-2 lg:gap-y-10 lg:w-10/12 lg:place-content-center lg:m-auto',
    itemContainer: 'grid place-content-center w-full m-auto lg:h-[400px]',
    imgContainer: 'w-full flex justify-center',
    itemTitle: 'text-3xl w-full my-2 font-semibold tracking-wider text-center',
    showMoreBtn: 'text-base text-red-500 font-bold tracking-wide lg:hidden',
    itemText: 'w-10/12 text-center m-auto animate-slideTopSlow text-lg'
  }

  return (
		<main>
      <header className={ngclass.headerTitle} >
        <div className={ngclass.slogan}>
          <p className='hidden lg:flex text-4xl mb-4'>Energizando tus días con seguridad y confianza </p>
          <p className='lg:hidden'>
          {'Energizando tus días con'}  <br />
          {'seguridad y confianza.'}
           <br />
           </p>
          <Link to='/order' className=' font-bold border-2 rounded py-2 px-4  hover:animate-bounce bg-red-600 hover:bg-red-500 transition duration-300 ease-out text-lg'>Haz tu pedido Pedido</Link>
        </div>
      </header>

			<section className={ngclass.sectionContainer}>

          <div className='min-w-10/12 m-auto h-10/12 rounded-xl border border-b-8 border-r-8 border-zinc-800 hidden lg:flex '>
            <img src="https://www.factorenergia.com/wp-content/uploads/2019/03/image-2019-03-15.png" alt="" className='w-full h-[290px] p-2 rounded-xl bg-cover'/>
          </div>
        <div className={ngclass.itemContainer}>
          <div className={ngclass.imgContainer}>
          <img width="75" height="80" src="https://img.icons8.com/office/80/leaf.png" alt="leaf"/>
          </div>
          <p className={ngclass.itemTitle}>Gas <span className='text-green-500'>100</span>% Natural</p>
          <button
            className={ngclass.showMoreBtn}
            onClick={() => setShowDesc({ natural: !showDesc.natural, tarifas: false, servicios: false })}>
            Saber más
          </button>
          <p className={showDesc.natural ? ngclass.itemText : `hidden lg:flex  ${ngclass.itemText}`} >
            Puedes destacar que todo el gas natural que suministras proviene de fuentes 100% sostenibles, como la generación a partir de biomasa, energía eólica o solar. Esta característica puede atraer a clientes preocupados por el medio ambiente y que desean utilizar energía más limpia en sus hogares o negocios.
          </p>
        </div>

        <div className={ngclass.itemContainer}>
          <div className={ngclass.imgContainer}>
          <img width="75" height="80" src="https://img.icons8.com/office/80/cheap-2.png" alt="cheap-2"/>
          </div>
          <p className={ngclass.itemTitle}><span className='text-yellow-600'>Tarifas</span> Personalizadas</p>
          <button
            className={ngclass.showMoreBtn}
            onClick={() => setShowDesc({ natural: false, tarifas: !showDesc.tarifas, servicios: false })}>
            Saber más
          </button>
          <p className={showDesc.tarifas ? ngclass.itemText : `hidden lg:flex  ${ngclass.itemText}`}>
            Ofrece a tus clientes la posibilidad de elegir entre una variedad de tarifas personalizadas que se adapten a sus necesidades y presupuesto. Esto podría incluir opciones como tarifas de fin de semana, tarifas nocturnas más bajas o paquetes especiales para pequeñas empresas. La flexibilidad en la elección de tarifas puede atraer a una amplia gama de clientes.
          </p>
        </div>

          <div className='min-w-10/12 m-auto h-10/12 rounded-xl border border-b-8 border-r-8 border-zinc-800 hidden lg:flex'>
            <img src="https://d11o8pt3cttu38.cloudfront.net/wp-content/uploads/sites/27/2023/02/copy-of-featured-image-42.png" alt=""
            className='w-full h-[290px] p-2 rounded-xl '/>
          </div>

          <div className='min-w-10/12 m-auto h-10/12 rounded-xl border border-b-8 border-l-8 border-zinc-800 hidden lg:flex'>
            <img src="https://cargogas.com/wp-content/uploads/2022/03/PHOTO-2022-03-25-14-37-13-1024x683.jpg" alt="" className='w-full h-[290px] m-auto p-2 rounded-xl'/>
          </div>
        <div className={ngclass.itemContainer}>
          <div className={ngclass.imgContainer}>
          <img width="80" height="80" src="https://img.icons8.com/external-beshi-glyph-kerismaker/96/external-24-7-costumer-service-beshi-glyph-kerismaker.png" alt="external-24-7-costumer-service-beshi-glyph-kerismaker"/>
          </div>
          <p className={ngclass.itemTitle}>Servicio al Cliente <span className='text-blue-500'>24/7</span></p>
          <button
            className={ngclass.showMoreBtn}
            onClick={() => setShowDesc({ natural: false, tarifas: false, servicios: !showDesc.servicios })}>
            Saber más
          </button>
          <p className={showDesc.servicios ? ngclass.itemText : `hidden lg:flex ${ngclass.itemText}`}>
            Servicio de atención al cliente disponible las 24 horas del día, los 7 días de la semana, para brindar asistencia rápida en caso de emergencias o consultas. <br />
            Disponibilidad constante de soporte generara confianza en los clientes y hacer que se sientan seguros al elegirte como su proveedor de gas natural.
          </p>
        </div>
      </section>
		</main>
  )
}
