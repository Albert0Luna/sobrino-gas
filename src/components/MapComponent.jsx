/* eslint-disable react/prop-types */
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import gasStations from '../mocks/gasStations.json'
import 'leaflet/dist/leaflet.css'

export const MapComponent = () => {
  const position = [22.5532316, -101.1141534] // Coordenadas iniciales
  function RenderAddress ({ popupState }) {
    const stateToRender = gasStations.gas_stations.find(gasStation => gasStation.state === popupState)
    const { state, address, phone, hours } = stateToRender
    return (
        <div >
          {state}<br/>
          {address}<br/>
          {phone}<br/>
          {hours}<br/>
        </div>
    )
  }
  return (
      <MapContainer center={position} zoom={6} className='w-11/12 mx-auto h-48 lg:block lg:w-8/12 lg:h-[450px] lg:mb-5'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[20.664463, -100.399074]}>
          <Popup >
            <RenderAddress popupState='Querétaro'/>
          </Popup>
        </Marker>

        <Marker position={[19.3906594, -99.3084242]}>
          <Popup >
          <RenderAddress popupState='CDMX'/>
          </Popup>
        </Marker>

              <Marker position={[19.3252195, -100.2644329]}>
          <Popup >
          <RenderAddress popupState='Estado de México'/>
          </Popup>
        </Marker>

        <Marker position={[25.4572675, -102.4553648]}>
          <Popup >
          <RenderAddress popupState='Nuevo León'/>
          </Popup>
        </Marker>

        <Marker position={[20.8330077, -104.9224533]}>
          <Popup >
          <RenderAddress popupState='Jalisco'/>
          </Popup>
        </Marker>

      </MapContainer>
  )
}
