'use client';
import { fadeIn } from '@/variants';
import {motion} from 'framer-motion'
const services = [
  {
    title:"responsive design",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatum voluptatem voluptas",
    link:'learn more'
  },
  {
    title:"animations",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatum voluptatem voluptas",
    link:'learn more'
  },
  {
    title:"secure API",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatum voluptatem voluptas",
    link:'learn more'
  },
  {
    title:"secure authentication",
    description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatum voluptatem voluptas",
    link:'learn more'
  },
]
const Services = () => {
  return <section className='section' id="services">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* text + image */}
        <motion.div
                 variants={fadeIn('right',.3)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once:false,amount:.3}}
        className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
          <h2 className="h2 text-sky-400 mb-6">what i Do</h2>
          <h3 className="h3 max-w-[455px] mb-16">
            i&apos;m a freelance front-end developer with over 2 years of experience
          </h3>
          <button className="btn btn-sm"> see my work </button>
        </motion.div>
        {/* services list */}
        <div>
          {services.map((serv,i) => {
            const {title,description,link} = serv
            return (
              <motion.div 
              variants={fadeIn('left',.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:.3}}    
              key={i} className="border-b border-white/20 h-[146px] mb-[38] flex">
                <div className="max-w-[476px]">
                  <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{title}</h4>
                  <p className="font-secondary leading-tight">{description}</p>
                </div>
                <div>links</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  </section>;
};

export default Services;
