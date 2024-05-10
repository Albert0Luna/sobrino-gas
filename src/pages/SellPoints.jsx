/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
import React from 'react'
import { GridBranch } from '../components/GridBranch'
import { MapComponent } from '../components/MapComponent'

function SellPoints () {
  const ngclass = {
    title: 'w-full text-center my-2 text-3xl tracking-wider font-semibold text-red-600'
  }
  return (
    <>
      <h1 className={ngclass.title}>Puntos de venta </h1>
      <GridBranch />
      <MapComponent />
    </>
  )
}

export default SellPoints
