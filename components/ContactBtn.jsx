import { fadeIn } from '@/variants'
import {motion} from 'framer-motion'
function ContactBtn() {
  return (
    <>
    <motion.div
        variants={fadeIn
        ('up',.8)} initial="hidden" 
        whileInView={'show'} 
        viewport={{once:false,amount:.7}}
        className='flex max-w-max
        gap-x-6 items-center
        mb-12 mx-auto lg:mx-0 '>
        <button className='btn btn-lg'>
            contact me
        </button>
        <div className='text-gradient btn-link uppercase'>now</div>
    </motion.div> 
    </>
  )
}

export default ContactBtn