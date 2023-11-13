"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { startFluidSimulation } from './fluidSimulation';

interface BackdropProps {
  children: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      startFluidSimulation(canvasRef.current);
    }
  }, []);

  return (
    <main className='flex flex-col items-center min-h-[100vh] overflow-hidden'>
      <canvas ref={canvasRef} style={{ position: 'absolute', width: '100%', height: '100%' }} className='z-0'/>
      {children}
    </main>
  );
}

export default Backdrop;
