import Backdrop from '@/components/Backdrop'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import '@fontsource/bebas-neue'

export default function Home() {
  return (
    <Backdrop>
      <Hero />
      <Navbar />
    </Backdrop>
  )
}
