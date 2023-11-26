import React, { useState, useEffect, useRef } from 'react'

const DriftCarousel = ({ dataset, height }) => {
  const containerRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [imgWidth, setImgWidth] = useState(0)
  const [gapSize, setGapSize] = useState(0)
  const [animationDuration, setAnimationDuration] = useState(20000)

  const calculateIntervalTime = viewportWidth => {
    return (
      (imgWidth + gapSize) *
      (animationDuration / (2 * imgWidth + viewportWidth))
    )
  }

  const renderImage = index => {
    const img = document.createElement('img')
    img.src = dataset[index]
    img.alt = ''
    img.className = 'h-[48%] object-contain absolute'
    img.style.top = '0'
    img.style.left = '100%'
    img.style.transition = `all ${animationDuration}ms linear`

    img.onload = () => {
      setImgWidth(img.offsetWidth)
      setGapSize(img.offsetWidth * 0.2)
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
    img.style.transition = `all ${animationDuration}ms linear`

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
    renderImage(index)
    renderStaggeredImage(index + 1)
  }, [index])

  useEffect(() => {
    if (imgWidth > 0 && gapSize > 0) {
      const viewportWidth = window.innerWidth
      const interval = calculateIntervalTime(viewportWidth)

      const timer = setInterval(() => {
        setIndex((index + 2) % dataset.length)
      }, interval)

      return () => clearInterval(timer)
    }
  }, [index, imgWidth, gapSize])

  return (
    <div
      ref={containerRef}
      style={{ height: height }}
      className="flex flex-col w-[100vw] wrap relative mb-12 gap-4 mt-[-10vh] items-center justify-center driftcarousel"
    ></div>
  )
}

export default DriftCarousel
