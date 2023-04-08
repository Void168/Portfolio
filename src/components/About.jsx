import React from 'react'

import CountUp from 'react-countup'

import { useInView } from 'react-intersection-observer'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className="section justify-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
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
            <p className="my-4">Giới thiệu</p>
            <p className="my-4">Giới thiệu</p>
            <div className="flex lg:justify-start justify-center gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="mb-2">
                  {inView ? (
                    <>
                      <span className="text-4xl text-gradient">
                        <CountUp start={0} end={2} duration={2} />
                      </span>
                      <span className="text-4xl text-gradient"> Years</span>
                    </>
                  ) : null}
                </div>
                <div className="text-2xl uppercase">
                  Have known about <br /> Front-end
                </div>
              </div>
              <div>
                <div className="mb-2">
                  {inView ? (
                    <>
                      <span className="text-4xl text-gradient">
                        <CountUp start={0} end={6} duration={2} />
                      </span>
                    </>
                  ) : null}
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
              <button className="btn btn-lg mr-4">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
