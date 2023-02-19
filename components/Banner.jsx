'use client';
import img from '../public/assets/me_1.png'
import {FaGithub,FaYoutube,FaDribbble, FaLinkedin} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Image from 'next/image'
import Link from 'next/link';
import ContactBtn from './ContactBtn';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center' id="home">
    <div className="container">
      <div className='flex flex-col justify-center items-center gap-y-8 lg:flex-row lg:items-center lg:justify-start lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn
          ('up',.3)} initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false,amount:.7}} className='text-[45px] font-bold leading-[.8] lg:text-[80px]'> Mohammed <span>Ramadan</span> </motion.h1>
          <motion.div
          variants={fadeIn
            ('up',.5)} initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false,amount:.7}}
          className='flex items-center'>
            <span className='mr-4 text-[36px] lg:text-[50px] uppercase font-semibold leading-[2]'>i am a</span>
            <TypeAnimation 
              sequence={[
                'Frontend',
                1000,
                'Developer',
                1000
              ]}
              speed={50}
              className="text-gradient text-[36px] lg:text-[50px] font-semibold"
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p 
          variants={fadeIn
            ('up',.7)} initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false,amount:.7}}
          className='mb-8 max-w-lg
          mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam esse molestias nesciunt in sunt accusantium illo, minus provident quam suscipit earum quod alias perferendis dolores porro, placeat harum commodi!
          </motion.p>
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
        {/* image */}
        <motion.div
          variants={fadeIn
          ('down',.7)} initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false,amount:.7}}
          className='hidden lg:flex relative 
          before:absolute before:top-0 before:left-0 
          lg:before:w-96 lg:before:h-96 
          before:w-40 before:h-40 
          md:before:w-80 md:before:h-80 
          before:bg-sky/40 before:z-50 before:rounded-full
          '>
          <Image src={img} alt="img" className='lg:w-96 lg:h-96
          md:w-80 md:h-80 
          w-40 h-40 object-cover' style={{borderRadius:"50%"}}/>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
