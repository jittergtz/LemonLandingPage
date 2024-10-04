import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav className='flex w-full px-2 sm:px-5 z-50 fixed top-5 justify-center'>
    <div className='p-2  flex justify-between shadow-lg px-5 backdrop-blur-lg items-center max-w-7xl w-full h-16 bg-white/60 rounded-2xl border-neutral-400'>
   <h1 className='text-neutral-950'>Lemon</h1>
  <div className='flex items-center gap-4 text-neutral-950  '>
   <Link  href={"/"} className='hover:text-lime-600 duration-500'>Product</Link>
   <Link  href={"/"} className='hover:text-lime-600 duration-500'>News</Link>
   <Link  href={"/"} className='hover:text-lime-600 duration-500'>Login</Link>
  </div>
   
    </div>
    </nav>
  )
}

export default Nav

export function NavBottom() {
    return (
      <nav className='flex w-full z-50 fixed  top-2 border  justify-center'>
      <div className='p-2  flex justify-between shadow-lg px-5 backdrop-blur-lg items-center max-w-7xl w-full h-16 bg-white/60 rounded-2xl border-neutral-400'>
       <h1 className='text-neutral-950'>Lemon</h1>
       <div className='flex items-center gap-4'>
       <h1 className='text-neutral-950'>Product</h1>
       <h1 className='text-neutral-950'>News</h1>
       <h1 className='text-neutral-950'>Login</h1>
       </div>
     
      </div>
      </nav>
    )
  }