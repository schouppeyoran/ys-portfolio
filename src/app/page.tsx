import About from '@/components/About'
import Backdrop from '@/components/Backdrop'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import '@fontsource/bebas-neue'

const items = ['Home', 'About', 'Projects', 'Contact']

export default function Home() {
  return (
    <Backdrop>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Navbar items={items} />
    </Backdrop>
  )
}
