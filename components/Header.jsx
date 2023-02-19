import Image from 'next/image';
import React from 'react';
import logo from '../public/assets/logo.svg'
const Header = () => {
  return <div className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <div className='capitalize font-bold text-sky-200 text-xs'>
          {/* <Image src={logo} alt="logo" width={100} height={100} /> */}
          <span className='text-gradient uppercase '>moz</span> portfolio two
        </div>
        <button className='btn btn-sm'>work with me</button>
      </div>
    </div>
  </div>;
};

export default Header;
