import React from 'react'

const Footer = () => {
  return (
    <div
      id="footer"
      className="mt-12 w-full px-4 py-8 bg-rock flex flex-row items-start justify-between"
    >
      <div className="flex flex-col">
        <a href="#home">Back to top</a>
      </div>
      <p>&copy; Yoran Schouppe, 2024</p>
    </div>
  )
}

export default Footer
