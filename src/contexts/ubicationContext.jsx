/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { createContext, useState } from 'react'

export const UbicationContext = createContext()

export const UbicationProvider = ({ children }) => {
  const [state, setState] = useState(null)
  const [municipality, setMunicipality] = useState()
  const [direction, setDitrection] = useState()

  return (
			<UbicationContext.Provider value={{
			  setState,
			  state,
			  setMunicipality,
			  municipality,
			  direction,
			  setDitrection
			}}>
				{children}
			</UbicationContext.Provider>
  )
}
