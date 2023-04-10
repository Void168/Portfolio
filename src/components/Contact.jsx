import React from 'react'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

function Contact() {
  return (
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <p className="h3 uppercase font-medium mb-2 tracking-wide">
                Get in touch
              </p>
              <p className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together
              </p>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 mx-12 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-400 transition-all"
              type="text"
              placeholder="Your name"
            ></input>
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-400 transition-all"
              type="text"
              placeholder="Your email"
            ></input>
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-400 transition-all resize-none"
              type="text"
              placeholder="Your message"
            ></textarea>
            <button class="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
