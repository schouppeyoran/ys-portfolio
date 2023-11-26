import React, { useState, useEffect, useRef } from 'react'

const DriftCarousel = ({ dataset, height }) => {
  const [test, setTest] = useState(true)
  const imgRef = useRef(null)

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.left = test
        ? '100%'
        : `-${imgRef.current.offsetWidth}px`
    }
  }, [test])

  return (
    <div
      style={{ height: height }}
      className="flex flex-col w-[100vw] wrap relative mb-12 gap-4 mt-[-10vh] items-center justify-center"
    >
      <img
        ref={imgRef}
        src={dataset[0]}
        alt=""
        className="h-[50%] object-contain absolute"
        style={{
          top: 0,
          bottom: 0,
          transition: 'all 20s linear',
        }}
      />
      <button onClick={() => setTest(!test)}>test</button>
    </div>
  )
}

export default DriftCarousel
