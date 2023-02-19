'use client';
import {InView, useInView} from 'react-intersection-observer'
// import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import ContactBtn from './ContactBtn';

const About = () => {
  const [ref,inView] = useInView({
    threshold:.5
  })
  return <div className='section' id="about" ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gapy10
       lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen font-primary
       '>
        {/* image */}
        <motion.div 
        className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-exclusion rounded-full bg-top"
        variants={fadeIn('right',.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:.3}}
        >
        </motion.div>
        {/* text */}
        <motion.div
          className="flex-1"
          variants={fadeIn('left',.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:.3}}
         >
          <h2 className='h2 text-sky-400'>about me</h2>
          <h3 className='h3 mb-4'>
          i&apos;m a freelance front-end developer with over 2 years of experience
          </h3>
          <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ut animi? Odio asperiores deleniti iure quam animi tempore doloremque aliquam id suscipit reiciendis, accusamus modi quis aperiam unde aspernatur amet.</p>
          {/* stats */}
          <div className="flex gap-x-6 lg:gap-x-10 mb-12">
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                {/* {inView ? <CountUp start={0} end={13} duration={3} /> : null} */}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                years of <br/>
                Experience
              </div>
            </div>
            <ContactBtn/>
          </div>
        </motion.div>

      </div>
    </div>
  </div>;
};

export default About;
