'use strict'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes/routes'
import { Modal } from './Modal'

export function Header () {
  const [showNav, setShowNav] = useState(false)

  const handdleNav = () => {
    setShowNav(!showNav)
  }

  const ngclass = {
    header: 'bg-red-600 h-auto z-10 fixed w-full',
    sectionNav: 'flex flex-col lg:flex-row justify-between lg:mx-4',
    title: 'text-zinc-50 font-bold text-3xl my-auto lg:mx-auto',
    menuCont: 'flex justify-center',
    ulContainer: 'flex flex-col bg-slate-100 animate-slideTop z-0 lg:flex-row lg:items-center lg:bg-transparent lg:text-slate-50 lg:justify-between lg:text-center',
    listLink: 'py-2 px-3 border text-xg font-semibold w-full tracking-widest lg:border-none lg:hover:bg-red-700 transition delay-100 ease lg:mx-5'
  }

  return (
      <header className={ngclass.header}>
        {/* CHOOSE THE DIRRECTION */}
        < Modal />
        {/* HEADER */}
          <section className={ngclass.sectionNav}>
              <div className='flex justify-between lg:w-auto items-center mx-3 my-1'>
                <Link to='/' onClick={() => setShowNav(false)} className={ngclass.title} >
                  <img src="/logo.png" alt="logo" className='w-24 lg:w-28 self-center justify-center' />
                </Link>
                  <button
                    className= {ngclass.menuCont}
                    onClick={handdleNav}
                  >
                    <img
                      className='text-zinc-50 lg:hidden self-center'
                      width="30"
                      src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png"
                      alt="menu--v1"
                    />
                  </button>
                </div>
                  <nav className={`${showNav ? 'text-end' : 'hidden'} bg-zinc-50 lg:bg-transparent lg:flex lg-flex-col`}>
                    <ul className={ngclass.ulContainer}>
                      {
                        routes.map(routes => {
                          const { path, route } = routes
                          return (
                            <Link
                              key={route}
                              to={path}
                              onClick={() => setShowNav(false)}
                            >
                              <li className={ngclass.listLink}>{route}</li>
                            </Link>
                          )
                        })
                      }
                    </ul>
                  </nav>
          </section>
        </header>
  )
}
