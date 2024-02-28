import React, { useState, useEffect, useRef } from 'react'

// type interface to define the props for the DriftCarousel component, this gets rid of any type errors
interface DriftCarouselProps {
  dataset: string[]
  height: string
}

const DriftCarousel: React.FC<DriftCarouselProps> = ({ dataset, height }) => {
  // --- STATE ---
  // containerRef is a reference to the container div that will hold the images
  const containerRef = useRef(null)

  // index is the state that will keep track of the current (to be rendered) image index
  const [index, setIndex] = useState(0)

  // imgWidth is the state that will keep track of the width of the image, which needs to be one uniform value for all images for the animation to work properly
  const [imgWidth, setImgWidth] = useState(0)

  // gapSize is the state that will keep track of the gap size between the images (calculated in the renderImage function)
  const [gapSize, setGapSize] = useState(0)

  // animationDurationFactor is the state that will keep track of the animation duration factor, which will be used to calculate the animation duration based on the viewport width
  // in this case it's set to 30 for mobile devices and 15 for desktop devices
  // this needs to be in because the animation gets rather choppy on mobile devices if the duration is too short
  const [animationDurationFactor, setAnimationDurationFactor] = useState(
    window.innerWidth < 768 ? 30 : 15,
  )

  // animationDuration is the state that will keep track of the animation duration, which will be calculated based on the viewport width and the animationDurationFactor
  const [animationDuration, setAnimationDuration] = useState(
    window.innerWidth * animationDurationFactor,
  )

  // --- FUNCTIONS & EFFECTS ---
  // renderImage function to render the image at the given index
  // this function will create an image element, set its src, alt, and class, and append it to the container div
  // basically, it places an image outsice the viewport on the right side, and then changes its left position to -100% of the image's width to make it slide in from the right all the way across the viewport and then out of the viewport on the left side
  const renderImage = (index: number) => {
    const img = document.createElement('img')
    img.src = dataset[index]
    img.alt = ''
    img.className = 'h-[48%] object-contain absolute'
    img.style.top = '0'
    img.style.left = '100%'

    img.onload = () => {
      setImgWidth(img.offsetWidth)
      setGapSize(img.offsetWidth * 0.2)
      img.style.transition = `all ${calculateTransitionTime(
        img.offsetWidth,
        window.innerWidth,
      )}ms linear`
      img.style.left = `-${img.offsetWidth + img.offsetWidth / 2}px`
    }

    img.addEventListener('transitionend', () => {
      img.remove()
    })

    if (containerRef.current) {
      ;(containerRef.current as HTMLElement).appendChild(img)
    }
  }

  // renderStaggeredImage function to render the staggered image at the given index
  // this does the same thing as the renderImage function, but it's used to render the second image with a slight delay and underneath it to create the staggered effect
  const renderStaggeredImage = (index: number) => {
    const img = document.createElement('img')
    img.src = dataset[index]
    img.alt = ''
    img.className = 'h-[48%] object-contain absolute'
    img.style.bottom = '0'

    img.onload = () => {
      img.style.transition = `all ${calculateTransitionTime(
        img.offsetWidth,
        window.innerWidth,
      )}ms linear`
      img.style.left = `calc(100% + ${img.offsetWidth / 2}px)`
      img.style.left = `-${img.offsetWidth}px`
    }

    img.addEventListener('transitionend', () => {
      img.remove()
    })

    if (containerRef.current) {
      ;(containerRef.current as HTMLElement).appendChild(img)
    }
  }

  // useEffect hook to render the first two images on component mount
  useEffect(() => {
    renderImage(index)
    renderStaggeredImage(index + 1)
  }, [index])

  // useEffect hook to update the animation duration factor based on the viewport width
  // this will make the animation duration longer on mobile devices and shorter on desktop devices
  // resize event listener is added to update the animation duration factor and the animation duration when the viewport width changes (this isn't entirely working right, but I'm compromising for now)
  useEffect(() => {
    const updateAnimationDuration = () => {
      setAnimationDuration(window.innerWidth * animationDurationFactor)
    }

    updateAnimationDuration() // initial call

    window.addEventListener('resize', updateAnimationDuration)

    return () => {
      window.removeEventListener('resize', updateAnimationDuration)
    }
  }, [])

  // calculateIntervalTime function to calculate the interval time for the setInterval function
  const calculateIntervalTime = (viewportWidth: number) => {
    return (
      (imgWidth + imgWidth * 0.2) *
      ((((2 * imgWidth + viewportWidth) / (imgWidth + viewportWidth)) *
        animationDuration) /
        (2 * imgWidth + viewportWidth))
    )
  }

  // calculateTransitionTime function to calculate the transition time for the image elements
  const calculateTransitionTime = (imgWidth: number, viewportWidth: number) => {
    return (
      ((2 * imgWidth + viewportWidth) / (imgWidth + viewportWidth)) *
      animationDuration
    )
  }

  // useEffect hook to update the interval time when the imgWidth and gapSize change
  // THIS IS ONLY NECESSARY if you're conditionally providing different datasets to this component and the images have different widths
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
