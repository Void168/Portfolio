import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

import data from '../data'

import Project from './Project/Project'

function Work() {
  const [projects, setProjects] = useState([...data])

  return (
    <section className="section  xl:h-[1200px] " id="work">
      <div className="container mx-auto">
        <div>
          <div>
            {/* text */}
            <div>
              <p className="h2 leading-tight">My Lastest Work</p>
              <a
                href="https://github.com/Void168?tab=repositories"
                target="_blank"
              >
                <button className="btn btn-sm">View all projects</button>
              </a>
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
