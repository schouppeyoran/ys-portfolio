import React, { useEffect, useRef } from 'react'

const DriftCarousel = ({ dataset, height }) => {
  const driftContainerRef = useRef(null)
  let index = 0
  let intervalId = null
  const animationDuration = 10000 // 10 seconds

  const createAndAnimateImage = top => {
    const driftContainer = driftContainerRef.current
    const driftImage = document.createElement('img')
    driftImage.src = dataset[index % dataset.length]
    driftImage.style.position = 'absolute'
    driftImage.style.top = top
    driftImage.style.right = '0'
    driftImage.style.left = 'auto'
    driftImage.style.height = '50%'
    driftImage.style.objectFit = 'cover'

    driftImage.onload = () => {
      // Calculate the time when the image has moved 50% of its width.
      const imageWidth = driftImage.offsetWidth
      const viewportWidth = window.innerWidth
      const halfImageWidthTime =
        (imageWidth / (viewportWidth + imageWidth)) * animationDuration

      // Clear the previous interval before setting up a new one.
      if (intervalId) {
        clearInterval(intervalId)
      }

      intervalId = setInterval(() => {
        createAndAnimateImage(index % 2 === 0 ? '0' : '50%')
      }, halfImageWidthTime / 2)
    }

    const animation = driftImage.animate(
      [{ transform: 'translateX(-180vw)' }],
      {
        duration: animationDuration,
        iterations: 1,
      },
    )

    animation.onfinish = () => {
      driftContainer.removeChild(driftImage)
    }

    driftContainer.appendChild(driftImage)

    index++
  }

  useEffect(() => {
    createAndAnimateImage(index % 2 === 0 ? '0' : '50%')

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div
      ref={driftContainerRef}
      style={{ height: height }}
      className="flex flex-col w-[160vw] wrap relative mb-12 gap-4 mt-[-10vh] items-center justify-center"
    ></div>
  )
}

export default DriftCarousel
