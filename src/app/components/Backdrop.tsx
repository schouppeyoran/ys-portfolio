'use client'

import React, { useEffect, useState, useRef, ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startFluidSimulation } from './fluidSimulation'

import { fetchDocuments } from '../firebaseOperations'

interface BackdropProps {
  children: ReactNode
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const dispatch = useDispatch()
  const webUtils = useSelector((state: any) => state.webUtils)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (canvasRef.current) {
      startFluidSimulation(canvasRef.current)
      const height = `${document.documentElement.scrollHeight}px`
      canvasRef.current.style.height = height
      setDocumentHeight(height)
    }
  }, [])

  useEffect(() => {
    const fetchAndSetDocuments = async () => {
      const docs = await fetchDocuments('yoranschouppe')
      dispatch({ type: 'SET_DATA', payload: docs })
      setLoading(false)
    }
    fetchAndSetDocuments()
  }, [dispatch])

  const [documentHeight, setDocumentHeight] = useState('100%')

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-4xl font-bold text-dark">
        Loading...
      </div>
    )
  }

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
