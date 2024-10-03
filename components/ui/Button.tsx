import Link from 'next/link'
import React from 'react'

interface props {
    link?: string,
    text: string,
}

export default function Button({link, text}: props) {
  return (
    <Link href={link || "/"}>
    <button className='p-2.5 w-full max-w-md rounded-xl bg-neutral-900 outline-2 text-neutral-200 hover:bg-neutral-800 hover:scale-105 duration-500'>
      {text}
    </button>
    </Link>
  )
}

export function Button2({link, text}: props) {
    return (
        <Link href={link || "/"}>
        <button className='p-2.5 w-full max-w-md rounded-xl bg-neutral-100 outline-2 text-neutral-900 hover:bg-neutral-300 hover:scale-105 duration-500'>
          {text}
        </button>
        </Link>
    )
  }

  
  export function Button3({link}: props) {
    return (
      <Link href={link || "/"}>
      <button>
  
      </button>
      </Link>
    )
  }
  

