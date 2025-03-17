import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import React from 'react'

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
  });
  });
  return (
    //min-h-screen w-screen makes it full screen
    <div id="about" className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            
            <h2 className='font-generalSans text-sm uppercase md:text-[10px]'>
                Welcome to Final Fantasy VII Rebirth
            </h2>

            <div>
              DISCOVER A OPEN WORLD GAME
            </div>

            <div className='about-subtext'>
              <p>Lorem ipsum odor amet, consecteidit phasellus sit tricies quis amet gravida fames eros parturient.</p>
            </div>

          
            </div>
            <div className='h-dvh w-screen' id='clip'>
              <div className='mask-clip-path about-image'>
                <img src="/img/final-fantasy-world-2.png" alt='grassy lands' className='absolute left-0 top-0 size-full object-cover'/>
              </div>
        </div>   
        
    </div>
  )
}

export default About