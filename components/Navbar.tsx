import Link from 'next/link'
import React from 'react'
import {Bell, Search} from 'react-feather'
export default function Navbar() {
  return (
    <header className='bg-yellow-400 w-full h-[60px] px-5 flex justify-between items-center'>
      <div className='relative'>
        <span className='absolute h-full pl-2 left-0 flex items-center justify-center'>
          <Search />
        </span>
        <input 
          type="text" 
          placeholder='Search for players...' 
          className='rounded-md text-[14px] px-3 pl-9 w-[320px] outline-none h-[40px] border-gray-400 border-[0.5px] before:content-[  ]'/>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <Link href={'/notification'}>
          <Bell width={30}/>
        </Link>
        <div className='flex justify-center items-center gap-2'>
          <div className='w-[30px] h-[30px] rounded-full bg-red-700'></div>
          <h3>Username</h3>
        </div>
      </div>
    </header>
  )
}
