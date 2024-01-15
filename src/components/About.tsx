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

const skills = [
  {
    title: 'Tech stack',
    items: [
      {
        icon: '/assets/icons/html5.svg',
        title: 'HTML5',
      },
      {
        icon: '/assets/icons/css3.svg',
        title: 'CSS3',
      },
      {
        icon: '/assets/icons/javascript.svg',
        title: 'JavaScript',
      },
      {
        icon: '/assets/icons/typescript.svg',
        title: 'TypeScript',
      },
      {
        icon: '/assets/icons/react.svg',
        title: 'React',
      },
      {
        icon: '/assets/icons/react.svg',
        title: 'React Native',
      },
      {
        icon: '/assets/icons/nextjs.svg',
        title: 'Next.js',
      },
      {
        icon: '/assets/icons/tailwindcss.svg',
        title: 'Tailwind CSS',
      },
      {
        icon: '/assets/icons/nodejs.svg',
        title: 'Node.js',
      },
    ],
  },
  {
    title: 'Design',
    items: [
      {
        icon: '/assets/icons/figma.svg',
        title: 'Figma',
      },
      {
        icon: '/assets/icons/blender.svg',
        title: 'Blender',
      },
    ],
  },
  {
    title: 'Work management',
    items: [
      {
        icon: '/assets/icons/git.svg',
        title: 'Git',
      },
      {
        icon: '/assets/icons/github.svg',
        title: 'GitHub',
      },
      {
        icon: '/assets/icons/jira.svg',
        title: 'Jira',
      },
      {
        icon: '/assets/icons/confluence.svg',
        title: 'Confluence',
      },
      {
        icon: '/assets/icons/clockify.svg',
        title: 'Clockify',
      },
    ],
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="w-screen flex flex-col items-center justify-center px-4 pt-0 py-10"
    >
      <div className="max-w-[1920px] flex flex-col items-center justify-center lg:flex-row lg:gap-8 lg:items-start mb-12">
        {aboutSections.map((section, index) => (
          <div
            className="flex flex-col items-center justify-center mb-6 max-w-[1920px] w-[100%]"
            key={index}
          >
            <img
              src={section.image}
              alt=""
              className="transition hover:scale-110 duration-500"
            />

            <h1 className="text-2xl px-2 py-1 rounded aboutHeading">
              {section.title}
            </h1>
            <p className="text-center">{section.text}</p>
          </div>
        ))}
      </div>
      {skills.map((skill, index) => (
        <div className="flex flex-col w-[100%] mb-4" key={index}>
          <div className="flex flex-row items-center justify-center w-[100%] border-b-2 border-pale-carmine relative mb-2">
            <div className="max-w-[1920px] flex-1 flex flex-row items-end justify-between">
              <h2 className="text-xl mr-2">{skill.title}</h2>
              <div className="flex flex-row items-end gap-2 mr-2">
                <div className="w-5 h-6 bg-pale-carmine skew-x-[30deg]" />
                <div className="w-4 h-5 bg-ironstone skew-x-[30deg]" />
                <div className="w-3 h-4 bg-rock skew-x-[30deg]" />
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-evenly gap-4 max-w-[1920px] w-[100%] mx-auto">
            {skill.items.map((item, index) => (
              <div className="flex flex-col items-center gap-2" key={index}>
                <img
                  src={item.icon}
                  alt=""
                  className="w-16 h-16 lg:w-32 lg:h-32 transition hover:scale-110 duration-500"
                />
                <h2 className="text-center">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default About
