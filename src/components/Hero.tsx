'use client'

import React, { useState, useRef, useEffect } from 'react'
import DriftCarousel from './DriftCarousel'
import { DriftCarouselWebItems } from '@/config/DriftCarouselWebItems'
import { DriftCarouselMobileItems } from '@/config/DriftCarouselMobileItems'

const Hero = () => {
  // ----- TOGGLE BETWEEN WEB AND MOBILE LOGIC -----
  // mobileToggled state to toggle between web and mobile in the hero
  // I used a boolean for this because it's a simple toggle and it allows me to use !mobileToggled to toggle between web and mobile
  const [mobileToggled, setMobileToggled] = useState(false)
  // togglerIndicator ref is used to access the togglerIndicator element in the DOM
  const togglerIndicator = useRef<HTMLDivElement>(null)
  // h1Ref1 and h1Ref2 refs are used to access the h1 elements in the DOM
  const h1Ref1 = useRef<HTMLHeadingElement>(null)
  const h1Ref2 = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    const updateWidth = () => {
      if (togglerIndicator.current && h1Ref1.current && h1Ref2.current) {
        const firstH1ElementWidth = h1Ref1.current.offsetWidth
        const secondH1ElementWidth = h1Ref2.current.offsetWidth
        const firstH1ElementHeight = h1Ref1.current.offsetHeight
        const secondH1ElementHeight = h1Ref2.current.offsetHeight
        togglerIndicator.current.style.width = `${
          (mobileToggled ? secondH1ElementWidth : firstH1ElementWidth) + 6
        }px`
        togglerIndicator.current.style.height = `${
          (mobileToggled ? secondH1ElementHeight : firstH1ElementHeight) + 4
        }px`
        togglerIndicator.current.style.transform = `translateX(${
          mobileToggled ? firstH1ElementWidth + 3 : -3
        }px)`
      }
    }

    document.fonts.ready.then(updateWidth)
  }, [mobileToggled])

  const [showCarousel, setShowCarousel] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="h-[100vh] w-[100vw] flex flex-col items-center justify-center px-4 py-10 overflow-hidden"
    >
      {showCarousel ? (
        <DriftCarousel
          dataset={
            mobileToggled ? DriftCarouselMobileItems : DriftCarouselWebItems
          }
          height={window.innerWidth > 1600 ? '50vh' : '40vh'}
        />
      ) : (
        <div className="h-[40vh] w-screen mb-12 mt-[-10vh]"></div>
      )}
      <div className="flex flex-row gap-2 text-4xl mb-3">
        <h1 className="heroAnimation1">Hi!</h1>
        <h1 className="heroAnimation2">My name is...</h1>
      </div>
      <div className="flex flex-col gap-2 items-center text-center heroAnimation3">
        <h1 className="text-6xl text-lava-red stroke-white stroke-1">
          Yoran Schouppe
        </h1>
        <div className="flex flex-row gap-1 items-center">
          <h1 className="text-xl text-ironstone">Front-end</h1>
          <div
            className="flex flex-row py-1 px-2 bg-white gap-1.5 text-xl rounded cursor-pointer select-none relative items-center"
            onClick={() => setMobileToggled(!mobileToggled)}
          >
            <div
              className={`bg-ironstone absolute z-1 rounded transition-all duration-300 ease-in-out`}
              ref={togglerIndicator}
            />
            <h1
              className={` ${
                mobileToggled ? 'text-ironstone' : 'text-white'
              } transition-all duration-300`}
              ref={h1Ref1}
            >
              Web
            </h1>
            <h1
              className={` ${
                mobileToggled ? 'text-white' : 'text-ironstone'
              } transition-all duration-300`}
              ref={h1Ref2}
            >
              Mobile
            </h1>
          </div>
          <h1 className="text-xl text-ironstone">Developer / Designer</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
