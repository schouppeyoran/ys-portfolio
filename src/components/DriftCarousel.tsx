import React, { useEffect, useRef } from 'react'

const DriftCarousel = ({ dataset, height }) => {
  // refs to access the top and bottom row elements in the DOM
  const topRowRef = useRef(null)
  const bottomRowRef = useRef(null)

  // split the dataset into two arrays, one with the uneven items for the top row and one with the even items for the bottom row
  const topRowItems = dataset.filter((_, index) => index % 2 === 0)
  const bottomRowItems = dataset.filter((_, index) => index % 2 !== 0)

  // TO DO: figure out how many items need to be in a row in order for it to cover slightly more than the entire width of the screen
  // TO DO: take double this amount and put that many items into the rows - one into the top row, one into the bottom, one into the top, etc.
  // TO DO: make each of these start at the right side of the screen and move across the screen to the left
  // TO DO: as soon as an item has moved across the screen, unrender it
  // TO DO: as soon as an item has unrendered, render the next items in the dataset into the rows
  // TO DO: if all of the items in the dataset have been rendered, start over again at the start of the dataset

  return (
    <div
      style={{ height: height }}
      className="flex flex-col w-[110%] wrap relative mb-12 gap-4 mt-[-10vh] items-center justify-center"
    >
      <div ref={topRowRef} className="flex h-[50%]">
        {topRowItems.map((item, index) => (
          <img src={item} key={index} className="h-full object-contain" />
        ))}
      </div>
      <div ref={bottomRowRef} className="flex h-[50%]">
        {bottomRowItems.map((item, index) => (
          <img src={item} key={index} className="h-full object-contain" />
        ))}
      </div>
    </div>
  )
}

export default DriftCarousel
