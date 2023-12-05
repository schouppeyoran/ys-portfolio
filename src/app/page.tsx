import About from '@/components/About'
import Backdrop from '@/components/Backdrop'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import '@fontsource/bebas-neue'

const items = ['Home', 'About', 'Projects', 'Contact']

export default function Home() {
  return (
    <Backdrop>
      <Hero />
      <About />
      <Navbar items={items} />
    </Backdrop>
  )
}
