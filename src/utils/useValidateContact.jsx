import { useRef, useState, useEffect } from 'react'

export function useValidation (type) {
  const isFirstInput = useRef(true)
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isFirstInput.current === true) {
      isFirstInput.current = false
      return
    }

    switch (type) {
      case 'name' :
        if (!value) {
          setError('Este campo es obligatorio')
        } else if (/\d/.test(value)) {
          setError('este campo solo admite numeros')
        } else {
          setError(null)
        }
        break

      case 'phone' :
        if (!value) {
          setError('Este campo es obligatorio')
        } else if (!/^\d+$/.test(value)) {
          setError('Este campo solo debe contener numeros')
        } else {
          setError(null)
        }
        break

      case 'email' :
        if (!value) {
          setError('Este campo es obligatorio')
        } else {
          setError(null)
        }
        break

      case 'message' :
        if (!value) {
          setError('Este campo es obligatorio')
        } else {
          setError(null)
        }
        break

      default:
        setError(null)
        break
    }
  }, [value])
  return { setValue, error }
}
