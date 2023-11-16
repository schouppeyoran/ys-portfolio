'use client'

import React, { useEffect, useRef, ReactNode } from 'react'
import { startFluidSimulation } from './fluidSimulation'

interface BackdropProps {
  children: ReactNode
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      startFluidSimulation(canvasRef.current)
    }
  }, [])

  return (
    <main className="flex flex-col items-center min-h-[100vh] overflow-hidden">
      <canvas ref={canvasRef} className="z-0 absolute w-[100%] h-[100%]" />
      <div className="z-1 absolute w-[100%] h-[100%] bg-woodsmoke opacity-90" />
      {children}
    </main>
  )
}

export default Backdrop
