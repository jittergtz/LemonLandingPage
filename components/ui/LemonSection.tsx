import React from 'react'
import Nav, { NavBottom } from './Nav'
import Image from 'next/image'

function LemonSection() {
  return (
    <div className="h-[400vh] pt-20 flex justify-center relative" >
   <div className=" p-5 inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <div className='flex justify-center'>

     <div className='w-full max-w-7xl ' >
  
     <div className='w-full p-5 h-96 rounded-3xl  bg-neutral-800'>
        <h1 className='text-5xl text-neutral-400'>
            Start today.
        </h1>
        <p className='text-neutral-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure aspernatur earum. Nostrum vel distinctio dicta vitae ratione dolor eum similique in laboriosam cumque beatae, nesciunt quo, harum at sed?
        </p>
     </div>


     <div className='w-fit mt-20 relative rounded-3xl overflow-hidden  bg-neutral-800'>
     <Image 
     className='bg-cover z-0' 
     src="https://utfs.io/f/mQNDgQBdulFSGVD884aAKvrn0XClmFVkB8u4qStJObxNYzUa"
     width={1920}
     height={1080} 
     alt='cover'/>
     <div className='absolute z-50 top-0 p-5'>
        <h1 className='text-xl'>Bring your vision to live</h1>
     </div>
     </div>
  
  
   </div>
   </div>
   </div>
   </div>
  )
}

export default LemonSection