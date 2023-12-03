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
          <h1 className="text-xl text-white hover:text-lava-red transition">
            <a href="#">Yoran Schouppe</a>
          </h1>
        </div>
        <div className="flex-1 hidden"></div>
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
            className="text-sm p-1 bg-pale-carmine hover:text-white hover:bg-lava-red transition rounded flex flex-row items-center gap-1 cursor-pointer"
          >
            <IoMenu size={21} />
            Menu
          </a>
          {menuVisible && (
            <div className="absolute top-[105%] py-3 px-6 bg-pale-carmine rounded gap-3 flex flex-col navbarMenu z-90">
              <h2>Test 1 a</h2>
              <h2>Test 2 aaa</h2>
              <h2>Test 3 aaaaaa</h2>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
