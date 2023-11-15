import React from 'react'

const Hero = () => {
  return (
    <section className='h-[100vh] w-[100vw] mb-8 flex flex-col items-center justify-center px-4 py-10'>
        <div className="flex flex-row gap-2 text-4xl mb-3">
            <h1>Hi!</h1>
            <h1>My name is...</h1>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
            <h1 className='text-5xl'>Yoran Schouppe</h1>
            <h1>Front-end Web & Mobile Developer / Designer</h1>
        </div>
    </section>
  )
}

export default Hero