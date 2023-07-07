import React, { useRef } from 'react'

import { FaGithub, FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

import { Link } from 'react-scroll'

function Banner() {
  const email = useRef()
  const handleCopy = () => {
    navigator.clipboard.writeText(email.current.innerHTML)
    alert("Copied email!")
  }

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center md:container md:mx-auto"
      id="home"
    >
      <div className="md:container md:mx-auto xs:mx-8">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-6xl mb-4 neon__text"
            >
              Lê Phú Hưng
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-3xl uppercase leading-[1]"
            >
              <span className="text-3xl">I'm </span>
              <TypeAnimation
                sequence={['a Frontend Developer', 2000, 'from UEH', 2000]}
                speed={50}
                className="text-lime-500"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="my-8 mx-auto lg:mx-0 text-xl"
            >
              I’m focused on building responsive front-end web applications
              integrating back-end technologies. My goal in the future is to
              become a full-stack developer.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 1.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center max-w-max gap-x-6 mb-12 lg:mx-0 mx-auto lg-mx-0"
            >
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg mr-4">Contact me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeIn('up', 1.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-3xl gap-x-6 max-w-max mx-auto lg:mx-0 my-4"
            >
              <a
                href="https://www.facebook.com/Mr.H.LadyKillah/"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a href="https://github.com/Void168" target="_blank">
                <FaGithub />
              </a>
              <a href="https://zalo.me/0866243888" target="_blank">
                <img src="../zalo.png" alt="zalo" className="h-8" />
              </a>

              <div className="tooltip cursor-pointer">
                <FaGoogle onClick={handleCopy} />
                <span className="tooltiptext" ref={email}>
                  phuhung16820@gmail.com
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/l%C3%AA-h%C6%B0ng-332877215/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="my-8 flex justify-center items-center"
          >
            <img
              className="rounded-full w-96 h-96 shadow-2xl"
              src="../avatar.jpg"
              alt="avatar"
              id="avatar"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
