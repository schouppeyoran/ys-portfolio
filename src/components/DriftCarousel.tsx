import React from 'react'

const DriftCarousel = ({ dataset, height }) => {
  return (
    <div
      style={{ height: height }}
      className="flex flex-col w-[100%] wrap bg-white relative"
    >
      {dataset.map((item, index) => (
        <img src={item} key={index} className="h-[50%] object-contain" />
      ))}
    </div>
  )
}

export default DriftCarousel
