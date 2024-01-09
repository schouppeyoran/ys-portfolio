'use client'

import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'

const portfolioItems = [
  {
    title: 'Gianni DM',
    description:
      'Gianni is a dear friend of mine. He is a talented video editor & content manager. He needed a website to showcase his work and to be able to contact him. I built this website using barebones React, it was my first real-world experience designing and developing a website for a client.',
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

  return (
    <div className="max-w-[1920px] w-[100%] flex flex-col items-center justify-center">
      <h1 className="w-[100%] py-2 bg-pale-carmine text-center text-4xl rounded-t-lg">
        Portfolio
      </h1>
      <h1 className="text-xl py-2 bg-ironstone w-[100%] text-center">
        Gianni DM
      </h1>
      <div className="border-t border-ironstone w-[100%] h-[50vh] flex flex-col items-center justify-center relative mb-12">
        <Swiper
          className="w-[100%]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {portfolioItems[currentItem].images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="contain w-[95%] mx-auto select-none"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Portfolio
