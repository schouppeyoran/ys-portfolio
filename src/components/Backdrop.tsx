'use client'

import React, { useEffect, useState, useRef, ReactNode } from 'react'
import { startFluidSimulation } from './fluidSimulation'

interface BackdropProps {
  children: ReactNode
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      startFluidSimulation(canvasRef.current)
      const height = `${document.documentElement.scrollHeight}px`
      canvasRef.current.style.height = height
      setDocumentHeight(height)
    }
  }, [])

  const [documentHeight, setDocumentHeight] = useState('100%')

  return (
    <main className="flex flex-col items-center overflow-hidden gap-4">
      <canvas
        ref={canvasRef}
        className="z-0 absolute w-[100%] h-[100%]"
        style={{ height: documentHeight }}
      />
      <div
        className="z-1 absolute w-[100%] h-[100%] bg-woodsmoke opacity-90"
        style={{ height: documentHeight }}
      />
      {children}
    </main>
  )
}

export default Backdrop
