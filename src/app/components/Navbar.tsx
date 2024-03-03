'use client'

import React, { useState, useEffect, FC } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { IoCloseOutline, IoChatboxEllipsesSharp } from 'react-icons/io5'

interface NavbarProps {
  items: Array<string>
}

const Navbar: FC<NavbarProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuToggled, setMobileMenuToggled] = useState(false)
  const [menuAnimation, setMenuAnimation] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = e.currentTarget.getAttribute('href')
    if (target) {
      const targetElement = document.querySelector(target)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMenuAnimation('slide-out')
    setTimeout(() => {
      setMobileMenuToggled(false)
      setMenuAnimation('')
    }, 300)
  }

  useEffect(() => {
    if (mobileMenuToggled) {
      setMenuAnimation('slide-in')
    }
  }, [mobileMenuToggled])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.7 },
    )

    items.forEach(item => {
      const element = document.getElementById(item)
      if (element) observer.observe(element)
    })

    return () => {
      items.forEach(item => {
        const element = document.getElementById(item)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return (
    <nav className="bg-woodsmoke w-screen p-4 flex flex-row items-center justify-center shadow shadow-lava-red/50 z-100 fixed navbarAnimation">
      <div className="max-w-[1600px] flex-1 flex flex-row items-center px-3">
        <div className="flex-1">
          <h1 className="text-xl text-white hover:text-lava-red transition w-fit hover:scale-105">
            <a href="#home" onClick={handleClick}>
              Yoran Schouppe
            </a>
          </h1>
        </div>
        <div className="flex-1 hidden lg:flex flex-row items-center justify-center gap-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={handleClick}
              className={`text-sm hover:text-white transition rounded flex flex-row items-center gap-1 px-1 border-b-2 
              ${
                item === activeSection
                  ? 'border-lava-red'
                  : 'border-transparent'
              }
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-2">
          <a
            href="#contact"
            onClick={handleClick}
            className="text-sm p-1 bg-pale-carmine hover:text-white hover:bg-lava-red transition rounded flex flex-row items-center gap-1 hover:scale-105 hover:shadow-lg"
          >
            <IoChatboxEllipsesSharp size={21} />
            Contact
          </a>
          <div className="lg:hidden flex items-center justify-center">
            <button onClick={() => setMobileMenuToggled(!mobileMenuToggled)}>
              <TiThMenu size={32} className="text-pale-carmine" />
            </button>
            {mobileMenuToggled && (
              <div
                className={`fixed top-0 left-0 w-full h-full bg-pale-carmine flex flex-col items-center justify-center gap-2 ${menuAnimation}`}
              >
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item}`}
                    onClick={handleClick}
                    className={`text-2xl text-white/60 cursor-pointer transition hover:text-white`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}

                <button
                  className="text-white absolute top-2 right-2"
                  onClick={() => {
                    setMenuAnimation('slide-out')
                    setTimeout(() => {
                      setMobileMenuToggled(false)
                      setMenuAnimation('')
                    }, 300)
                  }}
                >
                  <IoCloseOutline size={32} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
