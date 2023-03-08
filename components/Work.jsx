'use client';
// 1:12m
import Image from "next/image";
import img_1 from '@/public/assets/Ecommerce.png'
import img_2 from '@/public/assets/social_media.png'
import img_3 from '@/public/assets/portfolio.png'
import { fadeIn } from "@/variants";
import {motion} from 'framer-motion'
const Work = () => {
  const myWork = [
    {
      name:"Moz E-commerce",
      image:img_1,
      category:"Next.js",
      techs:["React.js","Next.js","Sass","Node.js","MongoDB","Rest API","Material UI Tables"]
    },
    {
      name:"Moz Social Media",
      image:img_2,
      category:"Next.js",
      techs:["React.js","Next.js","Sass","Node.js","MongoDB","Rest API"]
    },
    {
      name:"Portfolio",
      image:img_3,
      category:"Next.js",
      techs:["React.js","Next.js","Tailwind CSS","Typescript"]
    },
  ]
  const projectOne = myWork[0]
  const projects = [myWork[1],myWork[2]]
  return <section className='section' id="work">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-x-10">
        <motion.div
        variants={fadeIn('right',.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:.3}}
        className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0">
          {/* text */}
          <div className="">
            <h2 className="h2 leading-tight text-sky-500">
              My Latest <br/>
              Work.
            </h2>
            <p className="max-w-sm mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta, omnis accusamus, et repellendus cum nam non, deleniti adipisci est architecto ex magnam ullam dolorem! Quaerat animi blanditiis pariatur voluptas!
            </p>
            <button className="btn btn-sm"> view all projects </button>
          </div>
          {/* image */}
          <div className="group h-96 relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <Image className="group-hover:scale-125 transition-all duration-500" src={projectOne.image} alt="img" />
            {/* pretitle */}
            <div className="absolute -top-full left-12 group-hover:top-14 transition-all duration-500 z-40"> 
              <span className="text-gradient"> {projectOne.category} </span>
            </div>
            {/* title */}
            <div className="absolute -top-full left-12 group-hover:top-24 transition-all duration-700 z-40">
              <span className="text-3xl text-white"> {projectOne.name} </span>
            </div>
            <div className="absolute opacity-0 -left-full top-36 flex flex-wrap gap-2 group-hover:left-12 group-hover:opacity-100 transition-all duration-[.3s] z-40">
              {projectOne.techs.map(tech => (
                <span key={tech} className=" text-xs text-gradient"> {tech} </span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left',.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:.3}}
          className="flex-1 flex flex-col gap-y-10">
          {projects.map(project => (
            <div key={project.name} className="group h-96 group-hover:z-50 relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <Image className="group-hover:scale-125 transition-all duration-500" src={project.image} alt="img" />
            {/* pretitle */}
            <div className="absolute -top-full left-12 group-hover:top-14 transition-all duration-500 z-40"> 
              <span className="text-gradient"> {project.category} </span>
            </div>
            {/* title */}
            <div className="absolute -top-full left-12 group-hover:top-24 transition-all duration-700 z-40">
              <span className="text-3xl text-white"> {project.name} </span>
            </div>
            <div className="absolute opacity-0 -left-full top-36 flex flex-wrap gap-2 group-hover:left-12 group-hover:opacity-100 transition-all duration-[.3s] z-40">
              {project.techs.map(tech => (
                <span key={tech} className=" text-xs text-gradient"> {tech} </span>
              ))}
            </div>
          </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
