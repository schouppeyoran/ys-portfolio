'use client'

import React, { useState, useEffect } from 'react'
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
  },
]

const Portfolio = () => {
  const [currentItem, setCurrentItem] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

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
      <div className="w-full h-[25vh] bg-woodsmoke border-t-2 border-b-2 border-pale-carmine px-2 pt-2 pb-4 overflow-scroll">
        <p className="text-center">{portfolioItems[currentItem].description}</p>
      </div>
    </div>
  )
}

export default Portfolio
