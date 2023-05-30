import React from 'react'
import "@app/globals.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@components/explicitlogo.png'



const Nav = () => {
  return (
    <div className='nav flex justify-between z-10'>
        <Link href="./">
        <Image className='w-full h-12'
      src={logo}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </Link>
      <ul className=' mr-28'>
        <li className='list'>
          <Link href="./about">About</Link>
        </li>
        <li></li>
      </ul>
    </div>
  )
}

export default Nav
