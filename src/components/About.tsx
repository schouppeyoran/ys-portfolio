import React from 'react'
import AboutBadge from './AboutBadge'

const aboutSections = [
  {
    title: 'Personalia',
    image: '/assets/personaliaBadgeTest.png',
    text: 'I am a 21 year old software developer from Aalst, Belgium. I am currently working as a front-end engineer & designer at DR Gaming Technology, as well as my own personal projects.',
  },
  {
    title: 'Professional Philosophy',
    image: '/assets/professionalPhilosophyBadgeTest.png',
    text: 'I enjoy a good challenge. I enjoy being given a task that seems way out of my league, and then figuring out how to do it anyways. I believe that is the one true best way to learn. I am a good collaborator and I enjoy working in a team, but I also enjoy working on my own. I am a fast learner and I am always looking to improve my skills.',
  },
  {
    title: 'High-End User Experiences',
    image: '/assets/experiencesBadgeTest.png',
    text: "I strive to always create the fanciest, most sophisticated, high-end interfaces I can possibly think of for my users. I believe that the user experience is the most important part of any application, so I employ a methodical approach to designing and developing my applications. I always try to put myself in the user's shoes, and I always try to think of the most intuitive way to do something.",
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="w-screen flex flex-col items-center justify-center px-4 pt-0 py-10"
    >
      {aboutSections.map((section, index) => (
        <div
          className="flex flex-col items-center justify-center mb-6"
          key={index}
        >
          <img
            src={section.image}
            alt=""
            className="transition hover:scale-110 duration-500"
          />

          <h1 className="text-2xl px-2 py-1 mb-3 rounded aboutHeading">
            {section.title}
          </h1>
          <p className="text-center">{section.text}</p>
        </div>
      ))}
    </section>
  )
}

export default About
