import React, { useContext } from 'react'

import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquare } from 'react-icons/bs'

import { Link } from 'react-scroll'
import { AppContext } from '../context/AppContext'

function Navbar() {
    const { handleRunAnimate } = useContext(AppContext)

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            onClick={handleRunAnimate}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            onClick={handleRunAnimate}
          >
            <BiUser />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            onClick={handleRunAnimate}
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            onClick={handleRunAnimate}
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
