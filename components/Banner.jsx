'use client';
import img from '../public/assets/me_1.png'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Image from 'next/image'
import Link from 'next/link';
import ContactBtn from './ContactBtn';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center' id="home">
    <div className="container">
      <div className=''>
        {/* text */}
        <div className='flex flex-col justify-center items-center text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn
          ('up',.3)} initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false,amount:.7}} className='text-[45px] font-bold leading-[.8] lg:text-[60px]'> Mohammed <span>Ramadan</span> </motion.h1>
          <motion.div
          variants={fadeIn
            ('up',.5)} initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false,amount:.7}}
          className='flex items-center'>
            <span className='mr-4 text-[36px] lg:text-[30px] uppercase font-semibold leading-[2]'>i am a</span>
            <TypeAnimation 
              sequence={[
                'Frontend',
                1000,
                'Developer',
                1000
              ]}
              speed={50}
              className="text-gradient text-[36px] lg:text-[30px] font-semibold"
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          {/* contact me - button */}
          <ContactBtn/>
          {/* social */}
          <motion.div
          variants={fadeIn
            ('up',1)} initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false,amount:.7}}
          className='flex text-[20px] gap-x-6 max-w-max
          mx-auto lg:m-0'>
            <Link href='/'>
              <FaGithub/>
            </Link>
            <Link href='/'>
              <FaLinkedin/>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
