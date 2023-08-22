import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Hero() {
  const ref1 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline( {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        // markers: true,
        scrub: 1.5,
        onEnter: () => ScrollTrigger.refresh(true)
      }
    })

    tl1.to(ref1.current, {
      yPercent:  50,
      rotation: 90,
      ease: 'none',
    })


  }, []);

  return (
    <section className='hero mb-12 overflow-hidden pb-12 text-white'>
      <div className='hero-inner relative bg-primary pb-4 pt-44'>
        <div className='container text-center'>
          <div className='relative'>
            <h1 className='font-secondary text-[162px] uppercase leading-[.82]'>
              <span className='block'>We build magical</span>
              <span className='block'>product teams</span>
            </h1>
            <div ref={ref1} className={`absolute left-10 top-1/2 h-40 w-40`}>
              <img className='h-full w-full object-cover object-center' src='/svg/circle_1.svg' alt='image' />
            </div>
          </div>
          <div className='mx-auto mb-8 mt-12 max-w-lg'>
            <p className='text-2xl'>
              We help high growth start-ups find their unicorns and build world-class product teams from the ground up.
            </p>
          </div>
        </div>
      </div>
      <div ref={ref1} className={`absolute right-20 top-1/2 h-40 w-40`}>
              <img className='h-full w-full object-cover object-center' src='/svg/circle_2.svg' alt='image' />
      </div>
    </section>
  );
}
