import React, { useRef } from 'react'

import emailjs from '@emailjs/browser'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Message sent')
        },
        (error) => {
          console.log(error.text)
        }
      )
  };

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
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-400 transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
            ></input>
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-400 transition-all"
              type="text"
              placeholder="Your email"
              name="user_email"
            ></input>
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-400 transition-all resize-none"
              type="text"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button className="btn btn-lg" type="submit">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
