/* eslint-disable no-tabs */
import React from 'react'

function AboutUs () {
  const ngclass = {
    mainContetn: 'mx-2 flex justify-center flex-col',
    title: 'w-full text-center my-2 mb-5 text-3xl tracking-wider font-semibold text-red-600 lg:hidden',
    headerTitle: 'imgAntique grid place-content-center  h-[200px] rounded lg:h-[420px]',
    slogan: 'text-2xl w-full font-bold mb-10 text-center  text-zinc-70 backdrop-filter backdrop-blur-lg bg-white/60 p-3 leading-loose font-serif lg:text-5xl lg:mb-32',
    text: 'my-3 mx-auto text-center shadow-sm text-lg font-serif lg:w-10/12 lg:p-4 min-h-[50vh]'
  }
  return (
    <main className={ngclass.mainContetn}>
			<h1 className={ngclass.title}>
        Sobre Nosotros
      </h1>
      <header className={ngclass.headerTitle} >
        <div className={ngclass.slogan}>
          A tu servicio desde 1953
        </div>
      </header>
      <div className={ngclass.text}>

      <img className='mx-auto my-2 mt-3 w-40 lg:w-56 bg-red-600 p-2 rounded-xl' src='logo.png'/>
      <small className='lg:text-lg'>Gracias por tu preferencia</small>
      <p className='px-1 lg:p-8 lg:text-2xl leading-7 lg:leading-10 '>
				Desde 1900 Gas Sobrino es tu proveedor confiable de energía. Enraizados en la tradición familiar, comenzamos como una visión de Don Ignacio Sobrino para ofrecer soluciones energéticas seguras y sostenibles.

				Desde nuestros modestos inicios en un pequeño pueblo, hemos crecido, pero nuestros valores fundamentales siguen intactos. En Gas Sobrino, nos enorgullece brindar gas estacionario, cilindros y combustible vehicular con un enfoque en la calidad y el servicio excepcional.

				Somos más que una empresa de gas; somos una familia que se preocupa por su comunidad. Nuestro compromiso es proporcionar no solo productos confiables, sino también una conexión significativa con cada cliente. En Gas Sobrino, iluminamos hogares, impulsamos negocios y construimos un futuro más sostenible. Gracias por ser parte de nuestra historia.
			</p>
      </div>
    </main>
  )
}

export default AboutUs
