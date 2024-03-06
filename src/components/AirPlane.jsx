import React, { useRef, useEffect, useState } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function AirPlane() {
  const { y: pageYOffset } = useWindowScroll()
  const { width } = useWindowSize()
  const [ground, setGround] = useState(8000)
  const imgRef = useRef(null)
  const high = useRef(null)
  const path = useRef(null)
  const island = useRef(null)
  
  const minus =
    Math.max(document.body.scrollHeight) - document.documentElement.scrollTop - 1000
    const fromGround = 8000 -
    Math.round(pageYOffset * (10000 / document.body.scrollHeight))
    
  useEffect(() => {
    const el1 = imgRef.current;
    const el2 = high.current;
    const el3 = island.current
    gsap.fromTo(
      el1,
      { y: 0 },
      {
        y: document.body.scrollHeight,
        duration: 5,
        scrollTrigger: {
          trigger: path.current,
          start: 'top 0%',
          end: '+=5000',
          toggleActions: 'play none none reverse',
          scrub: 2,
        },
      }
    )
    gsap.fromTo(
      el2,
      { y: 0 },
      {
        y: document.body.scrollHeight,
        duration: 50000,
        scrollTrigger: {
          trigger: path.current,
          start: 'top 0%',
          end: '+=5000',
          toggleActions: 'play none none reverse',
          scrub: 2,
        },
      }
    )
    gsap.fromTo(
      el3,
      { y: 0 },
      {
        y: document.body.scrollHeight,
        duration: 50000,
        scrollTrigger: {
          trigger: path.current,
          start: 'top 0%',
          end: '+=5000',
          toggleActions: 'play none none reverse',
          scrub: 2,
        },
      }
    )
    setGround(0)
  },[])

  return (
    <div className="lg:block xs:hidden">
      <div className="flex">
        <span
          className={fromGround > 4000 ? 'absolute xl:left-[1%] lg:left-[1.5%] text-emerald-600 top-5 z-50 high p-2 bg-white shadow-lg rounded-2xl font-semibold' : 'absolute xl:left-[1%] lg:left-[1.5%] top-5 z-50 high p-2 bg-white shadow-lg rounded-2xl font-semibold text-rose-600'}
          ref={high}
        >
          {fromGround > 200 ? fromGround : 0} m
        </span>
        <div
          className="airplane xl:h-full lg:h-[4800px] xl:left-[8%] lg:left-[5%]"
          ref={path}
        ></div>
      </div>

      <div className="">
        <img
          ref={imgRef}
          src="../airplane.png"
          alt="airplane"
          className="airplane--image xl:h-30 xl:w-30 lg:h-20 lg:w-20 absolute xl:left-[6%] lg:left-[1%] xl:top-3 lg:top-14 z-50 scale-x-[-1] rotate-[30deg]"
        />
        <img
          ref={island}
          src="../island.png"
          alt="island"
          className={
            minus > 200 || ground === 10000
              ? 'hidden'
              : `absolute xl:left-[4%] lg:left-[1.5%] top-20 z-50 h-36 w-36`
          }
        />
      </div>
    </div>
  )
}

export default AirPlane
