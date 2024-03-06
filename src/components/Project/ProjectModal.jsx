import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
}

function ProjectModal({
  name,
  imgUrl,
  tech,
  code,
  url,
  description,
  features,
}) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button
        onClick={handleOpen}
        className="rounded-2xl font-medium px-8 py-1 border-2 border-white shadow-sm cursor-pointer hover:bg-green-300 hover:text-black ease-in-out duration-300 hover:bg-opacity-70"
      >
        More Info
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-2xl shadow-2xl max-h-max">
          <div
            className={` ${imgUrl} bg-cover bg-center bg-no-repeat rounded-t-2xl sm:h-48 xs:h-32 w-full`}
          >
            <div className="bg-black flex flex-col justify-end h-full bg-opacity-60">
              <p className="sm:text-5xl xs:text-4xl mb-8 ml-12">{name}</p>
            </div>
          </div>
          <div className="sm:pl-8 xs:pl-0 bg-project bg-cover bg-scroll">
            <div className="flex sm:flex-row xs:flex-col-reverse sm:justify-around xs:justify-start overflow-auto sm:h-108 xs:h-[500px]">
              <div className="px-4">
                <div className="sm:my-4 xs:my-0">
                  <p className="sm:text-3xl xs:text-xl mb-4">
                    Project Overview
                  </p>
                  <p className="lg:text-lg sm:text-base xs:text-sm">
                    {description}
                  </p>
                </div>

                <div className="py-4">
                  <p className="sm:text-3xl xs:text-xl mb-4">Features</p>
                  <ul className="grid grid-cols-1 gap-2">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="lg:text-lg sm:text-base xs:text-sm"
                      >
                        - {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="my-4 flex sm:flex-row flex-wrap xs:items-center xs:justify-center sm:justify-normal gap-2">
                    {url !== 'blank' ? (
                      <Link to={url} target="_blank">
                        <motion.button className="px-8 mx-2 border-2 rounded-full hover:bg-white hover:bg-opacity-70 hover:text-black duration-150 ease-in-out hover:shadow-2xl hover:shadow-gray-400">
                          View
                        </motion.button>
                      </Link>
                    ) : null}

                    <Link to={code} target="_blank">
                      <motion.button className="px-8 mx-2 border-2 rounded-full hover:bg-white hover:bg-opacity-70 hover:text-black duration-150 ease-in-out hover:shadow-2xl hover:shadow-gray-400">
                        Code
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 my-4">
                <p className="sm:text-2xl xs:text-xl sm:mb-8 xs:mb-2">
                  Technologies
                </p>
                <ul className="shadow-2xl p-2 text-black font-semibold bg-white shadow-emerald-500 rounded-lg grid sm:grid-cols-1 xs:grid-cols-3">
                  {tech.map((t, index) => (
                    <li
                      key={index}
                      className="my-2 lg:text-lg sm:text-base xs:text-sm"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ProjectModal
