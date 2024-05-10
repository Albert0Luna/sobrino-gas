import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
//* Lazy loading components
const LazyNoticeOfPrivacity = React.lazy(() => import('./pages/NoticeOfPrivacity.jsx'))
const LazySellPoints = React.lazy(() => import('./pages/SellPoints.jsx'))
const LazyOrder = React.lazy(() => import('./pages/Order.jsx'))
const LazyServices = React.lazy(() => import('./pages/Services.jsx'))
const LazyContact = React.lazy(() => import('./pages/Contact.jsx'))
const LazyAbout = React.lazy(() => import('./pages/AboutUs.jsx'))

export function App () {
  return (
    <main className='flex flex-col'>
      <Header/>

      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/order' element={
          <React.Suspense>
              <LazyOrder />
          </React.Suspense>
        } />

        <Route path='/services' element={
          <React.Suspense>
              <LazyServices />
          </React.Suspense>
        } />

        <Route path='/point-of-sale' element={
          <React.Suspense>
              <LazySellPoints/>
          </React.Suspense>
        }/>

        <Route path='/about' element={
          <React.Suspense>
              <LazyAbout />
          </React.Suspense>
        } />

        <Route path='/contact' element={
          <React.Suspense>
              <LazyContact />
          </React.Suspense>
        }/>
        <Route path='/notice-of-privacity' element={
          <React.Suspense>
              <LazyNoticeOfPrivacity />
          </React.Suspense>
        }/>
      </Routes>

      <Footer />
    </main>
  )
}
