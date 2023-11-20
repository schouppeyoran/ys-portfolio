import React, { use, useEffect, useRef } from 'react'

const DriftCarousel = ({ dataset, height }) => {
  const driftContainerRef = useRef(null)

  // render the first image in the dataset at position top: 0 and right: -100% and animate it to left: -100%, then unrender it
  useEffect(() => {
    const driftContainer = driftContainerRef.current
    const driftImage = document.createElement('img')
    driftImage.src = dataset[0]
    driftImage.style.position = 'absolute'
    driftImage.style.top = '0'
    driftImage.style.right = '0'
    driftImage.style.left = 'auto'
    driftImage.style.height = '50%'
    driftImage.style.objectFit = 'cover'

    const animation = driftImage.animate(
      [{ transform: 'translateX(-180vw)' }],
      {
        duration: 10000,
        iterations: 1,
      },
    )

    // Add an event listener for the 'finish' event.
    animation.onfinish = () => {
      // Remove the image from the DOM.
      driftContainer.removeChild(driftImage)
    }

    driftContainer.appendChild(driftImage)
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
