import React from 'react'
import "@app/globals.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@components/explicitlogo.png'



const Nav = () => {
  return (
    <div className='nav flex justify-between gap-8 z-10'>
        <Link href="./" className='ml-4'>
        <Image className='w-full h-12'
      src={logo}
      width={500}
      height={500}
      alt="logo"
    />
        </Link>
      <ul className=' lg:mr-24 mr-8'>
        <li className='list'>
          <Link href="./about">About</Link>
        </li>
        <li></li>
      </ul>
    </div>
  )
}

export default Nav
