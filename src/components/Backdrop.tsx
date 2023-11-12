"use client";

import React, { useEffect, ReactNode } from 'react';

interface BackdropProps {
  children: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  const generateParticle = () => {
    // generate a particle
    const particle = document.createElement('div');
    // add the necessary tailwind classes to the particle
    particle.classList.add(
      'absolute',
      'w-1',
      'h-1',
      'rounded-full',
      'bg-white'
    );
    // Set random size
    const size = `${Math.random() * 60}px`;
    particle.style.width = size;
    particle.style.height = size;
  
    // Set random color
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = color;
  
    // Set random opacity
    const opacity = Math.random();
    particle.style.opacity = opacity.toString();
  
    // Set random position and direction
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.setProperty('--direction', Math.random() * 360 + 'deg');
  
    // Set random duration for the animation to make it slower or faster
    const duration = Math.random() * 3000 + 2000;
    particle.style.setProperty('--duration', `${duration}ms`);
  
    // Add blur
    particle.style.filter = 'blur(2px)';
    // first, determine if the particle is going to come from the top, right, bottom, or left
    // give it a starting position anywhere along the side, and 100px outside of the viewport
    // then, determine to what other side it will go to, which can't be the same side
    // then, give it an ending position anywhere along the side, and 100px outside of the viewport
    // then, append the particle to the backdrop
    // then, animate the particle from the starting position to the ending position
    // then, remove the particle from the backdrop
    // then, repeat
    const side = Math.floor(Math.random() * 4);
    let start, end;
    switch (side) {
      case 0: // top
        start = {
          x: Math.random() * window.innerWidth,
          y: -100,
        };
        end = {
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 100,
        };
        break;
      case 1: // right
        start = {
          x: window.innerWidth + 100,
          y: Math.random() * window.innerHeight,
        };
        end = {
          x: -100,
          y: Math.random() * window.innerHeight,
        };
        break;
      case 2: // bottom
        start = {
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 100,
        };
        end = {
          x: Math.random() * window.innerWidth,
          y: -100,
        };
        break;
      case 3: // left
        start = {
          x: -100,
          y: Math.random() * window.innerHeight,
        };
        end = {
          x: window.innerWidth + 100,
          y: Math.random() * window.innerHeight,
        };
        break;
    }
    if (start) {
      particle.style.left = `${start.x}px`;
      particle.style.top = `${start.y}px`;
    }
    document.body.appendChild(particle);
    const animation = particle.animate(
      [
        {
          left: start?.x ? `${start.x}px` : '0px',
          top: start?.y ? `${start.y}px` : '0px',
        },
        {
          left: end?.x ? `${end.x}px` : '0px',
          top: end?.y ? `${end.y}px` : '0px',
        },
      ],
      {
        duration: Math.random() * 5000 + 3000,
        easing: 'ease-in-out',
      }
    );
    
    animation.onfinish = () => {
      particle.remove();
    };

    
  };

  // useEffect hook to generate particles anywhere between every 600ms to 2000ms
  // use a minimumInterval and maximumInterval variable to make the code more readable and easier to change
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Generating particle');
      generateParticle();
    }, 500);
    return () => {
      console.log('Clearing interval');
      clearInterval(interval);
    };
  }, []);
  
  // TO DO: randomize the movements of the animation somehow
  // TO DO: add a trailing effect to the particles so they look like ripples in water or something

  return (
    <main className='flex flex-col items-center min-h-[100vh] overflow-hidden'>
      {children}
    </main>
  );
}

export default Backdrop;
