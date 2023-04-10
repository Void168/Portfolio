import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
import Project from './Project'

function Work() {
  const [projects, setProjects] = useState([
    {
      _id: '1',
      name: 'Weirdshop',
      imgUrl: 'bg-pj1',
      content: 'Technology Sales Website',
      tech: [
        'ReactJs',
        'Tailwind CSS',
        'Redux Toolkit',
        'NodeJs',
        'ExpressJs',
        'MongoDB',
      ],
      url: 'https://weirdshop.netlify.app/',
    },
    {
      _id: '2',
      name: 'Restaurant UI',
      imgUrl: 'bg-pj2',
      content: 'Build UI Landing Website',
      tech: ['ReactJs', 'CSS3'],
      url: 'https://chefhoangdung.netlify.com/',
    },
    {
      _id: '3',
      name: 'Spotify Clone',
      imgUrl: 'bg-pj3',
      content: 'Clone music website based on spotify',
      tech: [
        'ReactJs',
        'Vite',
        'Tailwind CSS',
        'Redux Toolkit',
        'Rapid Api (Shazam)',
      ],
      url: 'https://musizfy.netlify.app/',
    },
    {
      _id: '4',
      name: 'Hfood',
      imgUrl: 'bg-pj4',
      content: 'Food Sales Website',
      tech: [
        'ReactJs',
        'MUI',
        'CSS',
        'Redux',
        'NodeJs',
        'ExpressJs',
        'MongoDB',
      ],
      url: 'https://github.com/Void168/Hfood-reup',
    },
    {
      _id: '5',
      name: 'FoodApp Mobile',
      imgUrl: 'bg-pj5',
      content: 'Practice React Native by building food order app',
      tech: ['React Native', 'Tailwind CSS', 'Redux Toolkit', 'Sanity.io'],
      url: 'https://github.com/Void168/FoodApp',
    },
    {
      _id: '6',
      name: 'Portfolio',
      imgUrl: 'bg-pj6',
      content: 'My Portfolio',
      tech: ['ReactJs', 'Vite', 'Tailwind CSS'],
      url: '',
    },
  ])

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div>
          <div>
            {/* text */}
            <div>
              <p className="h2 leading-tight">My Lastest Work</p>
              <p>Giới thiệu</p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            <div>
              <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-8 my-8">
                {projects.map((project) => {
                  return (
                    <Project
                      {...project}
                      data-value={project._id}
                      key={project._id}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
