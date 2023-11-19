import React, { useEffect, useRef } from 'react'

const DriftCarousel = ({ dataset, height }) => {
  const topRowRef = useRef(null)
  const bottomRowRef = useRef(null)

  // Calculate the number of items needed to cover slightly more than the entire width of the screen.
  const itemsPerRow = Math.ceil(window.innerWidth / 200) * 2

  // Create two arrays with double this amount of items, alternating between the top and bottom rows.
  const topRowItems = []
  const bottomRowItems = []
  for (let i = 0; i < itemsPerRow; i++) {
    topRowItems.push(dataset[(2 * i) % dataset.length])
    bottomRowItems.push(dataset[(2 * i + 1) % dataset.length])
  }

  const handleAnimationIteration = (rowItems, rowRef, offset) => {
    const firstItem = rowItems.shift()
    rowItems.push(
      dataset[
        (dataset.indexOf(firstItem) + itemsPerRow * 2 + offset) % dataset.length
      ],
    )
    rowRef.current.style.animation = 'none'
    setTimeout(() => {
      rowRef.current.style.animation = ''
    }, 0)
  }

  useEffect(() => {
    topRowRef.current.addEventListener('animationiteration', () =>
      handleAnimationIteration(topRowItems, topRowRef, 0),
    )
    bottomRowRef.current.addEventListener('animationiteration', () =>
      handleAnimationIteration(bottomRowItems, bottomRowRef, 1),
    )

    return () => {
      topRowRef.current.removeEventListener('animationiteration', () =>
        handleAnimationIteration(topRowItems, topRowRef, 0),
      )
      bottomRowRef.current.removeEventListener('animationiteration', () =>
        handleAnimationIteration(bottomRowItems, bottomRowRef, 1),
      )
    }
  }, [])

  return (
    <div
      style={{ height: height }}
      className="flex flex-col w-[110%] wrap relative mb-12 gap-4 mt-[-10vh] items-center justify-center"
    >
      <div ref={topRowRef} className="flex h-[50%] animate-slide-right">
        {topRowItems.map((item, index) => (
          <img src={item} key={index} className="h-full object-contain" />
        ))}
      </div>
      <div ref={bottomRowRef} className="flex h-[50%] animate-slide-left">
        {bottomRowItems.map((item, index) => (
          <img src={item} key={index} className="h-full object-contain" />
        ))}
      </div>
    </div>
  )
}

export default DriftCarousel
