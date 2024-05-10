/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { useState, useId, useContext } from 'react'
import DataPicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import states from '../mocks/ubications.json'
import { UbicationContext } from '../contexts/ubicationContext'
import { useValidateForm } from '../utils/useValidateForm'

function Order () {
  const { state, setState, municipality, setMunicipality, setDitrection, direction } = useContext(UbicationContext)

  const choosenState = useId()
  const choosenMinicipality = useId()

  const [slectedDate, setSelectedDate] = useState(null)
  const [selectedOption, setSelectedOption] = useState('')
  const { error, checkform, modal, setError } = useValidateForm()
  const [orderInfo, setOrderInfo] = useState()

  //* Instance the max day to make a order
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 7)

  //* Instance the min day to make a order
  const minDate = new Date()
  minDate.setDate(minDate.getDate())

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    const stateLocation = data.get('selectState')
    const selectedCity = data.get('selectedCity')
    const dateToOrder = data.get('dateToOrder')
    const customerName = data.get('customerName')
    const numberPhone = data.get('numberPhone')
    const email = data.get('email')
    const address = data.get('address')
    const personThatRecieve = data.get('personThatRecieve')

    const orderDetails = { stateLocation, selectedCity, dateToOrder, customerName, numberPhone, email, address, personThatRecieve, selectedOption }
    checkform(orderDetails)
    setOrderInfo(orderDetails)
  }

  const handleDate = (date) => {
    setSelectedDate(date)
    setError({ ...error, dateToOrder: '' })
  }

  const handleSelect = (event) => {
    const selectedState = event.target.value
    setError({ ...error, stateLocation: '' })
    if (!selectedState) return
    setState(selectedState)
    const estadoEncontrado = states.estados.find(state => state.nombre === selectedState)
    setMunicipality(estadoEncontrado.municipios)
  }

  const handleDirection = (event) => {
    setError({ ...error, selectedCity: '' })
    const selectedMunicipaly = event.target.value
    if (!selectedMunicipaly) return
    setDitrection({ state, municipalyty: selectedMunicipaly })
  }

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.id)
    setError({ ...error, selectedService: '' })
  }

  const ngclass = {
    mainContainer: 'flex justify-center flex-col w-full',
    orderTitle: 'w-full text-center my-2 text-3xl tracking-wider font-semibold text-red-600',
    formContainer: 'mx-5 mb-5 text-lg tracking-wide lg:w-full lg:ml-5',
    itemContainer: 'flex flex-col mb-4',
    choseSelector: 'text-lg font-semibold',
    options: 'border border-zinc-800 rounded py-0.5 px-1 mt-1  hover:bg-zinc-50 transition delay-100 ease-out',
    input: 'border-b-2 border-red-600 w-full h-auto break-words focus:border-2 focus:roun focus:outline-none hover:bg-zinc-100 transition delay-100 ease-out ',
    serviceContainer: 'grid grid-cols-2 place-content-center gap-4 mt-8 mb-4 cursor-pointer ',
    itemSelected: 'outline outline-offset-2 outline-3 outline-red-600 rounded-md bg-red-500 text-zinc-50 font-semibold tracking-wide cursor-pointer hover:opacity-80 transition delay-100 ease-out ',
    radioContainer: 'flex flex-col justify-center w-98 text-center text-lg ',
    error: 'text-red-500 hover:bg-zinc-50 transition delay-100 ease-out ',
    makeOrderBtn: 'text-center w-full bg-red-500 text-xl text-zinc-50 py-2 rounded border-4 border-zinc-800 hover:opacity-[85%] transition delay-100 ease-out '
  }

  return (
  	<main className={ngclass.mainContainer}>
			<h1 className={ngclass.orderTitle}>Completa tu pedido</h1>
<div className='lg:flex lg:flex-row-reverse w-full justify-around '>

  <div className='w-8/12 mt-5 mx-5 h-auto bg-gradient-to-t from-red-300 to-red-600 hidden lg:flex bg-r lg:flex-col rounded-xl mb-3'>
    <p className='text-center mt-5 text-white text-4xl p-2 px-5 tracking-wider font-bold'>Tambien puedes hacer el pedido en nuestra App</p>
  <div className='m-auto h-auto w-full'>
  <img src="/mobile.png" alt="" className='w-full h-full' />
  </div>

  <div className='w-7/12 m-auto rounded'>
    <img src="https://th.bing.com/th/id/OIP.ekaW1RNoJE1jkSUjHD70uQHaEK?pid=ImgDet&rs=1" alt="" className='rounded-lg mb-10'/>
  </div>

  </div>
<form
        onSubmit={handleSubmit}
        className={ngclass.formContainer}>

				<div className={ngclass.itemContainer}>
				<label
          htmlFor={choosenState}
          className={ngclass.choseSelector}
        >
          Elija su estado
        </label>
              <select
                className={ngclass.options}
                id={choosenState}
                name='selectState'
                onChange={handleSelect}
              >
                <option selected value='' >{direction ? direction.state : '-Porfvor elija su estado-'}</option>
                {states.estados.map(({ nombre }) => {
                  return <option key={nombre} value={nombre}>{nombre}
                  </option>
                })}
              </select>
              {error && <div className={ngclass.error}>{error.stateLocation}</div>}
				</div>

				<div className={ngclass.itemContainer}>
          <label
            htmlFor={choosenMinicipality}
            className={ngclass.choseSelector}
          >
            Elija su municipio
          </label>
              <select
               className={ngclass.options}
                id={choosenMinicipality}
                name='selectedCity'
                onChange={handleDirection}
              >
                <option selected value='' >{direction ? direction.municipalyty : '-Porfvor elija su ciudad-'}</option>
                {municipality && municipality.map((nombre) => {
                  return <option key={nombre} value={nombre}>{nombre}
                  </option>
                })}
              </select>
              {error && <div className={ngclass.error}>{error.selectedCity}</div>}
				</div>

				<div className={ngclass.itemContainer}>
					<p className={ngclass.choseSelector}>Fecha de entrega</p>
					<DataPicker
            className={ngclass.input}
						onChange={handleDate}
						selected={slectedDate}
            name='dateToOrder'
						maxDate={maxDate}
						minDate={minDate}
						dateFormat='dd/MM/yyyy'
					/>
          {error && <div className={ngclass.error}>{error.dateToOrder}</div>}
				</div>

				<div className={ngclass.itemContainer}>
					<p className={ngclass.choseSelector}>Nombre completo</p>
					<input
            className={ngclass.input}
            type="text"
            maxLength={50}
            name='customerName'
            onChange={() => setError({ ...error, customerName: '' })}
          />

          {error && <div className={ngclass.error}>{error.customerName}</div>}

				</div>

				<div className={ngclass.itemContainer}>
					<p className={ngclass.choseSelector}>Telefono</p>
					<input
            className={ngclass.input + ' w-1/2'}
            type="text"
            maxLength={14}
            name='numberPhone'
            onChange={() => setError({ ...error, numberPhone: '' })}
          />
          {error && <div className={ngclass.error}>{error.numberPhone}</div>}
				</div>

				<div className={ngclass.itemContainer}>
					<p className={ngclass.choseSelector}>Correo electronico</p>
					<input
            className={ngclass.input}
            type='email'
            maxLength={30}
            name='email'
            onChange={() => setError({ ...error, email: '' })}
          />
          {error && <div className={ngclass.error}>{error.email}</div>}
				</div>

				<div className={ngclass.itemContainer}>
					<p className={ngclass.choseSelector}>Dirreción</p>
					<input
            className={ngclass.input}
            type="text"
            maxLength={40}
            name='address'
            onChange={() => setError({ ...error, address: '' })}
          />
          {error && <div className={ngclass.error}>{error.address}</div>}
				</div>

				<div className={ngclass.itemContainer}>
					<p className={ngclass.choseSelector}>Persona que recibe</p>
					<input
            className={ngclass.input}
            type="text"
            maxLength={40}
            name='personThatRecieve'
            onChange={() => setError({ ...error, personThatRecieve: '' })}
          />
          {error && <div className={ngclass.error}>{error.personThatRecieve}</div>}
				</div>

			<div className={ngclass.serviceContainer}>
        <label
          htmlFor="cil10"
          className={selectedOption === 'cil10' ? `${ngclass.itemSelected}` : ''}
        >
        <div
           className={ngclass.radioContainer}
          >
            <img width="70" height="70" src="/10tank.png" alt="bulk-gas-tanker" className='m-auto '/>
            <p>Cilindro de 10 kg</p>
          </div>
        </label>
        <input
          hidden
          type="radio"
          id="cil10"
          checked={selectedOption === 'cil10'}
          onChange={handleCheckboxChange}
        />

        <label
          htmlFor="cil20"
          className={selectedOption === 'cil20' ? `${ngclass.itemSelected}` : ''}
        >
          <div
            className={ngclass.radioContainer}
          >
            <img width="70" height="70" src="/20tank.png" alt="bulk-gas-tanker" className='m-auto'/>
            <p>Cilindro de 20 kg</p>
          </div>
        </label>
        <input
          hidden
          type="radio"
          id="cil20"
          checked={selectedOption === 'cil20'}
          onChange={handleCheckboxChange}
        />

        <label
        htmlFor="cil30"
        className={selectedOption === 'cil30' ? `${ngclass.itemSelected}` : ''}
        >
          <div
            className={ngclass.radioContainer}
          >
            <img width="70" height="70" src="/30tank.png" alt="bulk-gas-tanker" className='m-auto'/>
            <p>Cilindro de 30 kg</p>
          </div>
        </label>
        <input
          hidden
          type="radio"
          id="cil30"
          checked={selectedOption === 'cil30'}
          onChange={handleCheckboxChange}
        />

        <label
          htmlFor="stationary"
          className={selectedOption === 'stationary' ? `${ngclass.itemSelected}` : ''}
        >
          <div
            className={ngclass.radioContainer}
          >
            <img width="70" height="70" src="https://img.icons8.com/ios/50/bulk-gas-tanker.png" alt="bulk-gas-tanker" className='m-auto'/>
            <p>Estacionario</p>
          </div>
        </label>
        <input
          hidden
          type="radio"
          id="stationary"
          checked={selectedOption === 'stationary'}
          onChange={handleCheckboxChange}
        />

        {error && <div className={ngclass.error}>{error.selectedService}</div>}
			</div>

				<button
          className={ngclass.makeOrderBtn}
        >
          Realizar pedido
        </button>
			</form>
</div>

      {modal
        ? <div className='absolute w-full h-full left-0 top-28'>
              <div className='w-10/12 mx-auto h-auto bg-green-500 rounded-xl'>
              <div className='p-5 text-zinc-50 text-center text-lg'>
                <p>Pedido realizado con éxito, número de folio:</p>
                <p className='text-black font-semibold  text-lg tracking-wider mb-2'>{crypto.randomUUID().slice(0, 8)}</p>
                <div>
                  <p className='mb-1 text-red-700 font-bold '>Informcaion del pedido:</p>
                 {orderInfo &&
                  <div className='text-start grid gap-2'>
                    <p> Estado: <span className='text-black font-semibold'>{orderInfo.stateLocation}</span></p>
                    <p> Municipio: <span className='text-black font-semibold'>{orderInfo.selectedCity}</span></p>
                    <p> Fecha de entrega: <span className='text-black font-semibold'>{orderInfo.dateToOrder}</span></p>
                    <p> Nombre: <span className='text-black font-semibold'>{orderInfo.customerName}</span></p>
                    <p> Teléfono: <span className='text-black font-semibold'>{orderInfo.numberPhone}</span></p>
                    <p> Dirreción: <span className='text-black font-semibold'>{orderInfo.address}</span></p>
                    <p> Correo electrónico: <span className='text-black font-semibold'>{orderInfo.email}</span></p>
                    <p> Persona que recibe: <span className='text-black font-semibold'>{orderInfo.personThatRecieve}</span></p>
                  </div>}
                </div>
              </div>
              </div>
            </div>
        : ''}
    </main>
  )
}

export default Order
