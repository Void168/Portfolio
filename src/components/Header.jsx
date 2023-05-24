import React from 'react'

function Header() {
  return (
    <header className="py-8 md:container md:mx-auto xs:mx-8">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img
              className="shadow-2xl rounded-xl"
              src="../sfsff.png"
              alt="logo"
            />
          </a>
          <div className="btn btn-sm font-bold text-xl shadow-2xl cursor-grab">
            Work with me
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
