/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useId, useState } from 'react'
import { useValidation } from '../utils/useValidateContact'

function Contact () {
  const reasonId = useId()
  const { setValue: setCustomerName, error: errorName } = useValidation('name')
  const { setValue: setCustomerPhone, error: errorPhone } = useValidation('phone')
  const { setValue: setCustomerEmail, error: errorEmail } = useValidation('email')
  const { setValue: setCustomerMessage, error: errorMessage } = useValidation('message')

  const [active, setActive] = useState(false)

  const ngclass = {
    mainContainer: 'flex justify-center flex-col w-full',
    orderTitle: 'w-full text-center my-2 text-3xl tracking-wider font-semibold text-red-600',
    formContainer: 'mx-5 mb-5 text-xl tracking-wide min-h-[67vh] lg:w-full lg:px-6',
    itemContainer: 'flex flex-col mb-4',
    choseSelector: 'font-semibold',
    options: 'border border-zinc-800 rounded py-0.5 px-1 mt-1 w-full',
    input: 'border-b-2 border-red-600 w-full h-auto break-words focus:border-2 focus:roun focus:outline-none',
    serviceContainer: 'grid grid-cols-2 place-content-center gap-4 mt-8 mb-4',
    itemSelected: 'outline outline-offset-2 outline-3 outline-red-600 rounded-md bg-red-500 text-zinc-50 font-semibold tracking-wide',
    radioContainer: 'flex flex-col justify-center w-98 text-center text-lg',
    error: 'text-red-500',
    makeOrderBtn: 'text-center w-full bg-red-500 text-xl text-zinc-50 py-2 rounded border-4 border-zinc-800',
    textarea: 'flex border-2 text-base border-red-600 w-full break-words focus:border-2 focus:roun focus:outline-none'
  }

  const contactSection = [
    'Quejas y Sugerencias',
    'Atención al Cliente',
    'Ventas',
    'Soporte Técnico',
    'Colaboraciones o Asociaciones',
    'Empleo',
    'Redes Sociales',
    'Formulario de Contacto General',
    'Ubicación de Oficinas',
    'Horarios de Atención'
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    if (errorName || errorPhone || errorEmail || errorMessage) return
    const query = new FormData(event.target)
    const reason = query.get('reason')
    const customerName = query.get('customerName')
    const email = query.get('email')
    const message = query.get('message')
    const customerContact = { reason, customerName, email, message }
    if (!reason || !customerName || !email || !message) return alert('Completa todos los capos')
    console.log(customerContact)
    setActive(true)
  }

  return (
    <main className={ngclass.mainContainer} >

			<h1 className={ngclass.orderTitle}>Ponte en contacto con nosotros</h1>

			<section className='lg:flex justify-center'>
				<form onSubmit={handleSubmit} className={ngclass.formContainer}>
					<div className={ngclass.itemContainer}>
					<label htmlFor={reasonId} className={ngclass.choseSelector} >Motivo de contacto</label>
					<select name="reason" id={reasonId} className={ngclass.options}>
						{contactSection.map(section => {
						  return (
								<option key={section} value={section} >{section}</option>
						  )
						})}
					</select>
					</div>

					<div className={ngclass.itemContainer}>
						<p className={ngclass.choseSelector}>Nombre Completo</p>
						<input
							className={ngclass.input}
							type="text"
							maxLength={40}
							name='customerName'
							onChange={(event) => setCustomerName(event.target.value)}
						/>
						{errorName && <div className={ngclass.error}>{errorName}</div>}
				</div>

				<div className={ngclass.itemContainer}>
						<p className={ngclass.choseSelector}>Teléfono</p>
						<input
							className={ngclass.input}
							type="text"
							maxLength={13}
							name='numberPhone'
							onChange={(event) => setCustomerPhone(event.target.value)}
						/>
						{errorPhone && <div className={ngclass.error}>{errorPhone}</div>}
				</div>

				<div className={ngclass.itemContainer}>
						<p className={ngclass.choseSelector}>Correo Eletrónico</p>
						<input
							className={ngclass.input}
							type="email"
							maxLength={13}
							name='email'
							onChange={(event) => setCustomerEmail(event.target.value)}
						/>
						{errorEmail && <div className={ngclass.error}>{errorEmail}</div>}
				</div>

				<div className={ngclass.itemContainer}>
						<p className={ngclass.choseSelector}>Mensaje</p>
						<textarea
							className={ngclass.textarea}
							type="message"
							maxLength={700}
							name='message'
							style={{ height: '300px' }}
							onChange={(event) => setCustomerMessage(event.target.value)}
						/>
						{errorMessage && <div className={ngclass.error}>{errorMessage}</div>}
				</div>

				<button className={ngclass.makeOrderBtn}>
					Enviar
				</button>

				</form>
				{active && <div className=' flex flex-col w-full h-auto absolute top-28'>
					<div className='bg-green-500 w-10/12 mx-auto p-2 px-4 text-xl text-white font-semibold tracking-wide text-center rounded-xl'>
					<p>Mensaje enviado con éxito</p>
					<button onClick={() => setActive(false)} className='border-2 px-2 rounded-lg text-lg'>Cerrar</button>
					</div>
					</div>}
					<img src="https://www.segurconecta.com/web2017/wp-content/uploads/2022/07/contacto-segur-conecta-768x796.jpg" alt="" className='w-[420px] m-auto mr-5 h-[500px]' />
			</section>
		</main>
  )
}

export default Contact
