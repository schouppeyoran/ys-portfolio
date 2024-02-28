import About from '@/components/About'
import Backdrop from '@/components/Backdrop'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import '@fontsource/bebas-neue'

const items = ['home', 'about', 'projects', 'contact']

export default function Home() {
  return (
    <Backdrop>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <Navbar items={items} />
    </Backdrop>
  )
}
