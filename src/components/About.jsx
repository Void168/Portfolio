import React from 'react'

import CountUp from 'react-countup'

import { useInView } from 'react-intersection-observer'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

const skills = [
  {
    id: '1',
    name: 'HTML',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png',
  },
  {
    id: '2',
    name: 'CSS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
  },
  {
    id: '3',
    name: 'Bootstrap',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
  },
  {
    id: '4',
    name: 'Tailwind CSS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
  },
  {
    id: '5',
    name: 'Javascript',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
  },
  {
    id: '6',
    name: 'ReactJS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  },
]
const additionalKnowledge = [
  {
    id: '1',
    name: 'NodeJS(ExpressJS)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',
  },
  {
    id: '2',
    name: 'RESTful API',
    img: 'https://e7.pngegg.com/pngimages/592/502/png-clipart-logo-application-programming-interface-computer-programming-application-software-api-text-photography.png',
  },
  {
    id: '3',
    name: 'Redux Toolkit',
    img: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
  },
  {
    id: '4',
    name: 'MongoDB(Mongoose)',
    img: 'https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB',
  },
]

function About() {
  const [ref, inView] = useInView({
    threshold: 0,
  })
  return (
    <section
      className="section justify-center xl:h-full sm:h-[2000px] xs:h-[3000px]"
      id="about"
      ref={ref}
    >
      <div className="md:container md:mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-full">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="opacity-60 flex-1 mix-blend-lighten flex justify-center"
          >
            <img
              src="../rashford-celebration.jpg"
              alt="pic-1"
              className=" shadow-lg rounded-md"
            />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:text-left text-center"
          >
            <p className="text-6xl text-lime-500">About me</p>
            <p className="my-4">
              I am Le Phu Hung. I have started my journey with programming back
              in 2018 on University of Economics Ho Chi Minh City (UEH) with a
              major in software engineering. In my journey of programming, the
              first language that I learned was C# (basics) in my freshman year
              at university (last semester in 2019). But in the next year, I was
              interested in web development. Firstly, I started with the
              front-end in the end of 2020 (10/2020). After more than 2 years of
              learning and did a few personal projects in frontend, I am
              confident that I can become a frontend developer.
            </p>
            <div className="flex lg:justify-start justify-center gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="mb-2">
                  {inView && (
                    <>
                      <span className="text-4xl text-gradient">
                        <CountUp start={0} end={2} duration={2} />
                      </span>
                      <span className="text-4xl text-gradient"> Years</span>
                    </>
                  )}
                </div>
                <div className="text-2xl uppercase">
                  Have known about <br /> Front-end
                </div>
              </div>
              <div>
                <div className="mb-2">
                  {inView && (
                    <>
                      <span className="text-4xl text-gradient">
                        <CountUp start={0} end={6} duration={2} />+
                      </span>
                    </>
                  )}
                </div>
                <div className="text-2xl uppercase">Projects</div>
              </div>
            </div>
            <motion.div
              variants={fadeIn('up', 1.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center max-w-max gap-x-6 mb-12 lg:mx-0 mx-auto lg-mx-0"
            >
              <button className="btn lg:btn-lg  mr-4">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial={false}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="container mx-auto flex flex-col justify-center items-center"
        >
          <p className="md:text-6xl xs:text-5xl text-lime-500 my-8">
            My skills
          </p>
          <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <li
                key={skill.id}
                className=" w-full hover:scale-105 duration-300 ease-in-out border font-bold border-white text-white flex flex-row justify-evenly items-center m-2 p-2 shadow-md shadow-green-400 rounded-xl"
              >
                <img src={skill.img} alt="logo" className="w-22 h-20" />
                <p className="text-xl">{skill.name}</p>
              </li>
            ))}
          </ul>
          <p className="md:text-6xl sm:text-5xl xs:text-2xl text-lime-500 my-8">
            Additional Knowledge
          </p>
          <ul className="grid md:grid-cols-2 xs:grid-cols-1 gap-4">
            {additionalKnowledge.map((add) => (
              <li
                key={add.id}
                className=" text-white border border-white font-bold hover:scale-105 duration-300 flex flex-wrap justify-evenly items-center w-full m-2 p-2 shadow-md shadow-green-400 rounded-xl"
              >
                <img src={add.img} alt="logo" className="w-22 h-20" />
                <p>{add.name}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
