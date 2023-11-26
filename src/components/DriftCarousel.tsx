import React, { useEffect, useRef } from 'react'

const DriftCarousel = ({ dataset, height }) => {
  const containerRef = useRef(null)

  const renderImage = index => {
    const img = document.createElement('img')
    img.src = dataset[index]
    img.alt = ''
    img.className = 'h-[48%] object-contain absolute'
    img.style.top = '0'
    img.style.left = '100%'
    img.style.transition = 'all 20s linear'

    img.onload = () => {
      img.style.left = `-${img.offsetWidth + img.offsetWidth / 2}px`
    }

    img.addEventListener('transitionend', () => {
      img.remove()
    })

    containerRef.current.appendChild(img)
  }

  const renderStaggeredImage = index => {
    const img = document.createElement('img')
    img.src = dataset[index]
    img.alt = ''
    img.className = 'h-[48%] object-contain absolute'
    img.style.bottom = '0'
    img.style.transition = 'all 20s linear'

    img.onload = () => {
      img.style.left = `calc(100% + ${img.offsetWidth / 2}px)`
      img.style.left = `-${img.offsetWidth}px`
    }

    img.addEventListener('transitionend', () => {
      img.remove()
    })

    containerRef.current.appendChild(img)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      renderImage(0)
      renderStaggeredImage(1)
    }, 1000) // delay of 1 second

    return () => clearTimeout(timer) // cleanup on unmount
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ height: height }}
      className="flex flex-col w-[100vw] wrap relative mb-12 gap-4 mt-[-10vh] items-center justify-center"
    ></div>
  )
}

export default DriftCarousel
