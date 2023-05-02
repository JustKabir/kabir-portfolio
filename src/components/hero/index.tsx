import React from 'react'
import Image from 'next/image'
import { MdEmail, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaFileAlt, FaGithub, FaLinkedinIn, FaYinYang } from "react-icons/fa";

const Hero = () => (
  <div className='min-h-screen relative' id="home">
    <Image src='/hero-bg.jpeg' className='z-0 absolute opacity-5 object-cover object-center' fill alt="" />
    <div className='max-w-[1440px] 2xl:m-auto'>
      <div className='fixed w-full max-w-[1440px] flex flex-row justify-between xsm:px-4 md:px-6 xsm:py-1 md:py-2 z-10'>
        <div>
          <p className='text-primary-500 xsm:text-xl md:text-3xl font-logo'>AK</p>
        </div>
        <div>
          <a href='#home' className='text-secondary-500 xsm:text-lg md:text-xl font-title ml-4'>Home</a>
          <a href='#about' className='text-secondary-500 xsm:text-lg md:text-xl font-title ml-4'>About</a>
          <a href='#work' className='text-secondary-500 xsm:text-lg md:text-xl font-title ml-4'>Work</a>
          <a href='#contact' className='text-secondary-500 xsm:text-lg md:text-xl font-title ml-4'>Contact</a>
        </div>
        <div className='flex items-center'>
          <a target='_blank' href='/resume/AbdulKabir_Resume_2023.pdf' download><FaFileAlt className='text-primary-500 xsm:text-lg md:text-2xl ml-4' /></a>
          <a target='_blank' href='https://github.com/JustKabir'><FaGithub className='text-primary-500 xsm:text-lg md:text-2xl ml-4' /></a>
          <a target='_blank' href='https://linkedin.com/in/justkabir'><FaLinkedinIn className='text-primary-500 xsm:text-lg md:text-2xl ml-4' /></a>
          <a target='_blank' href='mailto:justtkabirr@gmail.com'><MdEmail className='text-primary-500 xsm:text-lg md:text-2xl ml-4' /></a>
        </div>
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <p className='font-title text-8xl xsm:text-5xl md:text-8xl text-primary-500 tracking-wide'>Abdul Kabir</p>
        <p className='font-body text-xl text-white-500 mt-4 xsm:hidden md:block'>Backend Developer. Engineer. </p>
        <p className='font-body text-lg text-white-500 mt-4 md:hidden'>Backend Developer.</p>
        <p className='font-body text-lg text-white-500 md:hidden'>Engineer.</p>
        <p className='font-body xsm:text-lg md:text-xl text-white-500 flex items-center' >Devoted Debugger&nbsp;<FaYinYang></FaYinYang></p>
      </div>
      <div className='absolute bottom-0 pb-2 w-full max-w-[1440px] flex flex-row justify-center'>
        <MdKeyboardDoubleArrowDown className='text-primary-500 text-3xl opacity-30 animate-bounce' />
      </div>
    </div>
  </div>
)

export default Hero