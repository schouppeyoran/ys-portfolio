import React from 'react'
import { IoMenu, IoChatboxEllipsesSharp } from 'react-icons/io5'

const Navbar = () => {
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
            href="#contact"
            className="text-sm p-1 bg-pale-carmine hover:text-white hover:bg-lava-red transition rounded flex flex-row items-center gap-1"
          >
            <IoMenu size={21} />
            Menu
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
