import React, { useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    //dvh helps resize
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-purple-200">
            {/* <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">

            </div> */}
            <div>
                  <video
                    src='videos/trailer.mp4'
                    loop
                    autoPlay
                    muted
                    className='absolute left-0 top-0 size-full object-cover object-center'
                  />
            </div>
            <h1 className="absolute bottom-5 right-5 z-40 font-finalFantasy font-bold responsive-logo text-white">Final Fantasy VII Rebirth</h1>
            <div className="absolute left-0 top-0 z-40 size-full">
              <div className='mt-24 px-5 sm:px-10'>
                <h1 className='mb-5 responsive-header font-generalSans font-bold text-zinc-100'>Whats new?</h1>
                <p className='mb-5 responsive-subheader wax-w-64 font-generalSans text-zinc-100'>In this game, players will enjoy various new elements as the story unfolds, culminating in the party’s journey to “The Forgotten Capital” from the original FINAL FANTASY VII. </p>
                <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
              </div>
            </div>
        </div>
        <h1 className="absolute bottom-5 right-5 font-finalFantasy font-bold responsive-logo text-zinc-800">Final Fantasy VII Rebirth</h1>
    </div>
  )
}

export default Hero