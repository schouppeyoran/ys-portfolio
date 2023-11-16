'use client'

import React, { useState, useRef, useEffect } from 'react'

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
        mobileToggled ? '3px' : '-3px'
      })`
    }
  }, [mobileToggled])

  return (
    <section className="h-[100vh] w-[100vw] mb-8 flex flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-row gap-2 text-4xl mb-3">
        <h1>Hi!</h1>
        <h1>My name is...</h1>
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
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
              className={`bg-ironstone absolute z-1 rounded transition-all duration-300 ease-in-out ${
                mobileToggled ? 'right-2' : 'left-2'
              }`}
              ref={togglerIndicator}
            />
            <h1
              className={` ${mobileToggled ? 'text-ironstone' : 'text-white'}`}
              ref={h1Ref1}
            >
              Web
            </h1>
            <h1
              className={` ${mobileToggled ? 'text-white' : 'text-ironstone'}`}
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
