'use client'

import React, { useState, useEffect, useRef } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'

const portfolioItems = [
  {
    title: 'Gianni DM',
    description:
      'Gianni is a talented video editor & content manager, and a dear friend of mine. He needed a website to showcase his work to potential clients, and present them ways through which they can contact him. I built this website using barebones React. This was my first real-world experience designing and developing a website for a client.',
    link: 'https://giannidm.com',
    images: [
      '/assets/portfolioItems/giannidm/1.png',
      '/assets/portfolioItems/giannidm/2.png',
      '/assets/portfolioItems/giannidm/3.png',
    ],
    techStack: [
      {
        name: 'HTML5',
        icon: '/assets/icons/html5.svg',
      },
      {
        name: 'CSS3',
        icon: '/assets/icons/css3.svg',
      },
      {
        name: 'React',
        icon: '/assets/icons/react.svg',
      },
      {
        name: 'Figma',
        icon: '/assets/icons/figma.svg',
      },
    ],
  },
]

const Portfolio = () => {
  const [currentItem, setCurrentItem] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const [mobileInterfaceToggle, setMobileInterfaceToggle] = useState(false)
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
          (mobileInterfaceToggle ? secondH1ElementWidth : firstH1ElementWidth) +
          6
        }px`
        togglerIndicator.current.style.height = `${
          (mobileInterfaceToggle
            ? secondH1ElementHeight
            : firstH1ElementHeight) + 4
        }px`
        togglerIndicator.current.style.transform = `translateX(${
          mobileInterfaceToggle ? firstH1ElementWidth + 3 : -3
        }px)`
      }
    }

    document.fonts.ready.then(updateWidth)
  }, [mobileInterfaceToggle])

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768)
  }, [])

  return (
    <div className="max-w-[1920px] w-[100%] flex flex-col items-center justify-center">
      <h1 className="w-[100%] py-2 bg-pale-carmine text-center text-4xl rounded-t-lg">
        Portfolio
      </h1>
      <h1 className="text-xl py-2 bg-ironstone w-[100%] text-center">
        Gianni DM
      </h1>
      <Swiper
        style={{}}
        className="w-[100%] h-[35vh] flex flex-col items-center justify-center bg-rock/10"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={isDesktop ? true : false}
        pagination={{
          clickable: true,
        }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {portfolioItems[currentItem].images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="contain w-[95%] mx-auto mt-4 select-none mb-8"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-[25vh] bg-woodsmoke/50 border-t-2 border-b-2 border-pale-carmine px-2 pt-2 pb-4 overflow-y-scroll">
        {mobileInterfaceToggle ? (
          <div className="flex">
            {portfolioItems[currentItem].techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-2 flex-wrap w-full"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                <p className="text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">
            {portfolioItems[currentItem].description}
          </p>
        )}
      </div>
      <div
        className="flex flex-row p-2 gap-1.5 text-xl rounded cursor-pointer select-none relative items-center w-full bg-woodsmoke/70"
        onClick={() => setMobileInterfaceToggle(!mobileInterfaceToggle)}
      >
        <div
          className={` bg-ironstone absolute z-1 rounded transition-all duration-300 ease-in-out`}
          ref={togglerIndicator}
        />
        <h1
          className={`w-[50%] text-center ${
            mobileInterfaceToggle ? 'text-ironstone' : 'text-white'
          } transition-all duration-300 `}
          ref={h1Ref1}
        >
          Description
        </h1>
        <h1
          className={`w-[50%] text-center ${
            mobileInterfaceToggle ? 'text-white' : 'text-ironstone'
          } transition-all duration-300`}
          ref={h1Ref2}
        >
          Tech Stack
        </h1>
      </div>
    </div>
  )
}

export default Portfolio
