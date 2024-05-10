import React from 'react'
import gasStations from '../mocks/gasStations.json'
export function GridBranch () {
  const ngclass = {
    branchContainer: 'flex justify-center flex-col',
    branchSection: 'flex flex-col my-2 justify-center border-b-4 border-r-4 rounded border border-zinc-900  text-center lg:flex-row lg:mx-10 lg:py-2 lg:px-2 lg:mb-5 lg:w-15/12',
    state: 'text-lg tracking-wide font-bold lg:w-[17%]',
    phone: 'text-blue-500 font-semibold lg:w-[17%]',
    hour: 'lg:w-[40%]',
    type: 'text-red-600 lg:w-[10%]',
    address: 'lg:w-[20%]'
  }
  return (
      <section className={ngclass.branchContainer}>

            {gasStations.gas_stations.map(gasStation => {
              const { state, address, phone, hours, type } = gasStation
              return (
                <div key={state} className={ngclass.branchSection}>
                  <p className={ngclass.state}>{state}</p>
                  <p className={ngclass.address}>{address}</p>
                  <a className={ngclass.phone} href="tel:{phone}">{phone}</a>
                  <p className={ngclass.hour}>{hours}</p>
                  <p className={ngclass.type}>{type}</p>
                </div>
              )
            })}

      </section>
  )
}
