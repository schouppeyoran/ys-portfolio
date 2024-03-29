'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from 'react-redux'

// Import Swiper styles
import 'swiper/css/bundle'

const portfolioItems = [
  {
    title: 'drFloorPlan',
    description:
      'drFloorPlan is a product that consists of a web application where casino proprietors can create floor plans of their casinos, and some modules in other products that can use the data created by the drFloorPlan builder module for several intra-casino use cases. I designed & developed the web app with NEXT.JS, using React Redux for state management, and Tailwind CSS for styling. I also designed & developed the player locating module, which is used in a React Native staff app (which I also designed & developed in a team) to help streamline the workflow of casino staff. I used React Native for the staff app, and I used Expo to build it. Finally, I also developed the business insights module, which is used in a React Native mobile AND NEXT.JS web app to display heat maps and data visualizations of the casino floor plans. The tech stack for each of these projects is pretty much uniform. I also did some of the graphic design work for the drFloorPlan products.',
    link: 'https://drfloorplan.com',
    images: [],
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
        name: 'React Native',
        icon: '/assets/icons/react.svg',
      },
      {
        name: 'Next.js',
        icon: '/assets/icons/nextjs.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: '/assets/icons/tailwindcss.svg',
      },
      {
        name: 'Figma',
        icon: '/assets/icons/figma.svg',
      },
      {
        name: 'Blender',
        icon: '/assets/icons/blender.svg',
      },
      {
        name: 'Photoshop',
        icon: '/assets/icons/photoshop.svg',
      },
    ],
  },
]

const Portfolio = () => {
  const webUtils = useSelector((state: any) => state.webUtils)
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
    <div
      id="projects"
      className="max-w-[1600px] w-[100%] flex flex-col items-center justify-center px-2 pt-16"
    >
      <h1 className="w-[100%] py-2 bg-pale-carmine text-center text-4xl rounded-t-lg">
        Portfolio
      </h1>
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-[100%] 2xl:w-[75%] 2xl:border-l-2 2xl:border-ironstone">
          <Swiper
            style={{}}
            className="w-[100%] h-[35vh] 2xl:h-[60vh] flex flex-col items-center justify-center bg-rock/10"
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
            {webUtils.data.portfolio.items[currentItem].images.map(
              (image: any, index: number) => (
                <SwiperSlide key={index} style={{ display: 'flex' }}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="object-contain w-[90%] max-h-[30vh] 2xl:max-h-[55vh] mx-auto my-auto mt-4 select-none mb-8"
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          <div className="hidden flex-row flex-wrap w-full items-center justify-start gap-4 px-4 py-2 2xl:flex bg-rock/20 border-t-2 border-rock">
            <h1 className="text-2xl">Tech stack:</h1>
            {webUtils.data.portfolio.items[currentItem].techStack.map(
              (tech: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mx-2"
                >
                  <img
                    src={tech.icon}
                    alt={tech.label}
                    className="w-12 h-12 hover:scale-105 transition"
                  />
                  <p className="text-center text-sm">{tech.name}</p>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="hidden 2xl:flex flex-col items-center px-4 py-2 w-[25%] bg-rock/20 border-l-2 border-rock text-center 2xl:border-r-2 2xl:border-r-ironstone">
          <h1 className="text-2xl text-pale-carmine">Description</h1>
          <p>{webUtils.data.portfolio.items[currentItem].description}</p>
          <a
            href={webUtils.data.portfolio.items[currentItem].link}
            className="py-2 px-4 bg-pale-carmine rounded text-xl mt-auto hover:scale-105 transition hover:bg-lava-red"
            target="_blank"
          >
            <h1>Go there!</h1>
          </a>
        </div>
      </div>
      <div className="w-full h-[20vh] bg-woodsmoke/50 border-t-2 border-b-2 border-pale-carmine px-2 pt-2 pb-4 overflow-y-scroll 2xl:hidden">
        {mobileInterfaceToggle ? (
          <div className="flex flex-row flex-wrap w-full items-start justify-center">
            {webUtils.data.portfolio.items[currentItem].techStack.map(
              (tech: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mx-2"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                  <p className="text-center">{tech.name}</p>
                </div>
              ),
            )}
          </div>
        ) : (
          <p className="text-center">
            {webUtils.data.portfolio.items[currentItem].description}
          </p>
        )}
      </div>
      <div
        className="flex flex-row p-2 gap-1.5 text-xl rounded cursor-pointer select-none relative items-center w-full bg-woodsmoke/70 2xl:hidden"
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
      <div className="flex flex-row items-center justify-between w-full px-4 py-2 bg-ironstone w-[100%] rounded-bl-xl rounded-br-xl">
        <button
          onClick={() =>
            setCurrentItem(
              currentItem === 0
                ? webUtils.data.portfolio.items.length - 1
                : currentItem - 1,
            )
          }
          className="p-2"
        >
          <FaChevronLeft size={30} />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="2xl:text-2xl">
            {webUtils.data.portfolio.items[currentItem].title}
          </h2>
          <p>
            {currentItem + 1}/{webUtils.data.portfolio.items.length}
          </p>
        </div>
        <button
          onClick={() =>
            setCurrentItem(
              currentItem === webUtils.data.portfolio.items.length - 1
                ? 0
                : currentItem + 1,
            )
          }
          className="p-2"
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  )
}

export default Portfolio
