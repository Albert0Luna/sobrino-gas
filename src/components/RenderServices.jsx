/* eslint-disable react/prop-types */
import React from 'react'

export function RenderService ({ img, service }) {
  const { desc, title, image } = img.find(item => item.title === service)

  const ngclass = {
    sectionContainer: 'grid place-content-center border-b-4 border-r-4 rounded border border-zinc-900 min-h-[51vh] lg:w-8/12',
    title: 'text-center my-2 text-2xl tracking-wider font-bold',
    desc: 'text-center mb-1 mx-2 text-lg',
    img: 'w-11/12 mx-auto mb-1 lg:w-8/12'
  }

  return (
          <section className={ngclass.sectionContainer}>
              <h1 className={ngclass.title}>{title}</h1>
              <p className={ngclass.desc}>{desc}</p>
              <img className={ngclass.img} src={image} alt="" />
          </section>
  )
}
