import React from 'react'

function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img
              className="shadow-2xl rounded-xl"
              src="../sfsff.png"
              alt="logo"
            />
          </a>
          <button className="btn btn-sm font-bold text-xl shadow-2xl">
            Work with me
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
