import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <main className='w-full h-full flex'>
      <SideBar/>
      <div className='w-full'>
        <Navbar/>
        {children}
      </div>
    </main>
  )
}
