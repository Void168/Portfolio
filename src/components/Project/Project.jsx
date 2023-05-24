import React from 'react'

import { motion } from 'framer-motion'

import { fadeIn } from '../../variants'

import ProjectModal from './ProjectModal'

function Project({
  name,
  imgUrl,
  content,
  tech,
  url,
  description,
  features,
  code,
}) {
  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
    >
      <p className="text-center text-4xl">{name}</p>
      <div className="card__zoom h-64 shadow-3xl rounded-xl project">
        <div className={` ${imgUrl} bg-cover bg-no-repeat card__zoom--image`}>
          <div className="bg-black bg-opacity-70 h-full flex flex-col py-2 px-4 justify-evenly items-center">
            <div>
              <motion.ul
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-row flex-wrap justify-center"
              >
                {tech.map((t) => (
                  <li className="text-sm text-center border-[#6EE7B7] border-2 m-2 px-2 py-1 rounded-full shadow-sm shadow-green-200">
                    {t}
                  </li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <ProjectModal
                url={url}
                imgUrl={imgUrl}
                name={name}
                description={description}
                features={features}
                code={code}
                tech={tech}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.p
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-4 text-center text-xl"
      >
        {content}
      </motion.p>
    </motion.div>
  )
}

export default Project
