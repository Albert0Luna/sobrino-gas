import { useState } from 'react'

export function useValidateForm () {
  const [error, setError] = useState({})
  const [modal, setModal] = useState(false)

  const checkform = (orderDetails) => {
    const { stateLocation, selectedCity, dateToOrder, customerName, numberPhone, email, address, personThatRecieve, selectedOption } = orderDetails
    if (!stateLocation) {
      setError({ ...error, stateLocation: 'Agregue el estado' })
      return
    }

    if (!selectedCity) {
      setError({ ...error, selectedCity: 'Agregue el municipio' })
      return
    }

    if (!dateToOrder) {
      setError({ ...error, dateToOrder: 'Establesca una fecha para la entrega' })
      return
    }

    if (!customerName || /\d/.test(customerName)) {
      setError({ ...error, customerName: 'Introdusca un nombre válido' })
      return
    }

    if (!numberPhone || numberPhone.length < 8 || !/\d/.test(numberPhone)) {
      setError({ ...error, numberPhone: 'Introdusca un numero telefonico válido' })
      return
    }

    if (!email) {
      setError({ ...error, email: 'Introdusca un email válido' })
      return
    }

    if (!address || address.length < 5) {
      setError({ ...error, address: 'Introdusca una dirreción válida' })
      return
    }

    if (!personThatRecieve || /\d/.test(personThatRecieve)) {
      setError({ ...error, personThatRecieve: 'Introdusca un nombre válido' })
      return
    }

    if (!selectedOption) {
      setError({ ...error, selectedService: 'Elija un producto' })
      return
    }
    console.log(orderDetails)
    setError(null)
    setModal(true)
  }

  return { error, checkform, modal, setError }
}
