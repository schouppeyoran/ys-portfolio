'use client'

import { Provider, useSelector } from 'react-redux'
import { store } from '@/redux/store'

import About from '@/app/components/About'
import Backdrop from '@/app/components/Backdrop'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'
import Hero from '@/app/components/Hero'
import Navbar from '@/app/components/Navbar'
import Portfolio from '@/app/components/Portfolio'
import '@fontsource/bebas-neue'

const items = ['home', 'about', 'projects', 'contact']

export default function Home() {
  return (
    <Provider store={store}>
      <Backdrop>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        <Navbar items={items} />
      </Backdrop>
    </Provider>
  )
}
