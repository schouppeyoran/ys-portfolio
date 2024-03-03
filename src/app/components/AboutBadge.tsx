import React from 'react'

// a div with an absolute position img inside of it which is the badge
// initially have it display the badge icon and the title text
// when clicked, have it rotate on the y axis to flip over
// when flipped over, have it display the about text

// will take three props: title, icon, and text

const AboutBadge = () => {
  return (
    <div className="relative flex-1">
      <div className="w-20 h-20 bg-ironstone flex items-center justify-center">
        <h1>Title</h1>
      </div>
    </div>
  )
}

export default AboutBadge
