/* eslint-disable no-tabs */
import React from 'react'

function NoticeOfPrivacity () {
  const instaceTimeFormat = () => {
    const rtf = new Intl.RelativeTimeFormat('es', {
      localeMatcher: 'best fit',
      numeric: 'always',
      style: 'long'
    })

    const update = new Date('September 30, 2023')
    const currentDate = new Date()

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1 // Note: Months are zero-based
    const day = currentDate.getDate()

    const current = new Date(`${month} ${day}, ${year}`)

    const totalMilliseconds = current - update
    const totalDays = totalMilliseconds / (1000 * 60 * 60 * 24)

    return rtf.format(-totalDays, 'day')
  }

  const ngclass = {
    main: 'mx-2',
    title: 'w-full text-center my-2 text-3xl tracking-wider font-semibold text-red-600',
    section: 'min-h-[71vh] w-full text-lg mx-auto lg:w-9/12 lg:leading-8 lg:text-xl',
    subtitle: 'text-center text-xl tracking-wide font-bold'
  }
  return (
		<main className={ngclass.main}>
		<header className={ngclass.title}>
        <h1>Aviso de Privacidad</h1>
    </header>

    <section className={ngclass.section}>
    <img className='mx-auto my-2 mt-3 w-40 bg-red-600 p-2 rounded-xl' src='logo.png'/>
        <p className='my-2' >Gas Sobrino, con domicilio en Av. San patricio, Querétaro, Querétaro, declara ser responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>

        <ol>
            <li className='my-2'>
                <strong>Datos Recabados:</strong> La información que podemos recopilar incluye, pero no se limita a, su nombre, dirección, número de teléfono, dirección de correo electrónico y detalles de facturación. Esta información se recopila con el propósito de brindarle un mejor servicio y personalizar su experiencia con nosotros.

Estamos comprometidos a utilizar sus datos de manera responsable y solo para los fines específicos para los cuales fueron recopilados. Su privacidad es de suma importancia para nosotros, y tomamos medidas para garantizar la seguridad y confidencialidad de su información personal.

Para obtener más detalles sobre cómo manejamos sus datos, lea nuestro aviso de privacidad completo en [enlace al aviso de privacidad]. Si tiene alguna pregunta o inquietud sobre la recopilación de datos, no dude en ponerse en contacto con nuestro equipo de privacidad en [correo electrónico de contacto]. Agradecemos su confianza en [Nombre de la Empresa].
            </li>
        </ol>

        <p>Fecha de actualización: 30 de septiembre de 2023, ({instaceTimeFormat()})</p>

        <footer className='my-5 text-center border-2 border-zinc-200'>
            <p className='font-bold'>Gas Sobrino</p>
            <p>Av. San patricio, Querétaro, Querétaro</p>
            <a className='text-blue-500 tracking-wider font-bold' href="tel:(123) 456-7890">(123) 456-7890</a>
						<p>contacto@empresa-ejemplo.com</p>
        </footer>
    </section>
		</main>
  )
}

export default NoticeOfPrivacity
