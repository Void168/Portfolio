import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
function Clock() {
  const { play } = useContext(AppContext)

  useEffect(() => {
    setInterval(() => {
      let hh = document.getElementById('hh')
      let mm = document.getElementById('mm')
      let ss = document.getElementById('ss')
      let sec_dot = document.querySelector('.sec_dot')
      let min_dot = document.querySelector('.min_dot')
      let hr_dot = document.querySelector('.hr_dot')
      let hr = document.getElementById('hr')
      let mn = document.getElementById('mn')
      let sc = document.getElementById('sc')

      let h = new Date().getHours()
      let m = new Date().getMinutes()
      let s = new Date().getSeconds()

      hh.style.strokeDashoffset = 510 - (510 * h) / 12
      mm.style.strokeDashoffset = 630 - (630 * m) / 60
      ss.style.strokeDashoffset = 760 - (760 * s) / 60

      sec_dot.style.transform = `rotateZ(${s * 6}deg)`
      min_dot.style.transform = `rotateZ(${m * 6}deg)`
      hr_dot.style.transform = `rotateZ(${h * 30}deg)`

      hr.style.transform = `rotateZ(${h * 30}deg)`
      mn.style.transform = `rotateZ(${m * 6}deg)`
      sc.style.transform = `rotateZ(${s * 6}deg)`
    })
  }, [])
  return (
    <div className="fixed z-50 right-4 flex flex-col justify-center items-center lg:block xs:hidden">
      <div className="holder w-[30px] h-[20px] m-auto bg-white rounded-b-full"></div>
      <div className={play ? `flex flex-col justify-center items-center` : `flex flex-col justify-center items-center thread`}>
        <div className="string w-[2px] h-[200px] bg-white rounded-lg"></div>
        <div className="clock w-[280px] h-[280px] before:w-[2px] flex justify-center items-center rounded-full shadow-2xl scale-[0.7] shadow-[#227942]">
          <div
            id="time"
            className="relative w-[250px] h-[250px] flex justify-center items-center"
          >
            <div className="circle" style={{ '--clr': '#ff2972' }}>
              <div className="dots sec_dot before:bg-[#ff2972]"></div>
              <svg>
                <circle cx="120" cy="120" r="120" id="ss"></circle>
              </svg>
            </div>
            <div className="circle" style={{ '--clr': '#fee800' }}>
              <div className="dots min_dot before:bg-[#fee800]"></div>
              <svg>
                <circle cx="100" cy="100" r="100" id="mm"></circle>
              </svg>
            </div>
            <div className="circle" style={{ '--clr': '#04fc43' }}>
              <div className="dots hr_dot before:bg-[#04fc43]"></div>
              <svg>
                <circle cx="80" cy="80" r="80" id="hh"></circle>
              </svg>
            </div>
            <div className="niddles" id="sc">
              <i></i>
            </div>
            <div className="niddles niddle2" id="mn">
              <i></i>
            </div>
            <div className="niddles niddle3" id="hr">
              <i></i>
            </div>
            <span style={{ '--i': 1 }}>
              <b>1</b>
            </span>
            <span style={{ '--i': 2 }}>
              <b>2</b>
            </span>
            <span style={{ '--i': 3 }}>
              <b>3</b>
            </span>
            <span style={{ '--i': 4 }}>
              <b>4</b>
            </span>
            <span style={{ '--i': 5 }}>
              <b>5</b>
            </span>
            <span style={{ '--i': 6 }}>
              <b>6</b>
            </span>
            <span style={{ '--i': 7 }}>
              <b>7</b>
            </span>
            <span style={{ '--i': 8 }}>
              <b>8</b>
            </span>
            <span style={{ '--i': 9 }}>
              <b>9</b>
            </span>
            <span style={{ '--i': 10 }}>
              <b>10</b>
            </span>
            <span style={{ '--i': 11 }}>
              <b>11</b>
            </span>
            <span style={{ '--i': 12 }}>
              <b>12</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clock
