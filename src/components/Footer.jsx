import React from 'react'
import { Link } from 'react-router-dom'
export function Footer () {
  const ngclass = {
    footerContainer: 'grid grid-row-3 place-content-center bg-red-600 relative bottom-0',
    logoLetter: 'w-12 mx-auto my-1'
  }
  return (
      <footer className={ngclass.footerContainer}>

        <Link to='/' className={ngclass.logoLetter} >
        <img src="/logoLetter.png" alt="" className={ngclass.logoLetter}/>
        </Link>

         <div className='flex'>

          <Link to="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
          </Link>

          <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/twitterx--v1.png" alt="twitterx--v1"/>
          </Link>

          <Link to="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
          </Link>

         </div>
          <Link
            to='/notice-of-privacity'
            className='text-zinc-50 underline underline-offset-4 my-1'
          >
            Aviso de Privacidad
          </Link>
      </footer>
  )
}
