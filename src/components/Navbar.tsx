'use client'

import React, { useState, FC } from 'react'
import { IoMenu, IoChatboxEllipsesSharp } from 'react-icons/io5'

interface NavbarProps {
  items: Array<string>
}

const Navbar: FC<NavbarProps> = ({ items }) => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <nav className="bg-woodsmoke w-screen p-4 flex flex-row items-center justify-center shadow shadow-lava-red/50 z-100 fixed navbarAnimation">
      <div className="max-w-[1920px] flex-1 flex flex-row items-center px-3">
        <div className="flex-1">
          <h1 className="text-xl text-white hover:text-lava-red transition w-fit">
            <a href="#">Yoran Schouppe</a>
          </h1>
        </div>
        <div className="flex-1 hidden lg:flex flex-row items-center justify-center gap-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:text-white transition rounded flex flex-row items-center gap-1 px-1"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-2">
          <a
            href="#contact"
            className="text-sm p-1 bg-pale-carmine hover:text-white hover:bg-lava-red transition rounded flex flex-row items-center gap-1"
          >
            <IoChatboxEllipsesSharp size={21} />
            Contact
          </a>
          <a
            onClick={() => setMenuVisible(!menuVisible)}
            className="text-sm p-1 bg-pale-carmine hover:text-white hover:bg-lava-red transition rounded flex flex-row items-center gap-1 cursor-pointer lg:hidden"
          >
            <IoMenu size={21} />
            Menu
          </a>
          {menuVisible && items && (
            <div className="absolute top-[105%] py-3 px-6 bg-ironstone rounded gap-3 flex flex-col navbarMenu z-90">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-white hover:bg-lava-red transition rounded flex flex-row items-center gap-1 px-1"
                  onClick={() => setMenuVisible(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
